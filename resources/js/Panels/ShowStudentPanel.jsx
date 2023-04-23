import t from "prop-types"
import {
    Button,
    Caption,
    Div,
    FormItem,
    FormLayout,
    Group,
    Headline,
    Input,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderContent,
    PanelSpinner,
    Separator
} from "@vkontakte/vkui";
import React, {useEffect, useMemo, useState} from "react";
import useToggleState from "@/helpers/useToggleState";
import {useForm} from "@inertiajs/inertia-react";
import InputMentor from "@/Components/Students/InputMentor";
import {SaveOutlined} from "@ant-design/icons";

const ShowStudentPanel = ({id, onClose, studentId}) => {
    const [student, setStudent] = useState(null)
    const [loading, , , withLoading] = useToggleState(true)

    const initialData = useMemo(() => {
        return ({
            name: student?.name,
            surname: student?.surname,
            patronymic: student?.patronymic,
            phone: student?.phone,
            email: student?.email,
            mentor_id: student?.mentor?.id,
        })
    }, [student, studentId])

    const {data, setData, put, processing, errors, reset, clearErrors} = useForm('StudentEdit', initialData)

    useEffect(() => {
        if (studentId) {
            fetchStudent(studentId)
            clearErrors()
        } else {
            setTimeout(() => {
                setStudent(null)
            }, 300)
        }
    }, [studentId])

    useEffect(() => {
        reset()
        setData(initialData)
    }, [initialData])

    const fetchStudent = async (id) => {
        const resp = await withLoading(axios.get(route('student.show', id)))

        setStudent(resp.data)

        return resp.data
    }

    const handeSubmit = async (e) => {
        e.preventDefault()

        await put(route('student.update', student.id), {
            preserveScroll: true,
            only: ['students', 'errors', 'flash']
        })
    }

    return (
        <Panel id={id}>
            <PanelHeader before={onClose && <PanelHeaderBack onClick={onClose}/>}>
                {!loading && (
                    <PanelHeaderContent status={
                        <Caption style={{color: 'var(--vkui--color_link_contrast--hover)'}}>{student.email}</Caption>
                    }>
                        <Headline style={{color: 'var(--vkui--color_text_contrast)'}} level={1}
                                  weight={2}>{initialData?.surname} {initialData.name}</Headline>
                    </PanelHeaderContent>
                )}

            </PanelHeader>
            {loading ? (
                <PanelSpinner/>
            ) : (
                <Group>
                    <FormLayout onSubmit={handeSubmit}>
                        <div className={'grid grid-cols-2'}>
                            <FormItem className={'col-span-2'} status={errors.surname ? 'error' : ''}
                                      bottom={errors.surname} name={'surname'} top={'Фамилия'}>
                                <Input value={data?.surname} onChange={(e) => setData('surname', e.target.value)}/>
                            </FormItem>
                            <FormItem top={'Имя'} status={errors.name && 'error'}
                                      bottom={errors.name} name={'name'}>
                                <Input value={data?.name} onChange={(e) => setData('name', e.target.value)}/>
                            </FormItem>
                            <FormItem top={'Отчество'} status={errors.patronymic ? 'error' : ''}
                                      bottom={errors.patronymic} name={'patronymic'}>
                                <Input value={data?.patronymic}
                                       onChange={(e) => setData('patronymic', e.target.value)}/>
                            </FormItem>
                            <FormItem className={'col-span-2'} status={errors.email ? 'error' : ''}
                                      bottom={errors.email} top={'Электронная почта'} name={'email'}>
                                <Input value={data?.email} readOnly/>
                            </FormItem>
                            <FormItem className={'col-span-2'} status={errors.phone ? 'error' : ''}
                                      bottom={errors.phone} top={'Номер телефона'} name={'phone'}>
                                <Input value={data?.phone} onChange={(e) => setData('phone', e.target.value)}/>
                            </FormItem>
                        </div>
                        <Div className={'px-4 pt-2'}>
                            <Button size={'m'} loading={processing} type={'submit'} stretched
                                    icon={<SaveOutlined/>}>Сохранить</Button>
                        </Div>
                        <Separator></Separator>
                        <FormItem top={'Преподаватель'} className={'col-span-2 mt-2'}>
                            <InputMentor onChange={() => fetchStudent(student.id)} studentId={student?.id}
                                         value={student?.mentor}/>
                        </FormItem>
                    </FormLayout>
                </Group>
            )}

        </Panel>
    )
}

ShowStudentPanel.propTypes = {
    id: t.oneOfType([t.number, t.string]).isRequired,
    studentId: t.number.isRequired
}

export default ShowStudentPanel
