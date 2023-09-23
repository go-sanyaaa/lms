import {Button, Drawer, Form, Input, Select} from "antd";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import t from "prop-types"
import {LessonType} from "@/Types/LessonType";
import {useForm} from "@inertiajs/inertia-react";
import InputTextEditor from "@/Components/InputTextEditor/InputTextEditor";
import InputAttachments from "@/Components/InputAttachments";
import {SaveOutlined} from "@ant-design/icons";
import useRole from "@/helpers/useRole";
import {LESSON_TYPE, LESSON_TYPES} from "@/constants/lessons";
import {useFormHelper} from "@/helpers/useFormHelper";

const LessonDrawer = ({lesson, onClose, open, courseId}) => {
    const initialValues = useMemo(() => ({
        title: lesson?.title || '',
        description: lesson?.description || '',
        content: lesson?.content || '',
        attachments: lesson?.attachments || [],
        type: lesson?.type !== undefined ? lesson?.type : LESSON_TYPE.TESTING
    }), [lesson])

    const [content, setContent] = useState(initialValues.content)
    const form = useForm('LessonEdit', initialValues)
    const {mapItemProps, mapInputProps} = useFormHelper(form)
    const {data, setData, put, processing, setDefaults, errors, post, reset, clearErrors} = form

    const {isController} = useRole()

    useEffect(() => {
        if(open) {
            setContent(initialValues.content)
            setDefaults(initialValues)
            setData(initialValues)
        } else {
            clearErrors()
        }
    }, [open, initialValues])

    useEffect(() => {
        setData('content', content)
    }, [content])

    const handleSubmit = () => {
        lesson
            ? put(route('lesson.update', lesson.id), {preserveScroll: true})
            : post(route('lesson.store', courseId), {
                preserveScroll: true,
                onSuccess: onClose
            })
    }

    useEffect(() => {
        if(data.type === LESSON_TYPE.TESTING) {
            setData('attachments', [])
        } else {
            setData('attachments', lesson.attachments || [])
        }
    }, [data?.type]);

    return (
        <Drawer width={600} open={open} centered onClose={onClose} closable={false}
                title={(
                    <div className={'flex justify-between'}>
                        <span>{lesson ? 'Редактирование урока:' : 'Создание урока'}</span>
                    </div>
                )}
        >
            <Form layout={'vertical'}>
                <Form.Item required label={'Название'} {...mapItemProps('title')}>
                    <Input {...mapInputProps('title')} />
                </Form.Item>
                <Form.Item required label={'Тип урока'} {...mapItemProps('type')}>
                    <Select {...mapInputProps('type')}>
                        {LESSON_TYPES.map(lesson => (
                            <Select.Option key={lesson.key} value={lesson.key}>
                                {lesson.title}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item required label={'Описание'} {...mapItemProps('description')}>
                    <Input.TextArea {...mapInputProps('description')}/>
                </Form.Item>
                <Form.Item required label={'Содержание'} {...mapItemProps('content')}>
                    <InputTextEditor value={content} initialValue={initialValues.content} onChange={setContent}/>
                </Form.Item>
                {data.type === LESSON_TYPE.HOMEWORK && (
                    <Form.Item label={'Дополнтительные материалы'} {...mapItemProps('attachments')}>
                        <InputAttachments disabled={!isController} {...mapInputProps('attachments')}/>
                    </Form.Item>
                )}
            </Form>
            <Button block disabled={!isController} loading={processing} type={'primary'} onClick={handleSubmit}
                    icon={<SaveOutlined/>}
            >
                {lesson ? 'Сохранить изменения' : 'Создать урок'}
            </Button>
        </Drawer>
    )
}

LessonDrawer.propTypes = {
    lesson: LessonType,
    open: t.bool,
    onClose: t.func,
    courseId: t.number
}

export default LessonDrawer
