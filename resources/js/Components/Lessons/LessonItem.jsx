import {Avatar} from "antd";
import React from "react";
import {Inertia} from "@inertiajs/inertia";
import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";

const LessonItem = ({lesson}) => {

    const handleOpen = () => {
        Inertia.visit(route('lesson', lesson.id))
    }

    return (
        <div className={lesson.available ? 'cursor-pointer' : 'cursor-not-allowed'} onClick={lesson.available && handleOpen} key={lesson.id}>
            <div
                className={`course-list-item ${lesson?.homework?.status && `course-list-item--${lesson?.homework?.status.key}`} flex justify-between ${!lesson.available && 'course-list-item--disabled'}`}>
                <div className={'flex items-center space-x-3'}>
                    <Avatar>{lesson.index + 1}</Avatar>

                    <div className={'flex flex-col'}>
                        <span
                            className={`text-sm font-medium text-gray-600 ${lesson.status === 'finished' && 'text-white'}`}>{lesson.title}</span>
                        <span className={'text-xs text-gray-400'}>{lesson.description}</span>
                    </div>
                </div>
                {/*{*/}
                {/*    lesson?.homework?.status?.id === HomeworkStatus.COMPLETED.id && (*/}
                {/*        <Avatar style={{background: '#34d399'}} icon={<CheckOutlined/>}/>*/}
                {/*    )*/}
                {/*}*/}

                <div className={'flex w-48'}>
                    <HomeworkStatusBlock homework={lesson.homework}/>
                </div>
            </div>
        </div>
    )
}

export default LessonItem

