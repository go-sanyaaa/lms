import {Checkbox, Modal, Select} from "antd";
import {useForm, usePage} from "@inertiajs/inertia-react";
import {useEffect, useState} from "react";

const SetMentorModal = ({open, onCancel, students = [], onChange}) => {
    const {setData, put, processing} = useForm({
        students: students,
        deep: false
    })
    const [mentor, setMentor] = useState(null)

    useEffect(() => {
        setData('students', students)
    }, [students])

    const {common} = usePage().props

    const handleConfirm = () => {
        put(route('mentors.students.update', mentor), {
            preserveScroll: true,
            onSuccess: (resp) => {
                onCancel()
                onChange && onChange(resp)
            }
        })
    }

    return (
        <Modal centered okText={'Назначить'} okButtonProps={{loading: processing, disabled: !mentor}} onOk={handleConfirm} onCancel={onCancel} title={'Назначить преподавателя'} open={open}>
            <Select onChange={setMentor} placeholder={'Выберите преподавателя'} className={'w-full'} showSearch optionFilterProp={'children'}>
                {common?.mentors?.map(mentor => (
                    <Select.Option value={mentor.id} key={mentor.id}>{mentor.name}</Select.Option>
                ))}
            </Select>
            <div className={'mt-4'}>
                <Checkbox onChange={(e) => setData('deep', e.target.checked)}>Перенезначить все текущие ДЗ</Checkbox>
            </div>
        </Modal>
    )
}

export default SetMentorModal
