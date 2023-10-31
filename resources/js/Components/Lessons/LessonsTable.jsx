import React, {useState} from "react";
import t from "prop-types"
import {LessonType} from "@/Types/LessonType";
import {Avatar, Caption, Cell, IconButton, Subhead} from "@vkontakte/vkui";
import {Icon16PenOutline} from "@vkontakte/icons";
import LessonDrawer from "@/Components/Lessons/LessonDrawer";

const LessonsTable = ({lessons}) => {
    const [selectedLesson, setSelectedLesson] = useState(null)

    return (
        <>
            <div className={'space-y-1'}>
                {lessons.map((lesson, index) => (
                    <Cell key={lesson.id} disabled className={'odd:bg-gray-100'}
                          after={<IconButton onClick={() => setSelectedLesson(lesson)}><Icon16PenOutline/></IconButton>}
                          before={<Avatar initials={index + 1}/>}>
                        <div className={'flex flex-col'}>
                            <Subhead weight="3" className={'text-gray-500'}>{lesson.description}</Subhead>
                            <span>
                            {lesson.title}
                        </span>
                        </div>
                    </Cell>
                ))}
                <LessonDrawer open={!!selectedLesson} lesson={selectedLesson}
                              onClose={() => setSelectedLesson(null)}/>
            </div>

        </>
    )
}

LessonsTable.propTypes = {
    lessons: t.arrayOf(LessonType)
}

export default LessonsTable
