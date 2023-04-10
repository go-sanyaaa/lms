import React from "react";
import t from "prop-types"
import {LessonType} from "@/Types/LessonType";
import {Avatar, IconButton, RichCell} from "@vkontakte/vkui";
import {Icon16PenOutline} from "@vkontakte/icons";

const LessonsTable = ({lessons}) => {
    return (
        <>
            <div className={'space-y-1'}>
                {lessons.map(lesson => (
                    <RichCell disabled className={'odd:bg-gray-100'}
                              after={<IconButton><Icon16PenOutline/></IconButton>} subhead={lesson.description}
                              before={<Avatar initials={lesson.id}/>}>
                        {lesson.title}
                    </RichCell>
                ))}
            </div>
        </>
    )
}

LessonsTable.propTypes = {
    lessons: t.arrayOf(LessonType)
}

export default LessonsTable
