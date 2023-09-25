import {Button, Drawer, Form, Input, Select} from "antd";
import React, {useEffect, useMemo, useState} from "react";
import t from "prop-types"
import {LessonType} from "@/Types/LessonType";
import {useForm} from "@inertiajs/inertia-react";
import InputTextEditor from "@/Components/InputTextEditor/InputTextEditor";
import InputAttachments from "@/Components/InputAttachments";
import {SaveOutlined} from "@ant-design/icons";
import useRole from "@/helpers/useRole";
import {LESSON_TYPE, LESSON_TYPES} from "@/constants/lessons";
import {useFormHelper} from "@/helpers/useFormHelper";
import QuizInput from "@/Components/QuizInput/QuizInput";
import {useFormik} from "formik";

const LessonDrawer = ({lesson, onClose, open, courseId}) => {
    const initialValues = useMemo(() => ({
        title: lesson?.title || '',
        description: lesson?.description || '',
        content: lesson?.content || '',
        attachments: lesson?.attachments || [],
        type: lesson?.type !== undefined ? lesson?.type : LESSON_TYPE.TESTING,
        quiz: lesson?.quiz || null
    }), [lesson?.id])

    const [prevLessonId, setPrevLessonId] = useState()

    const formik = useFormik({
        initialValues: initialValues
    })
    const form = useForm(lesson ? 'LessonEdit.' + lesson.id : 'LessonCreate',)
    const {mapItemProps, mapInputProps} = useFormHelper(form)
    const {data, setData, put, processing, post, errors, clearErrors,} = form

    const {isController} = useRole()

    useEffect(() => {
        if(open) {
            if(prevLessonId === lesson?.id && !!prevLessonId) {
                return
            }

            clearErrors()
            formik.resetForm({values: initialValues})

            setPrevLessonId(lesson?.id)
        }
    }, [open, initialValues, lesson?.id])

    useEffect(() => {
        setData(formik.values)
    }, [formik.values]);

    const handleSubmit = () => {
        lesson
            ? put(route('lesson.update', lesson.id), {preserveScroll: true})
            : post(route('lesson.store', courseId), {
                preserveScroll: true,
                onSuccess: onClose
            })
    }

    useEffect(() => {
        if (formik.values.type === LESSON_TYPE.TESTING) {
            formik.setFieldValue('attachments', [])
        } else {
            formik.setFieldValue('attachments', lesson?.attachments || [])
            formik.setFieldValue('quiz', null)
        }
    }, [formik.values?.type, lesson]);

    return (
        <Drawer width={600} bodyStyle={{padding: 0}} open={open} centered onClose={onClose} closable={false}
                title={(
                    <div className={'flex justify-between'}>
                        <span>{lesson ? 'Редактирование урока:' : 'Создание урока'}</span>
                    </div>
                )}
        >
            <div className={'flex flex-col h-full '}>
                <Form className={'flex-1 p-6 overflow-y-auto'} layout={'vertical'}>
                    <Form.Item required label={'Название'} {...mapItemProps('title')}>
                        <Input value={formik.values.title} name={'title'} onChange={formik.handleChange}/>
                    </Form.Item>
                    <Form.Item required label={'Тип урока'} {...mapItemProps('type')}>
                        <Select value={formik.values.type} onChange={v => formik.setFieldValue('type', v)}>
                            {LESSON_TYPES.map(lesson => (
                                <Select.Option key={lesson.key} value={lesson.key}>
                                    {lesson.title}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item required label={'Описание'} {...mapItemProps('description')}>
                        <Input.TextArea name={'description'} value={formik.values.description}
                                        onChange={formik.handleChange}/>
                    </Form.Item>
                    <Form.Item required label={'Содержание'} {...mapItemProps('content')}>
                        <InputTextEditor value={formik.values.content} initialValue={initialValues.content}
                                         onChange={(v) => formik.setFieldValue('content', v)}/>
                    </Form.Item>
                    {data.type === LESSON_TYPE.TESTING && (
                        <Form.Item required label={'Тестирование'} {...mapItemProps('quiz')}>
                            <QuizInput value={formik.values.quiz} onChange={v => formik.setFieldValue('quiz', v)}
                                       disabled={!isController}/>
                        </Form.Item>
                    )}
                    {data.type === LESSON_TYPE.HOMEWORK && (
                        <Form.Item label={'Дополнтительные материалы'} {...mapItemProps('attachments')}>
                            <InputAttachments value={formik.values?.attachments} disabled={!isController}
                                              onChange={(v) => formik.setFieldValue('attachments', v)}/>
                        </Form.Item>
                    )}
                </Form>
                <div className={'bg-gray-100 p-6 py-4'}>
                    <Button block disabled={!isController} loading={processing} type={'primary'} onClick={handleSubmit}
                            icon={<SaveOutlined/>}
                    >
                        {lesson ? 'Сохранить изменения' : 'Создать урок'}
                    </Button>
                </div>
            </div>
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
