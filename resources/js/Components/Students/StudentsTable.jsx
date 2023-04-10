import {Button, Form, Select, Table, Radio} from "antd";
import {EyeOutlined, FileExcelOutlined} from "@ant-design/icons";
import React, {useMemo, useState} from "react";
import SetMentorModal from "@/Components/Students/SetMentorModal";
import useToggleState from "@/helpers/useToggleState";
import {usePage} from "@inertiajs/inertia-react";
import {Group} from "@vkontakte/vkui";

const StudentsTable = ({students, onOpen}) => {
    const [showModal,,toggleShowModal] = useToggleState(false)
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const [filters, setFilters] = useState({
        mentor: null,
        homework: 'all'
    })

    const filteredStudents = useMemo(() =>
        students
            ?.filter(filters?.mentor ? (hw) => filters.mentor === hw?.mentor?.id : () => true)
            ?.filter((() => {
                switch (filters.homework) {
                    case "have": return (student) => student.homeworks.all > 0
                    case "null": return (student) => student.homeworks.all === 0
                    default : return () => true
                }
            })())
    , [students, filters])

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
            dataIndex: ['name'],
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
            title: '',
            align: 'right',
            width: 60,
            render: (_, student) => (
                <div>
                    <Button onClick={() => onOpen(student)} icon={<EyeOutlined/>}/>
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
                <span className={'text-lg mb-2 flex'}>Фильтры: </span>
                <Form onValuesChange={(_,filters) => setFilters(filters)} layout={'vertical'} className={'grid grid-cols-4'}>
                    <Form.Item initialValue={'all'} name={'homework'} label={'Наличие ДЗ'}>
                        <Radio.Group buttonStyle="solid">
                            <Radio.Button value="all">Все</Radio.Button>
                            <Radio.Button value="have">Есть</Radio.Button>
                            <Radio.Button value="null">Отсутствует</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name={'mentor'} label={'Преподаватель'}>
                        <Select allowClear placeholder={'Выберите преподавателя'} className={'w-full'} showSearch optionFilterProp={'children'}>
                            {common?.mentors?.map(mentor => (
                                <Select.Option value={mentor.id} key={mentor.id}>{mentor.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            </Group>
            <Group>
            <div className={'flex mb-3 justify-between'}>
                <Button onClick={toggleShowModal} disabled={!selectedRowKeys.length}>Назначить преподавателя</Button>
                <div className="flex space-x-3">
                    <Button onClick={handleExport} icon={<FileExcelOutlined/>}>Отчет по ДЗ</Button>
                    <Button onClick={handleExportStudents} icon={<FileExcelOutlined/>}>Отчет по Студентам</Button>
                </div>
            </div>
            <SetMentorModal students={selectedRowKeys} open={showModal} onCancel={toggleShowModal}/>
                <Table bordered rowSelection={rowSelection} columns={columns} dataSource={filteredStudents} rowKey={'id'}/>
            </Group>
        </div>
    )
}

export default StudentsTable
