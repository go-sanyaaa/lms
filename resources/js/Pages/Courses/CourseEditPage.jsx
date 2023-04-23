import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/inertia-react';
import {PlusOutlined} from "@ant-design/icons";
import t from 'prop-types'
import InputTextEditor from "@/Components/InputTextEditor/InputTextEditor";
import LessonsTable from "@/Components/Lessons/LessonsTable";
import useToggleState from "@/helpers/useToggleState";
import {
    Button, Caption,
    Div,
    FormItem,
    FormLayout,
    Group,
    Headline,
    Input,
    Panel,
    PanelHeader,
    PanelHeaderContent
} from "@vkontakte/vkui";
import {Icon16AddCircle, Icon16ArrowLeftOutline} from "@vkontakte/icons";

const Course = ({auth, course}) => {
    const {processing, setData, errors, data: form, put} = useForm('Course', {
        title: course.title,
        content: course.content
    })

    const [showAddDrawer, , toggleAddDrawer] = useToggleState(false)

    const {lessons} = course

    const handleSubmit = (e) => {
        e.preventDefault()

        put(route('course.update', course.id), {preserveState: false, preserveScroll: true})
    }

    return (
        <AuthenticatedLayout
            auth={auth}
        >
            <Head>
                <title>{course.title}</title>
            </Head>

            <Panel>
                <PanelHeader before={null}>
                    <PanelHeaderContent
                        status={<Caption style={{color: 'var(--vkui--color_link_contrast--hover)'}}>Курсы.</Caption>}
                    >
                        <Headline style={{color: 'var(--vkui--color_text_contrast)'}} level={1}
                                  weight={2}>{course.title}</Headline>
                    </PanelHeaderContent>
                </PanelHeader>
                <Group>
                    <FormLayout onSubmit={handleSubmit}>
                        <FormItem top={'Название'} name={'title'}
                                  status={errors.title ? 'error' : ''} bottom={errors.title}>
                            <Input value={form.title} onChange={(e) => setData('title', e.target.value)}/>
                        </FormItem>
                        <FormItem className={'col-span-2'} top={'Описание'} name={'content'}
                                  status={errors.content ? 'error' : ''} bottom={errors.content}>
                            <InputTextEditor value={form.content} onChange={(e) => setData('content', e)}/>
                        </FormItem>
                        <Div className={'space-x-4 flex'}>
                            <Button disabled={processing} mode={'secondary'} href={route('home')}
                                    before={<Icon16ArrowLeftOutline/>}>Вернуться</Button>
                            <Button loading={processing} type={'submit'}>Сохранить</Button>
                        </Div>
                    </FormLayout>
                </Group>
                <Group>
                    <Div className={'flex rounded-md flex flex-col'}>
                        <div className={'mb-4 flex justify-between items-center'}>
                            <span className={'text-lg flex'}>Уроки: </span>
                            <Button mode={'outline'} after={<Icon16AddCircle/>}
                                    icon={<PlusOutlined/>}>
                                Добавить урок
                            </Button>
                        </div>

                        <LessonsTable lessons={lessons}/>
                    </Div>
                </Group>
            </Panel>
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
