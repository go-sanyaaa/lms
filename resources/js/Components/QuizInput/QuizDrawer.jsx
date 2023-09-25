import {Drawer} from "antd";
import React, {useCallback, useEffect, useState} from "react";
import {Button} from "@vkontakte/vkui";
import {Icon20Add} from "@vkontakte/icons";
import QuestionBlock from "@/Components/QuizInput/QuestionBlock";
import {v4 as uuidv4} from 'uuid'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import t from "prop-types"
import {makeInitialQuestion} from "@/Components/QuizInput/Blocks/AnswerOptionsBlock";


const QuizDrawer = ({open, onClose, questions = [], onChange}) => {
    const [blocks, setBlocks] = useState(questions)

    const removeBlock = useCallback((index) => {
        const newBlocks = [...blocks]
        newBlocks.splice(index, 1)

        setBlocks(newBlocks)
    }, [blocks, setBlocks])

    const createBlock = useCallback(() => {
        const newBlock = {
            key: uuidv4(),
            data: makeInitialQuestion()
        }
        setBlocks([...blocks, newBlock])
    }, [blocks])

    const updateBlock = useCallback((index, value) => {
        const newBlocks = [...blocks]
        newBlocks.splice(index, 1, value)

        setBlocks(newBlocks)
    }, [blocks])

    const copyBlock = useCallback((index) => {
        const copy = Object.assign({}, blocks[index], {
            key: uuidv4()
        })

        setBlocks([
            ...blocks.slice(0, index + 1),
            copy,
            ...blocks.slice(index + 1)
        ])

    }, [blocks, setBlocks])

    const onDragEnd = ({source, destination}) => {
        const newBlocks = [...blocks]
        const moved = newBlocks.splice(source.index, 1)[0]
        newBlocks.splice(destination.index, 0, moved);
        setBlocks(newBlocks)
    }

    useEffect(() => {
        onChange(blocks)
    }, [blocks]);

    return (
        <Drawer width={600} bodyStyle={{padding: 0}} open={open} centered onClose={onClose} closable={false}
                title={(
                    <div className={'flex justify-between'}>
                        <span>{'Редактирование теста:'}</span>
                    </div>
                )}
        >
            <div className={'p-6'}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={`stories-priority`}
                               direction="vertical">
                        {(provided, {isDraggingOver}) => {
                            return (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`flex flex-col`}
                                >
                                    {blocks?.map((block, index) => (
                                        <Draggable disableInteractiveElementBlocking
                                                   key={block.key}
                                                   draggableId={`${block.key}`}
                                                   index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    style={provided.draggableProps.style}
                                                >
                                                    <QuestionBlock
                                                        onDelete={() => removeBlock(index)}
                                                        order={index + 1}
                                                        index={index}
                                                        value={block}
                                                        dragHandleProps={provided.dragHandleProps}
                                                        onCopy={() => copyBlock(index)}
                                                        onUpdate={(value) => updateBlock(index, value)}
                                                        key={block.key}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )
                        }}
                    </Droppable>
                    <Button
                        onClick={createBlock}
                        size="l"
                        stretched
                        after={<Icon20Add/>}
                    >
                        Добавить вопрос
                    </Button>
                </DragDropContext>
            </div>

        </Drawer>
    )
}

QuizDrawer.propTypes = {
    questions: t.array.isRequired,
    onChange: t.func.isRequired,
    open: t.bool,
    onClose: t.func.isRequired
}

export default QuizDrawer
