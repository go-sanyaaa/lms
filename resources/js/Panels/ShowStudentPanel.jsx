import t from "prop-types"
import {
    Button,
    FormItem,
    FormLayout,
    Group,
    Input,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderContent,
    PanelSpinner
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

    const {setData, put, processing, errors, reset, clearErrors} = useForm('StudentEdit', initialData)

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

    return (
        <Panel id={id}>
            <PanelHeader before={onClose && <PanelHeaderBack onClick={onClose}/>}>
                {!loading && (
                    <PanelHeaderContent status={student.email}>
                        {student?.surname} {student.name}
                    </PanelHeaderContent>
                )}

            </PanelHeader>
            {loading ? (
                <PanelSpinner/>
            ) : (
                <Group>
                    <FormLayout>
                        <div className={'grid grid-cols-2'}>
                            <FormItem className={'col-span-2'} status={errors.surname ? 'error' : ''}
                                      bottom={errors.surname} name={'surname'} top={'Фамилия'}>
                                <Input value={student?.surname}/>
                            </FormItem>
                            <FormItem top={'Имя'} status={errors.name && 'error'}
                                      bottom={errors.name} name={'name'}>
                                <Input value={student?.name}/>
                            </FormItem>
                            <FormItem top={'Отчество'} status={errors.patronymic ? 'error' : ''}
                                      bottom={errors.patronymic} name={'patronymic'}>
                                <Input value={student?.patronymic}/>
                            </FormItem>
                            <FormItem className={'col-span-2'} status={errors.email ? 'error' : ''}
                                      bottom={errors.email} top={'Электронная почта'} name={'email'}>
                                <Input value={student?.email} readOnly/>
                            </FormItem>
                            <FormItem className={'col-span-2'} status={errors.phone ? 'error' : ''}
                                      bottom={errors.phone} top={'Номер телефона'} name={'phone'}>
                                <Input value={student?.phone}/>
                            </FormItem>
                        </div>
                        <Button loading={processing} stretched
                                icon={<SaveOutlined/>}>Сохранить</Button>
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
