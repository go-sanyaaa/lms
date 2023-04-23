import {Table, Radio} from "antd";
import {EyeOutlined, FileExcelOutlined} from "@ant-design/icons";
import React, {useMemo, useState} from "react";
import SetMentorModal from "@/Components/Students/SetMentorModal";
import useToggleState from "@/helpers/useToggleState";
import {usePage} from "@inertiajs/inertia-react";
import {FormItem, FormLayout, Group, SegmentedControl, Title, Button, Select, Div} from "@vkontakte/vkui";

const StudentsTable = ({students, onOpen}) => {
    const [showModal, , toggleShowModal] = useToggleState(false)
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const [mentor, setMentor] = useState(null)
    const [homework, setHomework] = useState('all')

    const filteredStudents = useMemo(() =>
            students
                ?.filter(mentor ? (hw) => +mentor === hw?.mentor?.id : () => true)
                ?.filter((() => {
                    switch (homework) {
                        case "have":
                            return (student) => student.homeworks.all > 0
                        case "null":
                            return (student) => student.homeworks.all === 0
                        default :
                            return () => true
                    }
                })())
        , [students, mentor, homework])

    const {common} = usePage().props

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: 40,
            sorter: (a, b) => a.id - b.id,
            align: 'center'
        },
        {
            title: 'ФИО',
            width: 260,
            dataIndex: ['name'],
        },
        {
            title: 'Преподаватель',
            dataIndex: ['mentor'],
            width: 260,
            sorter: (a, b) => {
                return  a.mentor?.id - b.mentor?.id
            },
            render: (mentor) => (
                <div>
                    {mentor?.name ?? ' - '}
                </div>
            )
        },
        {
            title: 'ДЗ / Выполнено',
            align: 'center',
            dataIndex: ['homeworks'],
            width: 160,
            sorter: (a, b) => {
                return  a.homeworks.all - b.homeworks.all
            },
            render: (hw) => (
                <div>
                    <span className={'text-sm text-gray-700 font-bold'}>{hw.all}</span> / <span
                    className={'text-sm text-gray-700 font-bold'}>{hw.completed}</span>
                </div>
            )
        }
    ]

    const rowSelection = {
        selectedRowKeys,
        onChange: setSelectedRowKeys,
    };

    const handleExport = async () => {
        await window.open( route('homeworks.export'), '_self')
    }

    const handleExportStudents = async () => {
        await window.open( route('students.export'), '_self')
    }

    return (
        <div>
            <Group>
                <FormLayout className={'grid grid-cols-2'}>
                    <FormItem initialValue={'all'} name={'homework'} top={'Наличие ДЗ'}
                              onChange={(e) => setHomework(e.target.value)}
                    >
                        <SegmentedControl options={[
                            {label: 'Все', value: 'all'},
                            {label: 'Есть', value: 'have'},
                            {label: 'Отсутствует', value: 'null'},
                        ]}/>
                    </FormItem>
                    <FormItem name={'mentor'} top={'Преподаватель'}
                              onChange={(e) => setMentor(e.target.value)}
                    >
                        <Select placeholder={'Выберите преподавателя'}
                                searchable allowClearButton
                                options={common?.mentors?.map((m) => ({
                                    label: m.name,
                                    value: m.id,
                                }))}
                        />
                    </FormItem>
                </FormLayout>
            </Group>
            <Group>
                <Div>
                    <div className={'flex mb-3 justify-between'}>
                        <Button onClick={toggleShowModal} mode={'outline'} disabled={!selectedRowKeys.length}>Назначить
                            преподавателя</Button>
                        <div className="flex space-x-3">
                            <Button onClick={handleExport} mode={'secondary'} before={<FileExcelOutlined/>}>Отчет по ДЗ</Button>
                            <Button onClick={handleExportStudents} mode={'secondary'} before={<FileExcelOutlined/>}>Отчет по Студентам</Button>
                        </div>
                    </div>
                    <SetMentorModal students={selectedRowKeys} open={showModal} onCancel={toggleShowModal}/>
                    <Table className={'cursor-pointer'} bordered onRow={(student) => ({
                        onClick: () => onOpen(student)
                    })} rowSelection={rowSelection} columns={columns} dataSource={filteredStudents} rowKey={'id'}/>
                </Div>
            </Group>
        </div>
    )
}

export default StudentsTable
