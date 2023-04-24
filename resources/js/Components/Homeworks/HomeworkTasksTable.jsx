import t from "prop-types"
import {Avatar, Button, Table} from "antd";
import {EyeOutlined, UserOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";
import useToggleState from "@/helpers/useToggleState";
import HomeworkAuditorDrawer from "@/Components/Homeworks/HomeworkAuditorDrawer";
import useRole from "@/helpers/useRole";

const HomeworkTasksTable = ({tasks, onSelectAuthor, onSelectLesson}) => {
    const [loadingId, setLoadingId] = useState(null)
    const [homework, setHomework] = useState(null)
    const [showDrawer, , toggleShowDrawer] = useToggleState(false)

    const {isController} = useRole()

    const onOpen = async (homework) => {
        await fetchHomework(homework.id)

        toggleShowDrawer()
    }

    const fetchHomework = async (id) => {
        setLoadingId(id)

        const {data} = await axios.get(route('api.homework.show', id)).finally(() => setLoadingId(null))

        setHomework(data)
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: 40,
            sorter: (a, b) => a.id - b.id,
            align: 'center'
        },
        {
            title: 'Урок',
            dataIndex: ['lesson'],
            width: 260,
            render: (lesson, hw) => (
                <div onClick={() => onSelectLesson(lesson)} className={'cursor-pointer hover:text-emerald-500 flex text-gray-400 flex-col items-start'}>
                    <span className={`text-sm font-medium text-gray-600`}>{lesson.title}</span>
                    <span className={'text-xs mb-3'}>{lesson.description}</span>
                    <HomeworkStatusBlock homework={hw}/>
                </div>
            )
        },
        isController ? ({
            title: 'Преподаватель',
            dataIndex: ['auditor'],
            width: 200,
            render: (auditor) => (
                <div className={'flex items-center space-x-2'}>
                    <span className={`text-sm text-gray-600`}>{auditor?.surname} {auditor.name}</span>
                </div>
            )
        }) : null,
        {
            title: 'Автор',
            dataIndex: ['author'],
            render: (author) => (
                <div onClick={() => onSelectAuthor(author)} className={'cursor-pointer hover:text-emerald-500 text-gray-600 flex items-center space-x-2'}>
                    <span className={`text-sm`}>{author.name}</span>
                </div>
            )
        },
        {
            title: '',
            align: 'right',
            width: 60,
            render: (_, hw) => (
                <div>
                    <Button loading={hw.id === loadingId} onClick={() => onOpen(hw)} icon={<EyeOutlined/>}/>
                </div>
            )
        }
    ].filter(Boolean)

    return (
        <div>
            <Table rowKey={'id'} columns={columns} dataSource={tasks}/>
            <HomeworkAuditorDrawer onUpdate={() => fetchHomework(homework.id)} homework={homework} onClose={toggleShowDrawer} open={showDrawer}/>
        </div>
    )
}

HomeworkTasksTable.propTypes = {
    task: t.array,
    onSelectAuthor: t.func,
    onSelectLesson: t.func
}

export default HomeworkTasksTable
