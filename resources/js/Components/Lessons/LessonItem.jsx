import React from "react";
import {Inertia} from "@inertiajs/inertia";
import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";
import {Cell, Avatar} from "@vkontakte/vkui";

const LessonItem = ({lesson}) => {

    const handleOpen = () => {
        Inertia.visit(route('lesson', lesson.id))
    }

    return (
        <div className={`${lesson.available ? 'cursor-pointer' : 'cursor-not-allowed'} odd:bg-gray-100`} onClick={lesson.available && handleOpen} key={lesson.id}>
            <div
                className={`course-list-item ${lesson?.homework?.status && `course-list-item--${lesson?.homework?.status.key}`} flex justify-between ${!lesson.available && 'course-list-item--disabled'}`}>
                <div className={'flex items-center space-x-3'}>
                    <Avatar initials={lesson.id}/>

                    <div className={'flex flex-col'}>
                        <span
                            className={`text-sm font-medium text-gray-600 ${lesson.status === 'finished' && 'text-white'}`}>{lesson.title}</span>
                        <span className={'text-xs text-gray-400'}>{lesson.description}</span>
                    </div>
                </div>
                <div className={'flex w-36'}>
                    <HomeworkStatusBlock homework={lesson.homework}/>
                </div>
            </div>
        </div>
    )
}

export default LessonItem

