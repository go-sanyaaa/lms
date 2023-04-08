import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";
import {Button, Drawer, Form, Input, Modal} from "antd";
import React from "react";
import t from "prop-types"
import useToggleState from "@/helpers/useToggleState";
import AnswersList from "@/Components/Answers/AnswersList";
import HomeworkGradeModal from "@/Components/Homeworks/HomeworkGradeModal";
import {HomeworkStatus} from "@/constants/statuses";
import {Inertia} from "@inertiajs/inertia";
import InputAttachments from "@/Components/InputAttachments";
import {SaveOutlined, SendOutlined} from "@ant-design/icons";
import {useForm} from "@inertiajs/inertia-react";

const HomeworkAuditorDrawer = ({homework, open, onClose, onUpdate}) => {
    const [form] = Form.useForm()
    const [showModal, , toggleShowModal] = useToggleState(false)

    const {setData, data, post, reset, processing} = useForm({
        content: '',
        attachments: []
    })

    const handleReturnToWork = () => {
        Modal.confirm({
            title: 'Подтвердите действие',
            content: 'Отправить на дорабротку ?',
            centered: true,
            okText: 'Да',
            onOk: () => new Promise((res, rej) => {
                Inertia.post(
                    route('homework.status.change', {homework: homework.id}),
                    {status_id: HomeworkStatus.REWORK.id},
                    {
                        preserveScroll: true,
                        onSuccess: async () => {
                            res()
                            onClose()
                        },
                        onError: rej
                    }
                )
            })
        })
    }

    const handleSetGrade = async (grade) => new Promise((res, rej) => {
        Inertia.post(
            route('homework.status.grade', {homework: homework.id}),
            {grade},
            {
                preserveScroll: true,
                onSuccess: async () => {
                    res()
                    toggleShowModal()
                    onClose()
                },
                onError: rej
            }
        )
    })

    const handleSaveAnswer = () => {
        post(route('homework.answer.store', homework.id), {
            preserveScroll: true,
            onSuccess: async () => {
                form.resetFields()
                reset()
                await onUpdate()
            }
        })
    }

    return (
        <Drawer bodyStyle={{padding: 0}} footer={null} open={open}
                width={500} closable={false} onClose={onClose} centered
                title={(
                    <div className={'flex items-center space-x-3 justify-between'}>
                        <div className={'flex flex-col items-start'}>
                            <span className={`text-sm font-medium text-gray-600`}>{homework?.lesson?.title}</span>
                            {homework && (
                                <a href={route('lesson', homework?.lesson?.id)} target={'_blank'}
                                   className={'text-xs underline'}>
                                    {homework?.lesson?.description}
                                </a>
                            )}
                        </div>
                        <div className={'w-36 text-sm'}>
                            <HomeworkStatusBlock homework={homework}/>
                        </div>
                    </div>
                )}>
            {homework && (
                <div className={'flex flex-col h-full'}>
                    <div className={'flex-1 overflow-y-scroll'}>
                        <AnswersList answers={homework.answers}/>
                        <div className={'px-2 py-2 bg-gray-100 sticky bottom-0'}>
                            <div className={'bg-white rounded-md border border-dashed border-gray-200 p-4 '}>
                                <Form form={form} layout={'vertical'} onValuesChange={(_, values) => setData(values)}>
                                    <Form.Item name={'content'}>
                                        <Input.TextArea placeholder={'Ответ'}
                                                        autoSize={{minRows: 1}}/>
                                    </Form.Item>
                                    <Form.Item name={'attachments'}>
                                        <InputAttachments showEmpty={false}/>
                                    </Form.Item>
                                    <Button onClick={handleSaveAnswer} block
                                            icon={<SaveOutlined/>} loading={processing}>Отправить ответ <SendOutlined/></Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    {homework.status.id === HomeworkStatus.REVIEW.id && (
                        <div className={'px-6 py-4 bg-gray-100 flex space-x-3'}>
                            <Button onClick={handleReturnToWork} block>Вернуть на доработку</Button>
                            <Button block type={'primary'} onClick={toggleShowModal}>Оценить</Button>
                            <HomeworkGradeModal open={showModal} onCancel={toggleShowModal} onConfirm={handleSetGrade}/>
                        </div>
                    )}
                </div>
            )}
        </Drawer>
    )
}

HomeworkAuditorDrawer.propTypes = {
    homework: t.object,
    open: t.bool,
    onClose: t.func,
    onUpdate: t.func
}

export default HomeworkAuditorDrawer
