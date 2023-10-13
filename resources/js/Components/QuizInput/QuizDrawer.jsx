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
    const removeBlock = useCallback((index) => {
        const newBlocks = [...questions]
        newBlocks.splice(index, 1)

        onChange(newBlocks)
    }, [questions])

    const createBlock = useCallback(() => {
        const newBlock = {
            key: uuidv4(),
            ...makeInitialQuestion()
        }
        onChange([...questions, newBlock])
    }, [questions])

    const updateBlock = useCallback((index, value) => {
        const newBlocks = [...questions]
        newBlocks.splice(index, 1, value)

        onChange(newBlocks)
    }, [questions])

    const copyBlock = useCallback((index) => {
        const copy = Object.assign({}, questions[index], {
            key: uuidv4()
        })

        onChange([
            ...questions.slice(0, index + 1),
            copy,
            ...questions.slice(index + 1)
        ])

    }, [questions])

    const onDragEnd = ({source, destination}) => {
        const newBlocks = [...questions]
        const moved = newBlocks.splice(source.index, 1)[0]
        newBlocks.splice(destination.index, 0, moved);
        onChange(questions)
    }

    return (
        <Drawer width={600} bodyStyle={{padding: 0}} open={open} centered onClose={onClose} closable={false}
                title={(
                    <div className={'flex justify-between'}>
                        <span>{'Редактирование теста:'}</span>
                    </div>
                )}
        >
            <div className={'flex flex-col h-full'}>
                <div className={'p-6 flex-1 overflow-y-auto'}>
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
                                        {questions?.map((block, index) => (
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
                            stretched
                            mode={'outline'}
                            after={<Icon20Add/>}
                        >
                            Добавить вопрос
                        </Button>
                    </DragDropContext>
                </div>
                <div className={'px-6 py-4 bg-gray-100'}>
                    <Button onClick={onClose} stretched size={'l'}>Завершить редактирование</Button>
                </div>
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
