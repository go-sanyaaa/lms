import React, {useCallback, useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/inertia-react';
import {Button} from "antd";
import {EditOutlined} from "@ant-design/icons";
import FileAttachment from "@/Components/FileAttachment";
import LessonDrawer from "@/Components/Lessons/LessonDrawer";
import useToggleState from "@/helpers/useToggleState";
import useRole from "@/helpers/useRole";
import {
    Caption,
    Div,
    Group,
    Headline,
    HorizontalScroll,
    Panel,
    PanelHeader,
    PanelHeaderContent,
    Tabs,
    TabsItem
} from "@vkontakte/vkui";
import {LESSON_TYPE} from "@/constants/lessons";
import LessonHomeworkStatusInfo from "@/Components/Lessons/LessonHomeworkStatusInfo";
import LessonQuizStatusInfo from "@/Components/Lessons/LessonQuizStatusInfo";

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

    const [showEditDrawer,,toggleEditDrawer] = useToggleState()

    const {isStudent, isController} = useRole()

    const renderLessonStatusBlock = useCallback(() =>
            lesson.type === LESSON_TYPE.TESTING ? (
                <LessonQuizStatusInfo lesson={lesson}/>
            ) : (
                <LessonHomeworkStatusInfo lesson={lesson} canAddHomework={canAddHomework} homework={homework}
                                          lastReworkDate={lastReworkDate}/>
            )
        , [lesson, canAddHomework, homework, lastReworkDate])

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

                        {isStudent && renderLessonStatusBlock()}
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
