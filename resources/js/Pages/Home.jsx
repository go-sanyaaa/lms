import React, {useMemo, useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/inertia-react';
import {Progress} from "antd";
import t from 'prop-types'
import {find, map, uniqBy} from "lodash";
import {HomeworkStatus} from "@/constants/statuses";
import HomeworkTasksTable from "@/Components/Homeworks/HomeworkTasksTable";
import {Inertia} from "@inertiajs/inertia";
import useRole from "@/helpers/useRole";
import moment from "moment";
import useObject from "@/helpers/useObject";
import {
    Avatar,
    Button,
    Cell,
    Div,
    FormItem,
    FormLayout,
    Group,
    HorizontalScroll,
    IconButton,
    Panel,
    PanelHeader,
    PanelHeaderContent, SegmentedControl,
    Select,
    Subhead,
    Tabs,
    TabsItem,
    Title
} from "@vkontakte/vkui";
import {Icon16PenOutline} from "@vkontakte/icons";
import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";
import LessonItem from "@/Components/Lessons/LessonItem";

const filters = [
    {title: 'Все', func: () => true},
    {title: 'Доступные', func: lesson => lesson?.available},
    {title: 'Оцененные', func: lesson => lesson?.homework?.grade}
]

const initialFilters = {
    mentor: null,
    student: null,
    lesson: null,
    status: null
}
export default function Home({auth, course, homeworks, tasks, common = {}}) {
    const {lessons} = course

    const {mentors = []} = common

    const [selectedTab, setSelectedTab] = useState('lessons')

    const {isStudent, isController, isManager} = useRole()

    const [hwFilters, setHwFilters, setHwFilterValue] = useObject(initialFilters)

    const [filter, setFilter] = useState(filters[0])

    const extLessons = useMemo(() => {
        return lessons
            .map((lesson, index) => ({
                index,
                ...lesson,
                homework: find(homeworks, {lesson_id: lesson.id}),
            }))
            .map((lesson, index, lessons) => ({
                ...lesson,
                available: isManager || index === 0 || moment() > moment(lesson?.finished_at) || (lessons[index - 1]?.homework && lessons[index - 1]?.homework?.status?.id !== HomeworkStatus.OPEN.id)
            }))
    }, [lessons, homeworks])

    const completedCount = extLessons.filter(lesson => lesson?.homework?.grade)?.length

    const filteredLessons = useMemo(() => extLessons.filter(filter.func), [extLessons, filter])

    const students = uniqBy(map(tasks, 'author'), 'id')

    const statuses = Object.keys(HomeworkStatus).map(key => HomeworkStatus[key])

    const tabs = useMemo(() => {
        let tabs = [
            {
                label: 'Список уроков',
                key: 'lessons',
            }
        ]

        if (isManager) {
            const handleSelectAuthor = (author) => {
                setHwFilters(Object.assign({}, initialFilters, {
                    student: author.id
                }))
            }

            const handleSelectLesson = (lesson) => {
                setHwFilters(Object.assign({}, initialFilters, {
                    lesson: lesson.id
                }))
            }

            const filteredTasks =
            tabs.push({
                label: 'Задания на проверку',
                key: 'homeworks'
            })
        }

        return tabs
    }, [filteredLessons, filter, hwFilters])

    const filteredTasks = useMemo(() => {
        return tasks
            .filter(hwFilters.mentor ? (hw) => hw.auditor.id === +hwFilters.mentor : () => true)
            .filter(hwFilters.student ? (hw) => hw.author.id === +hwFilters.student : () => true)
            .filter(hwFilters.lesson ? (hw) => hw.lesson.id === +hwFilters.lesson : () => true)
            .filter(hwFilters.status ? (hw) => hw.status.id === +hwFilters.status : () => true)

    }, [hwFilters])

    return (
        <AuthenticatedLayout
            auth={auth}
        >
            <Head title={course.title + '. Список уроков'}/>
            <Panel>
                <PanelHeader before={null}>
                    <PanelHeaderContent>
                        <Title style={{color: 'var(--vkui--color_text_contrast)'}} level={3}
                                  weight={3}>{course.title}</Title>
                    </PanelHeaderContent>
                </PanelHeader>
                <Group>
                    <div className={'p-4'}>
                        <div dangerouslySetInnerHTML={{__html: course.content}} className={'content'}/>
                        {isController ? (
                            <div className={'mt-4 pt-4 border-0 border-t border-solid border-gray-200'}>
                                <Button onClick={() => Inertia.visit(route('course.edit', 1))}
                                        before={<Icon16PenOutline/>}>Редактировать</Button>
                            </div>
                        ) : isStudent && (
                            <>
                                <span className={'text-gray-400'}>Прогресс:</span> <br/>
                                <span
                                    className={'font-bold'}>Завершено {completedCount} из {lessons.length}</span>
                                <Progress className={'w-full'} showInfo={false}
                                          percent={completedCount * 100 / lessons.length}/>
                            </>
                        )}
                    </div>
                </Group>
                <Group>
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
                </Group>
                <div>
                    {selectedTab === 'homeworks' && (
                        <div className={'flex flex-col'}>
                            <Group>
                                <FormLayout layout={'vertical'} className={'grid grid-cols-2 mb-4'}>
                                    {isController && (
                                        <FormItem top={'Преподователь'}>
                                            <Select options={mentors.map((m) => ({value: m.id, label: m.name}))}
                                                    value={hwFilters.mentor} searchable allowClearButton
                                                    onChange={(e) => setHwFilterValue('mentor', e.target.value)}
                                                    placeholder={'Не выбран'}/>
                                        </FormItem>
                                    )}
                                    <FormItem top={'Студент'}>
                                        <Select options={students.map((s) => ({value: s.id, label: s.name}))} searchable
                                                     value={hwFilters.student} allowClearButton
                                                     onChange={(e) => setHwFilterValue('student', e.target.value)}
                                                     placeholder={'Не выбран'}/>
                                    </FormItem>
                                    <FormItem top={'Урок'}>
                                        <Select options={lessons.map(l => ({value: l.id, label: l.title}))}
                                                     value={hwFilters.lesson} allowClearButton searchable
                                                     onChange={(e) => setHwFilterValue('lesson', e.target.value)}
                                                     placeholder={'Не выбран'}/>
                                    </FormItem>
                                    <FormItem top={'Статус'}>
                                        <Select options={statuses.map(s => ({value: s.id, label: s.title}))}
                                                     value={hwFilters.status} allowClearButton searchable
                                                     onChange={(e) => setHwFilterValue('status', e.target.value)}
                                                     placeholder={'Не выбран'}/>
                                    </FormItem>
                                </FormLayout>
                            </Group>
                                    <HomeworkTasksTable
                                        // onSelectAuthor={handleSelectAuthor}
                                        // onSelectLesson={handleSelectLesson}
                                        tasks={filteredTasks}
                                    />
                        </div>
                    )}
                    {selectedTab === 'lessons' && (
                        <>
                            {isStudent && (
                                <Group className={'flex space-x-3 mb-3'}>
                                    <SegmentedControl
                                        className={'w-full'} size={'l'}
                                        onChange={v => setFilter(v)}
                                        options={filters.map((f) => ({
                                            value: f,
                                            label: (
                                                <div className={'flex items-center'}>
                                                    {f.title}
                                                    <span
                                                        className={`filter-button__counter`}>{extLessons.filter(f.func).length}</span>
                                                </div>
                                            )
                                        }))}
                                    />
                                </Group>
                            )}

                            <div className={'space-y-2'}>
                                {filteredLessons.map((lesson) => (
                                    <LessonItem key={lesson.index} lesson={lesson}/>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Panel>
        </AuthenticatedLayout>

    );
}

Home.propTypes = {
    course: t.shape({
        lessons: t.array
    }).isRequired,
    homeworks: t.array
}
