import React, {useMemo} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/inertia-react';
import {Breadcrumb, Button} from "antd";
import {ArrowRightOutlined, EditOutlined, HomeOutlined} from "@ant-design/icons";
import FileAttachment from "@/Components/FileAttachment";
import LessonDrawer from "@/Components/Lessons/LessonDrawer";
import useToggleState from "@/helpers/useToggleState";
import HomeworkDrawer from "@/Components/Homeworks/HomeworkDrawer";
import {HomeworkStatus} from "@/constants/statuses";
import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";
import useRole from "@/helpers/useRole";

export default function Lesson(props) {
    const {lesson, homework, canAddHomework, lastReworkDate} = props
    const {course} = lesson

    const [showHomeworkDrawer,,toggleHomeworkDrawer] = useToggleState()
    const [showEditDrawer,,toggleEditDrawer] = useToggleState()

    const {isStudent, isController} = useRole()

    const showHomeworkButtonTitle = useMemo(() => {
        if(!homework?.answers?.length || !homework?.status?.id) {
            return 'Добавить решение'
        }

        if(homework?.status?.id === HomeworkStatus.OPEN.id && homework?.answers?.length > 0) {
            return 'Отправить решение на проверку'
        }

        return 'Посмотреть решение';
    }, [homework])

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Введение в веб-разработку</h2>}
        >
            <Head title="Список уроков"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className={'flex flex-col space-y-5'}>

                        <Breadcrumb>
                            <Breadcrumb.Item><HomeOutlined/></Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link href={route('home')}>
                                    {course.title}
                                </Link>
                            </Breadcrumb.Item>

                            <Breadcrumb.Item>{lesson.title}</Breadcrumb.Item>
                        </Breadcrumb>

                        <div>
                            <div className={'rounded-md p-4 mt-3 bg-white'}>
                                <div className={'flex justify-between'}>
                                    <div className={'flex-1'}>
                                        <span className={'text-gray-400 text-lg'}>Тема: </span>
                                        <br/>
                                        <h5 className={'font-bold text-2xl my-0'}>
                                            {lesson.title}
                                        </h5>
                                        <span>
                                            {lesson.description}
                                        </span>
                                    </div>
                                    {isStudent && (
                                        <div className={'flex-1'}>
                                            <span className={'text-gray-400 text-lg'}>Решение: </span>
                                            <div
                                                className={'border flex space-x-2 items-center mt-2 border-dashed border-gray-200 rounded-md p-2'}>
                                                <HomeworkStatusBlock homework={homework}/>
                                                <Button block disabled={!canAddHomework}
                                                        type={(!homework || homework?.status?.id === HomeworkStatus?.OPEN.id) && 'primary'}
                                                        onClick={toggleHomeworkDrawer}>
                                                    {showHomeworkButtonTitle} <ArrowRightOutlined/>
                                                </Button>
                                            </div>
                                            <HomeworkDrawer lesson={lesson} homework={homework} reworkDate={lastReworkDate}
                                                            open={showHomeworkDrawer} onClose={toggleHomeworkDrawer}/>
                                        </div>
                                    )}
                                </div>

                                {isController && (
                                    <div className={'mt-4 pt-4 border-0 border-t border-solid border-gray-200'}>
                                        <Button onClick={toggleEditDrawer} icon={<EditOutlined/>}>Редактировать</Button>
                                        <LessonDrawer lesson={lesson} onClose={toggleEditDrawer}
                                                      open={showEditDrawer}/>
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className={'flex items-start grid grid-cols-6 gap-x-4'}>
                            <div className={'col-span-4 bg-white rounded-md p-4 content'} dangerouslySetInnerHTML={{__html: lesson.content}}>
                            </div>
                            <div className={'col-span-2 flex flex-col space-y-4'}>
                                <div className={'bg-white rounded-md p-4'}>
                                    <h3>Методические материалы:</h3>
                                    <div className={'flex flex-col space-y-3'}>
                                        {lesson.attachments.length ? (
                                            lesson.attachments.map(attachment => (
                                                <FileAttachment attachment={attachment} key={attachment.id}/>
                                            ))
                                        ) : (
                                            <div className={'flex items-center p-1 py-2 rounded-md bg-gray-100'}>
                                                <span className={'ml-2 text-gray-600 text-sm'}>Не предоставлены</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
