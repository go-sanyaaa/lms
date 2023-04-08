import {Button, Drawer, Form, Input, Skeleton, Table, Tabs} from "antd";
import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";
import useToggleState from "@/helpers/useToggleState";
import {useEffect, useMemo, useState} from "react";
import {isEmpty} from "lodash";
import {SaveOutlined} from "@ant-design/icons";
import {useForm} from "@inertiajs/inertia-react";
import InputMentor from "@/Components/Students/InputMentor";

const StudentDrawer = ({onClose, open, studentId}) => {
    const [loading, , , withLoading] = useToggleState(false)
    const [student, setStudent] = useState(null)

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

    const handleSave = async () => {
        put(route('student.update', student.id), {
            preserveScroll: true,
            only: ['students', 'errors', 'flash']
        })
    }

    const tabs = [
        {
            label: 'Профиль',
            key: 'info',
            children: (
                <div>
                    <Form initialValues={initialData} onValuesChange={(_, values) => setData(values)}
                          layout={'vertical'} className={'grid grid-cols-2 gap-x-3'}>
                        <Form.Item className={'col-span-2'} validateStatus={errors.surname && 'error'}
                                   help={errors.surname} name={'surname'} label={'Фамилия'}>
                            <Input value={student?.surname}/>
                        </Form.Item>
                        <Form.Item label={'Имя'} validateStatus={errors.name && 'error'}
                                   help={errors.name} name={'name'}>
                            <Input value={student?.name}/>
                        </Form.Item>
                        <Form.Item label={'Отчество'} validateStatus={errors.patronymic && 'error'}
                                   help={errors.patronymic} name={'patronymic'}>
                            <Input value={student?.patronymic}/>
                        </Form.Item>
                        <Form.Item className={'col-span-2'} validateStatus={errors.email && 'error'}
                                   help={errors.email} label={'Электронная почта'} name={'email'}>
                            <Input value={student?.email} readOnly/>
                        </Form.Item>
                        <Form.Item className={'col-span-2'} validateStatus={errors.phone && 'error'}
                                   help={errors.phone} label={'Номер телефона'} name={'phone'}>
                            <Input value={student?.phone}/>
                        </Form.Item>
                        <Button loading={processing} onClick={handleSave} className={'col-span-2 mb-4'}
                                icon={<SaveOutlined/>}>Сохранить</Button>
                        <Form.Item label={'Преподаватель'} className={'col-span-2 mt-2'}>
                            <InputMentor onChange={() => fetchStudent(student.id)} studentId={student?.id} value={student?.mentor}/>
                        </Form.Item>
                    </Form>
                </div>
            )
        },
        {
            label: 'ДЗ',
            key: 'homeworks',
            children: (
                <Table columns={[
                    {
                        title: 'ID',
                        dataIndex: ['lesson_id'],
                        width: 40,
                        align: 'center'
                    },
                    {
                        title: 'Статус',
                        dataIndex: ['grade'],
                        width: 40,
                        align: 'center',
                        render: (_, hw) => (
                            <HomeworkStatusBlock homework={hw}/>
                        )
                    },
                ]} bordered size={'small'} dataSource={student?.homeworks}/>
            )
        }
    ]

    return (
        <Drawer bodyStyle={{padding: 0}} footer={null} open={open}
                width={500} closable={false} onClose={onClose} centered
                title={student && (
                    <div className={'flex items-center space-x-3 justify-between'}>
                        <div className={'flex flex-col items-start'}>
                            <span className={`text-sm font-medium text-gray-600`}>Студент #{student.id}</span>
                        </div>
                    </div>
                )}>
            {isEmpty(student) && loading ? (
                <Skeleton active className={'p-6'}/>
            ) : student && (
                <div className={'px-6'}>
                    <Tabs items={tabs}/>
                </div>
            )}
        </Drawer>
    )
}

export default StudentDrawer
