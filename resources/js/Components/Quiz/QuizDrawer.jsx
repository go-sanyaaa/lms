import React, {useEffect, useState} from "react";
import {Drawer, message, Modal} from "antd";
import {Button} from "@vkontakte/vkui";
import QuizQuestionInput from "@/Components/Quiz/QuizQuestionInput";
import {useFormik} from "formik";
import {isArray} from "lodash";
import {useForm} from "@inertiajs/inertia-react";
import {QUIZ_STATUSES} from "@/constants/statuses";


const QuizDrawer = ({open, onClose, lessonId, quiz = null}) => {
    const {questions = []} = quiz

    const [modal, contextHolder] = Modal.useModal();

    const [quizStatus, setQuizStatus] = useState(QUIZ_STATUSES.IN_PROGRESS)

    const {setData, data, post, processing} = useForm({
        responses: []
    })

    const formik = useFormik({
        initialValues: questions.reduce((obj, q) => {
            obj[q.id] = null

            return obj
        }, {})
    })

    const checkAnswers = () => {
        const countCorrectAnswers = data.responses.filter(response => {
            const correctAnswers = questions.find(q => q.id === response.question_id)
                ?.answers?.filter(a => a.is_correct)?.map(a => a.id)?.sort()?.join(",")

            const userAnswers = response.answers_ids?.sort().join(",")

            return correctAnswers === userAnswers
        }).length

        const correctPercent = 100 / questions.length * countCorrectAnswers

        setQuizStatus(QUIZ_STATUSES.CHECK)

        // return correctPercent < 70 ? setQuizStatus(QUIZ_STATUSES.CHECK) : sendAnswer()
    }

    useEffect(() => {
        const responses = Object.keys(formik.values).map(id => ({
            question_id: +id,
            answers_ids: formik.values[id]
        }))

        setData({responses})
    }, [formik.values]);

    const sendAnswer = () => {
        modal.confirm({
            title: "Подтвердите действие",
            content: "Завершить тестирование и сохранить результат ?",
            okText: "Да",
            cancelText: "Нет",
            onOk: async () => {
                const resp = await post(route('lesson.answer.store', lessonId), {
                    preserveScroll: true,
                    preserveState: true
                })
            }
        })
    }

    const handleSubmit = () => {
        const isAllAnswered = Object.keys(formik.values).length === Object.keys(formik.values).map(key => formik.values[key]).filter(v => isArray(v) ? !!v.length : !!v).length

        if(!isAllAnswered) {
            return message.warning('Необходимо ответить на все вопросы')
        }

        if(quizStatus === QUIZ_STATUSES.IN_PROGRESS) {
            return checkAnswers();
        }
    }

    return (
        <Drawer width={600} bodyStyle={{padding: 0}} open={open} centered onClose={onClose} closable={false}
                title={(
                    <div className={'flex justify-between'}>
                        <span>{'Тестирование'}</span>
                    </div>
                )}
        >
            <div className={'flex flex-col h-full '}>
                <div className={'flex-1 space-y-4 px-4 my-4'}>
                    {questions.map((q, index) => (
                        <QuizQuestionInput key={q.id} number={index + 1}
                                           showCorrect={QUIZ_STATUSES.CHECK === quizStatus}
                                           value={formik.values[q.id] ?? undefined}
                                           onChange={(v) => formik.setFieldValue(q.id, v)}
                                           question={q}
                        />
                    ))}
                </div>
                {quizStatus !== QUIZ_STATUSES.COMPLETED && (
                    <div className={'bg-gray-100 p-6 py-4 flex space-x-2'}>
                        {QUIZ_STATUSES.CHECK === quizStatus && (
                            <Button onClick={() => setQuizStatus(QUIZ_STATUSES.IN_PROGRESS)} mode={'outline'} stretched size={'m'}>
                                Пройти тест заново
                            </Button>
                        )}
                        <Button onClick={quizStatus === QUIZ_STATUSES.IN_PROGRESS ? handleSubmit : sendAnswer} stretched size={'m'}>
                            {quizStatus === QUIZ_STATUSES.IN_PROGRESS ? "Проверить результат" : "Завершить и закрыть тест"}
                        </Button>
                    </div>
                )}
            </div>
            {contextHolder}
        </Drawer>
    )
}

export default QuizDrawer
