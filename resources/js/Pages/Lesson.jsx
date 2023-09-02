import React, {useMemo, useState} from 'react';
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
import {
    Caption,
    Div,
    Group,
    Headline,
    HorizontalScroll,
    Panel,
    PanelHeader,
    PanelHeaderContent, Tabs,
    TabsItem
} from "@vkontakte/vkui";

const tabs = [
    {
        label: 'Содержание',
        key: 'content',
    },
    {
        label: 'Методические материалы',
        key: 'files',
    }
]

export default function Lesson(props) {
    const {lesson, homework, canAddHomework, lastReworkDate} = props
    const {course} = lesson

    const [selectedTab, setSelectedTab] = useState('content')

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
        >
            <Head title={lesson.title}/>

            <Panel>
                <PanelHeader>
                    <PanelHeaderContent
                        status={<Caption style={{color: 'var(--vkui--color_link_contrast--hover)'}}>{course.title}</Caption>}
                    >
                        <Headline style={{color: 'var(--vkui--color_text_contrast)'}} level={1}
                                  weight={2}>{lesson.title}</Headline>
                    </PanelHeaderContent>
                </PanelHeader>

                <Group>
                    <Div className={'flex-1'}>
                        <h5 className={'font-bold text-2xl my-0'}>
                            {lesson.title}
                        </h5>
                        <span>
                            {lesson.description}
                        </span>

                        {isStudent && (
                            <div className={'flex flex-col'}>
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
                        {isController && (
                            <div className={'mt-4 pt-4 border-0 border-t border-solid border-gray-200'}>
                                <Button onClick={toggleEditDrawer} icon={<EditOutlined/>}>Редактировать</Button>
                                <LessonDrawer lesson={lesson} onClose={toggleEditDrawer}
                                              open={showEditDrawer}/>
                            </div>
                        )}
                    </Div>
                    {(lesson?.attachments?.length > 0) && (
                        <Tabs mode="default">
                            <HorizontalScroll arrowSize="m">
                                {tabs.map((tab) => (
                                    <TabsItem
                                        key={tab.key} selected={tab.key === selectedTab}
                                        onClick={() => setSelectedTab(tab.key)}
                                    >
                                        {tab.label}
                                    </TabsItem>
                                ))}
                            </HorizontalScroll>
                        </Tabs>
                    )}
                </Group>
                <Group>
                    {selectedTab === 'content' ? (
                        <div className={'col-span-4 bg-white rounded-md p-4 content'} dangerouslySetInnerHTML={{__html: lesson.content}}></div>

                    ): (
                        <Div className={'flex flex-col space-y-3'}>
                            {lesson.attachments.length ? (
                                lesson.attachments.map(attachment => (
                                    <FileAttachment attachment={attachment} key={attachment.id}/>
                                ))
                            ) : (
                                <div className={'flex items-center p-1 py-2 rounded-md bg-gray-100'}>
                                    <span className={'ml-2 text-gray-600 text-sm'}>Не предоставлены</span>
                                </div>
                            )}
                        </Div>
                    )}
                </Group>
            </Panel>
        </AuthenticatedLayout>
    );
}
