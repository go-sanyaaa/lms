import {Avatar, Modal, Segmented} from "antd";
import React, {useEffect, useState} from "react";
import t from "prop-types"
import useToggleState from "@/helpers/useToggleState";

const options = [
    {
        label: (
            <div className={'py-3 flex flex-col items-center w-16'}>
                <Avatar icon={3}/>
                Удовл.
            </div>
        ),
        value: 3
    },
    {
        label: (
            <div className={'py-3 flex flex-col items-center w-16'}>
                <Avatar style={{color: 'white', background: '#3b82f6'}}
                        icon={4}/>
                Хорошо
            </div>
        ),
        value: 4
    },
    {
        label: (
            <div className={'py-3 flex flex-col items-center w-16'}>
                <Avatar style={{color: 'white', background: '#0a8159'}}
                        icon={5}/>
                Отлично
            </div>
        ),
        value: 5
    },
]
const HomeworkGradeModal = ({open, onCancel, onConfirm}) => {
    const [grade, setGrade] = useState(4)
    const [loading, ,,withLoading] = useToggleState(false)

    useEffect(() => {
        if (!open) {
            setGrade(grade)
        }
    }, [open])

    const handleConfirm = async () => {
        return await withLoading(onConfirm(grade))
    }

    return (
        <Modal title={'Оцените работу'} okButtonProps={{loading}} onOk={handleConfirm} okText={'Оценить'} centered open={open}
               onCancel={onCancel}>
            <div className={'flex justify-center'}>
                <Segmented value={grade} onChange={setGrade} options={options}/>
            </div>
        </Modal>
    )
}

HomeworkGradeModal.propTypes = {
    open: t.bool,
    onCancel: t.func,
    onConfirm: t.func
}

export default HomeworkGradeModal
