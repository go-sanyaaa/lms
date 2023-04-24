import React, {useState} from "react";
import t from "prop-types"
import {LessonType} from "@/Types/LessonType";
import {Avatar, IconButton, RichCell} from "@vkontakte/vkui";
import {Icon16PenOutline} from "@vkontakte/icons";
import LessonDrawer from "@/Components/Lessons/LessonDrawer";

const LessonsTable = ({lessons}) => {
    const [selectedLesson, setSelectedLesson] = useState(null)

    return (
        <>
            <div className={'space-y-1'}>
                {lessons.map(lesson => (
                    <RichCell key={lesson.id} disabled className={'odd:bg-gray-100'}
                              after={<IconButton onClick={() => setSelectedLesson(lesson)}><Icon16PenOutline/></IconButton>} subhead={lesson.description}
                              before={<Avatar initials={lesson.id}/>}>
                        {lesson.title}
                    </RichCell>
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
