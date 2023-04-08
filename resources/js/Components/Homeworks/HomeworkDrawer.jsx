import React, {useMemo} from "react";
import t from "prop-types"
import {Alert, Button, Drawer, Form, Input, Modal} from "antd";
import {CheckOutlined, CloseOutlined, SaveOutlined} from "@ant-design/icons";
import InputAttachments from "@/Components/InputAttachments";
import {useForm, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import {HomeworkStatus} from "@/constants/statuses";
import useToggleState from "@/helpers/useToggleState";
import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";
import AnswersList from "@/Components/Answers/AnswersList";

const HomeworkDrawer = ({open, onClose, homework, lesson, reworkDate}) => {
    const [form] = Form.useForm()
    const [loading, setLoading, toggleLoading] = useToggleState(false)
    const {setData, data, post, reset, processing} = useForm({
        content: '',
        attachments: []
    })

    const {auth} = usePage().props

    const user = auth?.user

    const lastUserAnswer = useMemo(() => homework?.answers?.filter(a => a.author.id === user.id)?.reverse()[0] || null,
        [homework?.answers, user]
    )

    const isOpen = homework?.status?.id === HomeworkStatus.OPEN.id
    const isRework = homework?.status?.id === HomeworkStatus.REWORK.id

    const canSendToReview = homework?.answers?.length > 0 && (isOpen || (isRework && (!reworkDate || lastUserAnswer?.created_at > reworkDate)))
    const canSend = data.content?.length > 0 || data.attachments?.length > 0

    const handleSaveAnswer = () => {
        post(route('lesson.answer.store', lesson.id), {
            onSuccess: () => {
                reset()
                form.resetFields()
            },
            onError: (r) => console.log(r)
        })
    }

    const handleSendToReview = () => {
        const onOk = () => Inertia.post(route('homework.status.change', {homework: homework.id}), {status_id: HomeworkStatus.REVIEW.id}, {
            onStart: toggleLoading, onFinish: () => setLoading(false),
        })

        Modal.confirm({
            title: 'Подтвердите',
            content: 'После того как работа уйдет на проверку вы больше не сможете добавлять новые ответы',
            centered: true,
            onOk
        })
    }

    return (
        <Drawer bodyStyle={{padding: 0}} open={open} width={500} closable={false} onClose={onClose}
                title={(
                    <div className={'flex items-center justify-between'}>
                        <span>Решение по уроку</span>
                        <Button onClick={onClose} shape={'circle'} icon={<CloseOutlined/>}/>
                    </div>
                )}
        >
            <div className={'flex h-full flex-col'}>
                <div className={'flex-1 overflow-y-scroll'}>
                    <AnswersList answers={homework?.answers}/>
                    {(!homework || isOpen || isRework) && (
                        <div className={'px-2 py-2 bg-gray-100 sticky bottom-0'}>
                            <div className={'bg-white rounded-md border border-dashed border-gray-200 p-4 '}>
                                <Form form={form} layout={'vertical'} onValuesChange={(_, values) => setData(values)}>
                                    <Form.Item label={'Обратная связь по уроку:'} name={'content'}>
                                        <Input.TextArea placeholder={'Напиши свою обратную связь по уроку'}
                                                        autoSize={{minRows: 1}}/>
                                    </Form.Item>
                                    <Form.Item name={'attachments'}>
                                        <InputAttachments showEmpty={false}/>
                                    </Form.Item>
                                    <Button onClick={handleSaveAnswer} disabled={!canSend} block
                                            icon={<SaveOutlined/>} loading={processing}>Сохранить решение</Button>
                                </Form>
                            </div>
                        </div>
                    )}

                </div>
                <div>
                    {isRework && (
                        <div className={'px-6 py-4 bg-yellow-50'}>
                            <Alert
                                message={<b>Ваше задание необходимо доработать</b>}
                                description={"Внесите правки в файл домашнего задания, согласно замечаниям - загрузите данный файл и cохраните решение."}
                                type={'warning'}
                            />
                        </div>
                    )}
                    <div className={'p-4 px-6 bg-gray-100 shadow-2xl flex space-x-2'}>
                        <HomeworkStatusBlock homework={homework}/>
                        {(!homework || isOpen || isRework) && (
                            <Button onClick={handleSendToReview} loading={loading}
                                    disabled={!canSendToReview || processing} type={'primary'} icon={<CheckOutlined/>}
                                    block>
                                Отправить решение на проверку
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Drawer>
    )
}

HomeworkDrawer.propTypes = {
    open: t.bool,
    onClose: t.func,
    homework: t.object,
    lesson: t.object,
    reworkDate: t.string
}

export default HomeworkDrawer
