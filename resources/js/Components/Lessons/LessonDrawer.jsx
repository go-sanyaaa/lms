import {Button, Drawer, Form, Input} from "antd";
import React, {useEffect} from "react";
import t from "prop-types"
import {LessonType} from "@/Types/LessonType";
import {useForm} from "@inertiajs/inertia-react";
import InputTextEditor from "@/Components/InputTextEditor/InputTextEditor";
import InputAttachments from "@/Components/InputAttachments";
import {SaveOutlined} from "@ant-design/icons";
import useRole from "@/helpers/useRole";

const LessonDrawer = ({lesson, onClose, visible, courseId}) => {
    const [form] = Form.useForm()

    const {setData, put, processing, errors, post, reset, clearErrors} = useForm('LessonEdit', {
        title: '',
        description: '',
        content: '',
        attachments: ''
    })

    const {isController} = useRole()

    useEffect(() => {
        if (visible) {
            form.resetFields()
        } else {
            reset()
            clearErrors()
        }
    }, [visible])

    useEffect(() => {
        setData({
            title: lesson?.title,
            description: lesson?.description,
            content: lesson?.content,
            attachments: lesson?.attachments
        })
    }, [lesson])

    const handleSubmit = () => {
        lesson
            ? put(route('lesson.update', lesson.id), {preserveScroll: true})
            : post(route('lesson.store', courseId), {
                preserveScroll: true,
                onSuccess: onClose
            })
    }

    return (
        <Drawer width={600} open={visible} centered onClose={onClose} closable={false}
                title={(
                    <div className={'flex justify-between'}>
                        <span>{lesson ? 'Редактирование урока:' : 'Создание урока'}</span>
                    </div>
                )}
        >
            <Form form={form} onValuesChange={(_, values) => setData(values)} initialValues={lesson}
                  layout={'vertical'}>
                <Form.Item required label={'Название'} name={'title'} validateStatus={errors.title && 'error'}
                           help={errors.title}>
                    <Input />
                </Form.Item>
                <Form.Item required label={'Описание'} name={'description'} validateStatus={errors.description && 'error'}
                           help={errors.description}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item required label={'Содержание'} name={'content'} validateStatus={errors.content && 'error'}
                           help={errors.content}>
                    <InputTextEditor/>
                </Form.Item>

                <Form.Item label={'Дополнтительный материалы'} name={'attachments'}
                           validateStatus={errors.attachments && 'error'}
                           help={errors.attachments}>
                    <InputAttachments disabled={!isController}/>
                </Form.Item>

            </Form>
            <Button block disabled={!isController} loading={processing} type={'primary'} onClick={handleSubmit}
                    icon={<SaveOutlined/>}>Сохранить</Button>
        </Drawer>
    )
}

LessonDrawer.propTypes = {
    lesson: LessonType,
    visible: t.bool,
    onClose: t.func,
    courseId: t.number
}

export default LessonDrawer
