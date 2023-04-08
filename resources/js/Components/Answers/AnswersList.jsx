import t from "prop-types"
import {ClockCircleOutlined, UserOutlined} from "@ant-design/icons";
import moment from "moment";
import FileAttachment from "@/Components/FileAttachment";
import {usePage} from "@inertiajs/inertia-react";

const AnswersList = ({answers = []}) => {
    const {auth} = usePage().props

    const user = auth?.user

    return (
        <div className={'flex flex-col space-y-1 p-2'}>
            {answers?.map(answer => (
                <div className={`flex ${answer.author.id === user.id ? 'justify-end' : 'justify-start'}`} key={answer.id}>
                    <div className={`${answer.author.id === user.id ? 'bg-blue-100 rounded-br-none border-blue-200' : 'bg-gray-100 rounded-bl-none border-gray-200'} rounded-md p-4 border border-solid py-3 flex flex-col`}>
                        <div className={'flex items-center space-x-2 text-xs text-gray-600'}>
                            <span><UserOutlined/> {answer.author.name}</span>
                            <span>|</span>
                            <span><ClockCircleOutlined/> {moment(answer.created_at).format('DD MMM YYYY, HH:mm')}</span>
                        </div>
                        <p className={'my-2 -mb-1 whitespace-pre-line'}>
                            {answer.content}
                        </p>
                        {answer.attachments.length > 0 && (
                            <div className={'flex flex-col mt-3'}>
                                {answer.attachments.map((attachment) => (
                                    <FileAttachment attachment={attachment} key={attachment.id}/>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

AnswersList.propTypes = {
    answers: t.array
}

export default AnswersList
