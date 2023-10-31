import {Icon24CheckBoxOff, Icon24CheckBoxOn, Icon24CheckCircleOff, Icon24CheckCircleOn} from "@vkontakte/icons";
import React, {useMemo} from "react";

const QuizQuestionInput = ({number, question, value, onChange, showCorrect}) => {
    const [CheckedIcon, UncheckedIcon] = useMemo(() => {
        return question.multiple ? [
            Icon24CheckBoxOn, Icon24CheckBoxOff
        ] : [
            Icon24CheckCircleOn, Icon24CheckCircleOff
        ]
    }, [question]);

    const handleToggleAnswer = (id) => {
        let newValue = value ? [...value] : []
        const index = newValue.indexOf(id);

        if (question.multiple) {
            if (index !== -1) {
                newValue.splice(index, 1)
            } else {
                newValue.push(id)
            }
        } else {
            newValue = index !== -1 ? [] : [id]
        }

        return onChange(newValue)
    }

    const selectedAnswers = useMemo(() => {
        return value ? value : []
    }, [question, value])

    return (
        <div className={'p-4 rounded-md border border-solid border-gray-100'}>
            <div className={'flex items-start'}>
                <span
                    className={'text-sm font-bold mr-2 text-gray-500 w-6 h-6 p-1 flex items-center justify-center bg-gray-100 rounded-full'}>
                    {number}
                </span>
                <h4 className={'mt-2 mb-4'}>
                    {question.question}
                </h4>
            </div>
            <div className={'flex flex-col space-y-1'}>
                {question.answers.map(a => (
                    <div key={a.id}
                         onClick={() => !showCorrect && handleToggleAnswer(a.id)}
                         className={`flex items-start ${showCorrect ? '' : 'hover:cursor-pointer'} select-none`}
                    >
                        <div className={'w-6 h-6 p-1 flex items-center justify-center'}>
                            {showCorrect ? (
                                selectedAnswers.includes(a.id) || a.is_correct ? (
                                    <Icon24CheckBoxOn
                                        className={a.is_correct && !selectedAnswers.includes(a.id) ? 'text-yellow-500' : a.is_correct ? 'text-green-500' : 'text-red-500'}/>
                                ) : (<Icon24CheckBoxOff className={'text-gray-200'}/>)
                            ) : selectedAnswers.includes(a.id) ? (
                                <Icon24CheckBoxOn className={'text-[#fb6c16]'}/>
                            ) : (
                                <Icon24CheckBoxOff className={'text-gray-200'}/>
                            )}
                        </div>
                        <p className={'my-0 mt-2 ml-2'}>{a.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuizQuestionInput
