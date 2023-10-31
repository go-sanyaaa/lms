import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";
import {Button} from "antd";
import {HomeworkStatus} from "@/constants/statuses";
import {ArrowRightOutlined} from "@ant-design/icons";
import HomeworkDrawer from "@/Components/Homeworks/HomeworkDrawer";
import React, {useMemo} from "react";
import useToggleState from "@/helpers/useToggleState";
import QuizDrawer from "@/Components/Quiz/QuizDrawer";

const LessonQuizStatusInfo = ({lesson}) => {

    const [showQuizDrawer, , toggleQuizDrawer] = useToggleState()

    const isQuizCompleted = lesson?.quiz?.last_answer

    const showQuizButtonTitle = useMemo(() => {
        return isQuizCompleted ? "Тест пройден" : 'Пройти тестирование';
    }, [])

    return (
        <div className={'flex flex-col'}>
            <div
                className={'border flex space-x-2 items-center mt-2 border-dashed border-gray-200 rounded-md p-2'}>
                <Button block type={'primary'}
                        onClick={isQuizCompleted ? null : toggleQuizDrawer}>
                    {showQuizButtonTitle} {!isQuizCompleted && <ArrowRightOutlined/>}
                </Button>
            </div>
            <QuizDrawer open={showQuizDrawer} lessonId={lesson?.id} quiz={lesson?.quiz} onClose={toggleQuizDrawer}/>
        </div>
    )
}

export default LessonQuizStatusInfo
