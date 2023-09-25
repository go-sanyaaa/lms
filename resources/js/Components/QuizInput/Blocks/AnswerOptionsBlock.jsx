import {Button, Caption, FormItem, Switch, Tappable, Textarea,} from '@vkontakte/vkui'
import {v4 as uuidv4} from 'uuid'
import {
    Icon16DeleteOutline,
    Icon24CheckBoxOff, Icon24CheckBoxOn,
    Icon24CheckCircleFillGreen,
    Icon24CheckCircleOff, Icon24CheckCircleOn
} from '@vkontakte/icons'
import t from 'prop-types'
import {useFormik} from 'formik'
import {useCallback, useEffect, useMemo} from "react";
import {debounce, indexOf} from "lodash";

export const makeInitialQuestion = () => {
    return {
        question: '',
        answers: [{key: uuidv4(), text: '', is_correct: false}],
        extra: {
            multiple: false
        }
    }
}

function AnswerOptionsBlock({value, onUpdate}) {
    const formik = useFormik({
        initialValues: value || makeInitialQuestion()
    })

    const canSetNewCorrectAnswers = useMemo(
        () => formik.values.extra.multiple || formik.values.answers.every(a => !a.is_correct),
        [formik.values.extra, formik.values.answers]
    )

    useEffect(() => {
        if (formik.values.extra.multiple) {
            return
        }

        const correctAnswers = formik.values.answers.filter(a => a.is_correct)

        if (correctAnswers.length === 1) {
            return
        }

        correctAnswers.slice(1).map(toggleAnswer)
    }, [formik.values.extra, formik.values.answers]);

    const addAnswer = useCallback(() => {
        const newIndex = formik.values.answers.length
        formik.setFieldValue(`answers.${newIndex}`, {key: uuidv4(), text: '', is_correct: false})
    }, [formik.values.answers])

    const toggleAnswer = useCallback((answer) => {
        const index = indexOf(formik.values.answers, answer)
        formik.setFieldValue(`answers.${index}.is_correct`, !answer.is_correct)
    }, [formik.values.answers])

    const removeAnswer = useCallback((index) => {
        const newAnswersList = [...formik.values.answers]
        newAnswersList.splice(index, 1)

        formik.setFieldValue(`answers`, newAnswersList)
    }, [formik.values.answers])

    const saveUpdate = useCallback(
        debounce((data) => {
            onUpdate(data)
        }, 500),
        [onUpdate]
    )

    useEffect(() => {
        saveUpdate(formik.values)
    }, [formik.values]);

    const [CheckedIcon, UncheckedIcon] = useMemo(() => {
        return formik.values.extra.multiple ? [
            Icon24CheckBoxOn, Icon24CheckBoxOff
        ] : [
            Icon24CheckCircleOn, Icon24CheckCircleOff
        ]
    }, [formik.values.extra.multiple]);

    return (
        <>
            <div className="rounded-md">
                <FormItem>
                    <Textarea
                        value={formik.values.question}
                        name="question"
                        onChange={formik.handleChange}
                        rows={1}
                        placeholder="Вопрос"
                    />
                </FormItem>
                <div className="pt-3">
                    {formik.values.answers.map((answer, index) => (
                        <FormItem
                            style={{
                                paddingTop: 0,
                                paddingLeft: 0,
                            }}
                            key={answer.key}
                        >
                            <div className="flex items-start relative w-full pl-4 box-border">
                                <Tappable
                                    className="rounded-xl px-1.5 box-border flex items-center border border-solid justify-center mr-2"
                                    style={{
                                        background:
                                            'var(--vkui--color_field_background)',
                                        borderColor:
                                            'var(--vkui--color_field_border_alpha)',
                                        color: 'var(--vkui--color_text_accent_themed)',
                                        height: 'var(--vkui--size_field_height--compact)'
                                    }}
                                    disabled={!canSetNewCorrectAnswers && !answer.is_correct}
                                    onClick={() => toggleAnswer(answer)}
                                >
                                    {answer.is_correct ? <CheckedIcon color={'#4bb44c'}/> : <UncheckedIcon/>}
                                </Tappable>
                                <Textarea
                                    className={'flex-1'}
                                    name={`answers.${index}.text`}
                                    value={answer.text}
                                    rows={1}
                                    onChange={formik.handleChange}
                                    placeholder="Ответ"
                                />
                                {
                                    formik.values.answers.length > 1 && (
                                        <Tappable
                                            tabIndex={-1}
                                            style={{position: 'absolute', color: 'var(--vkui--color_text_secondary)'}}
                                            className={'right-1.5 top-1.5'}
                                            onClick={() =>
                                                removeAnswer(index)
                                            }
                                        >
                                            <div className="p-1 cursor-pointer">
                                                <Icon16DeleteOutline/>
                                            </div>
                                        </Tappable>
                                    )
                                }
                            </div>
                        </FormItem>
                    ))}
                    <div className="flex items-center justify-between space-x-2 px-4 pb-3">
                        <div className={'flex-1 flex items-center space-x-2'}>
                            <Button
                                onClick={addAnswer}
                                mode="secondary"
                            >
                                Добавить ответ
                            </Button>
                        </div>
                        <div
                            className="flex items-center space-x-2"
                            style={{
                                color: 'var(--vkui--color_text_secondary)',
                            }}
                        >
                            <Caption>Множественный выбор</Caption>
                            <Switch name={'extra.multiple'} checked={formik.values.extra.multiple}
                                    onChange={formik.handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

AnswerOptionsBlock.propTypes = {
    value: t.shape({
        question: t.string,
        answers: t.arrayOf(
            t.shape({
                key: t.string.isRequired,
                text: t.string.isRequired,
                is_correct: t.bool
            })
        ),
        extra: t.shape({
            multiple: t.bool
        })
    }).isRequired,
    onUpdate: t.func.isRequired,
}

export default AnswerOptionsBlock
