import React, {useState} from "react";
import t from "prop-types"
import {LessonType} from "@/Types/LessonType";
import {Button, Table} from "antd";
import {EyeOutlined} from "@ant-design/icons";
import LessonDrawer from "@/Components/Lessons/LessonDrawer";

const LessonsTable = ({lessons}) => {
    const [selectedLesson, setSelectedLesson] = useState(null)

    const columns = [
        {
            title: '№',
            dataIndex: 'index',
            key: 'index',
            width: 40,
            sorter: (a, b) => a.id - b.id,
            align: 'center'
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            align: 'right',
            render: (_, lesson) => {
                return (
                    <>
                        <Button onClick={() => setSelectedLesson(lesson)} icon={<EyeOutlined/>}/>
                    </>
                )
            }
        },
    ]

    return (
        <>
            <Table rowKey={'id'} columns={columns} footer={() => (
                <span>Всего уроков: {lessons.length}</span>
            )} pagination={{pageSize: 10}} dataSource={lessons.map((l,index) => ({...l, index: index + 1}))}/>
            <LessonDrawer visible={!!selectedLesson} lesson={selectedLesson}
                          onClose={() => setSelectedLesson(null)}/>
        </>
    )
}

LessonsTable.propTypes = {
    lessons: t.arrayOf(LessonType)
}

export default LessonsTable
