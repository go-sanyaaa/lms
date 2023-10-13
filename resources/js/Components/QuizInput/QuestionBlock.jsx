import {Group, Tappable,} from '@vkontakte/vkui'
import {useCallback, useRef} from 'react'
import t from "prop-types"
import {Icon16CopyOutline, Icon16DeleteOutline, Icon16DotsVertical6,} from '@vkontakte/icons'
import AnswerOptionsBlock from "@/Components/QuizInput/Blocks/AnswerOptionsBlock";
import {Modal} from "antd";

function QuestionBlock({onDelete, order, index, onUpdate, value, onCopy, dragHandleProps}) {
    const deleteBtnTargetRef = useRef()

    const [modal, contextHolder] = Modal.useModal()

    const handleUpdate = useCallback((value) => {
        onUpdate({
            ...value,
        })
    }, [onUpdate, value])

    const handleDelete = () => {
        const x = modal.confirm({
            title: 'Подтвердите действие',
            content: 'Удалить вопрос ?',
            centered: true,
            okText: 'Да',
            cancelText: 'Нет',
            onOk: onDelete,
        })
    }

    return (
        <Group>
            {contextHolder}
            <div
                className="flex justify-between items-center w-full pt-2 px-4 box-border"
                style={{color: 'var(--vkui--color_text_secondary)'}}
            >
                <div className="flex items-center">
                    <span>Вопрос {order}</span>
                </div>

                <div className="flex items-center space-x-1">
                    {onDelete && (
                        <Tappable
                            getRootRef={deleteBtnTargetRef}
                            onClick={handleDelete}
                        >
                            <div className="flex px-1 py-1">
                                <Icon16DeleteOutline/>
                            </div>
                        </Tappable>
                    )}
                    {onCopy && (
                        <Tappable onClick={onCopy}>
                            <div className="flex px-1 py-1">
                                <Icon16CopyOutline/>
                            </div>
                        </Tappable>
                    )}
                    {dragHandleProps && (
                        <div
                            className="p-1 cursor-grab rounded-lg"
                            style={{
                                background:
                                    'var(--vkui--color_background_secondary)',
                            }}
                            {...dragHandleProps}
                        >
                            <Icon16DotsVertical6/>
                        </div>
                    )}
                </div>
            </div>
            <AnswerOptionsBlock index={index} value={value} onUpdate={handleUpdate}/>
        </Group>
    )
}

QuestionBlock.propTypes = {
    onDelete: t.func,
    order: t.number.isRequired,
    index: t.number.isRequired,
    onUpdate: t.func.isRequired,
    onCopy: t.func,
    value: t.shape({
        key: t.string.isRequired,
        answers: t.array,
        extra: t.object,
        question: t.string,
    }).isRequired,
    dragHandleProps: t.object
}

export default QuestionBlock
