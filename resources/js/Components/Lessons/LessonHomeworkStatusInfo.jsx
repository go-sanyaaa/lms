import HomeworkStatusBlock from "@/Components/Homeworks/HomeworkStatusBlock";
import {Button} from "antd";
import {HomeworkStatus} from "@/constants/statuses";
import {ArrowRightOutlined} from "@ant-design/icons";
import HomeworkDrawer from "@/Components/Homeworks/HomeworkDrawer";
import React, {useMemo} from "react";
import useToggleState from "@/helpers/useToggleState";

const LessonHomeworkStatusInfo = ({lesson, homework, lastReworkDate, canAddHomework}) => {

    const [showHomeworkDrawer, , toggleHomeworkDrawer] = useToggleState()

    const showHomeworkButtonTitle = useMemo(() => {
        if (!homework?.answers?.length || !homework?.status?.id) {
            return 'Добавить решение'
        }

        if (homework?.status?.id === HomeworkStatus.OPEN.id && homework?.answers?.length > 0) {
            return 'Отправить решение на проверку'
        }

        return 'Посмотреть решение';
    }, [homework])

    return (
        <div className={'flex flex-col'}>
            <span className={'text-gray-400 text-lg'}>Решение: </span>
            <div
                className={'border flex space-x-2 items-center mt-2 border-dashed border-gray-200 rounded-md p-2'}>
                <HomeworkStatusBlock homework={homework}/>
                <Button block disabled={!canAddHomework}
                        type={(!homework || homework?.status?.id === HomeworkStatus?.OPEN.id) ? 'primary' : 'default'}
                        onClick={toggleHomeworkDrawer}>
                    {showHomeworkButtonTitle} <ArrowRightOutlined/>
                </Button>
            </div>
            <HomeworkDrawer lesson={lesson} homework={homework} reworkDate={lastReworkDate}
                            open={showHomeworkDrawer} onClose={toggleHomeworkDrawer}/>
        </div>
    )
}

export default LessonHomeworkStatusInfo
