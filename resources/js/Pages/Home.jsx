import React, {useMemo, useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/inertia-react';
import {Button, Form, Progress, Select, Tabs} from "antd";
import {EditOutlined} from "@ant-design/icons";
import t from 'prop-types'
import LessonItem from "@/Components/Lessons/LessonItem";
import {find, map, uniqBy} from "lodash";
import {HomeworkStatus} from "@/constants/statuses";
import HomeworkTasksTable from "@/Components/Homeworks/HomeworkTasksTable";
import {Inertia} from "@inertiajs/inertia";
import useRole from "@/helpers/useRole";
import moment from "moment";
import useObject from "@/helpers/useObject";
import {Group, Panel, PanelHeader, PanelHeaderContent} from "@vkontakte/vkui";

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

    const {isStudent, isController, isManager} = useRole()

    const [hwFilters, setHwFilters ,setHwFilterValue] = useObject(initialFilters)

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
        let tabs = []

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

            const filteredTasks = tasks
                .filter(hwFilters.mentor ? (hw) => hw.auditor.id === hwFilters.mentor : () => true)
                .filter(hwFilters.student ? (hw) => hw.author.id === hwFilters.student : () => true)
                .filter(hwFilters.lesson ? (hw) => hw.lesson.id === hwFilters.lesson : () => true)
                .filter(hwFilters.status ? (hw) => hw.status.id === hwFilters.status : () => true)

            tabs.push({
                label: 'Задания на проверку',
                key: 'homeworks',
                children: (
                    <div className={'flex flex-col'}>
                        <div className={'bg-white rounded-md mb-6 p-4 pb-1'}>
                            <span className={'text-gray-400 text-lg mb-2 flex'}>Фильтры: </span>
                            <Form layout={'vertical'} className={'grid grid-cols-5 gap-x-4 mb-4'}>
                                {isController && (
                                    <Form.Item label={'Преподователь'}>

                                        <Select showSearch optionFilterProp={'children'} allowClear
                                                value={hwFilters.mentor}
                                                onChange={(value) => setHwFilterValue('mentor', value)}
                                                placeholder={'Не выбран'}>
                                            {mentors.map((mentor => (
                                                <Select.Option key={mentor.id}
                                                               value={mentor.id}>{mentor.name}</Select.Option>
                                            )))}
                                        </Select>
                                    </Form.Item>
                                )}
                                <Form.Item label={'Студент'}>
                                    <Select showSearch optionFilterProp={'children'} allowClear
                                            value={hwFilters.student}
                                            onChange={(value) => setHwFilterValue('student', value)}
                                            placeholder={'Не выбран'}>
                                        {students.map((student => (
                                            <Select.Option key={student.id}
                                                           value={student.id}>{student.name}</Select.Option>
                                        )))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label={'Урок'}>
                                    <Select showSearch optionFilterProp={'children'} allowClear
                                            value={hwFilters.lesson}
                                            onChange={(value) => setHwFilterValue('lesson', value)}
                                            placeholder={'Не выбран'}>
                                        {lessons.map((lesson => (
                                            <Select.Option key={lesson.id} value={lesson.id}>
                                                {lesson.description}
                                            </Select.Option>
                                        )))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label={'Статус'}>
                                    <Select showSearch optionFilterProp={'children'} allowClear
                                            value={hwFilters.status}
                                            onChange={(value) => setHwFilterValue('status', value)}
                                            placeholder={'Не выбран'}>
                                        {statuses.map((status => (
                                            <Select.Option key={status.id} value={status.id}>
                                                {status.title}
                                            </Select.Option>
                                        )))}
                                    </Select>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className={'flex flex-col p-4 bg-white shadow-sm rounded-md'}>
                            <HomeworkTasksTable
                                onSelectAuthor={handleSelectAuthor}
                                onSelectLesson={handleSelectLesson}
                                tasks={filteredTasks}
                            />
                        </div>
                    </div>
                )
            })
        }

        tabs.push({
            label: 'Список уроков',
            key: 'lessons',
            children: (
                <>
                    {isStudent && (
                        <div className={'flex space-x-3 mb-3'}>
                            {filters.map((f, index) => (
                                <div key={index} onClick={() => setFilter(f)}
                                     className={`filter-button ${f === filter && 'filter-button--active'}`}>
                                    {f.title} <span
                                    className={`filter-button__counter ${f === filter && 'filter-button__counter--active'}`}>{extLessons.filter(f.func).length}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className={'flex flex-col space-y-3'}>
                        {filteredLessons.map((lesson) => (
                            <LessonItem key={lesson.index} lesson={lesson}/>
                        ))}
                    </div>
                </>
            )
        })

        return tabs
    }, [filteredLessons, filter, hwFilters])

    return (
        <AuthenticatedLayout
            auth={auth}
        >
            <Head title={course.title + '. Список уроков'}/>
            <Panel>
                <PanelHeader before={null}>
                    <PanelHeaderContent
                        status={'Курсы.'}

                    >
                        {course.title}
                    </PanelHeaderContent>
                </PanelHeader>
                <Group>
                    <div className={'rounded-md p-4 bg-white'}>
                        <div dangerouslySetInnerHTML={{__html: course.content}} className={'content'}/>
                        {isController ? (
                            <div className={'mt-4 pt-4 border-0 border-t border-solid border-gray-200'}>
                                <Button onClick={() => Inertia.visit(route('course.edit', 1))}
                                        icon={<EditOutlined/>}>Редактировать</Button>
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
                    <Tabs items={tabs}/>
                </Group>
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
