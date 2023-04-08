import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/inertia-react';
import {Breadcrumb, Button, Form, Input} from "antd";
import {ArrowLeftOutlined, HomeOutlined, PlusOutlined, SaveOutlined} from "@ant-design/icons";
import t from 'prop-types'
import InputTextEditor from "@/Components/InputTextEditor/InputTextEditor";
import LessonsTable from "@/Components/Lessons/LessonsTable";
import useToggleState from "@/helpers/useToggleState";
import LessonDrawer from "@/Components/Lessons/LessonDrawer";

const Course = ({auth, course}) => {
    const {put, processing, setData, errors} = useForm('Course', {
        title: course.title,
        content: course.content
    })

    const [showAddDrawer, ,toggleAddDrawer] = useToggleState(false)

    const {lessons} = course

    const handleSubmit = () => {
        put(route('course.update', course.id), {preserveState: false, preserveScroll: true})
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Список уроков</h2>}
        >
            <Head>
                <title>{course.title}</title>
            </Head>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className={'flex flex-col space-y-5'}>
                        <Breadcrumb>
                            <Breadcrumb.Item><HomeOutlined/></Breadcrumb.Item>
                            <Breadcrumb.Item>{course.title}</Breadcrumb.Item>
                        </Breadcrumb>

                        <div>
                            <div className={'rounded-md p-4 mt-3 bg-white'}>
                                <span className={'text-gray-400 text-lg flex mb-2'}>Информация о курсе: </span>
                                <Form onValuesChange={(_, values) => setData(values)} initialValues={course} className={'grid grid-cols-2'} layout={"vertical"}>
                                    <Form.Item label={'Название'} name={'title'} validateStatus={errors.title && 'error'} help={errors.title}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item className={'col-span-2'} label={'Описание'} name={'content'}
                                               validateStatus={errors.content && 'error'} help={errors.content}>
                                        <InputTextEditor/>
                                    </Form.Item>
                                </Form>
                                <div className={'space-x-4 flex'}>
                                    <Button disabled={processing} href={route('home')}
                                            icon={<ArrowLeftOutlined/>}>Вернуться</Button>
                                    <Button loading={processing} onClick={handleSubmit} type={'primary'}
                                            icon={<SaveOutlined/>}>Сохранить</Button>
                                </div>
                            </div>

                            <div className={'flex p-4 bg-white mt-4 rounded-md flex flex-col'}>
                                <div className={'mb-2 flex justify-between items-center'}>
                                    <span className={'text-gray-400 text-lg flex'}>Уроки: </span>
                                    <Button onClick={toggleAddDrawer} type={'dashed'} icon={<PlusOutlined/>}>Добавить урок</Button>
                                </div>
                                <LessonDrawer visible={showAddDrawer} courseId={course.id} onClose={toggleAddDrawer}/>

                                <LessonsTable lessons={lessons}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

Course.propTypes = {
    auth: t.shape({
        is_auditor: t.bool
    }).isRequired,
    course: t.shape({
        id: t.number,
        lessons: t.array
    }).isRequired
}

export default Course
