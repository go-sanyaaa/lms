import {
    CloseOutlined,
    DownloadOutlined,
    FileExcelTwoTone,
    FileImageTwoTone,
    FilePdfTwoTone,
    FilePptTwoTone,
    FileUnknownTwoTone,
    FileWordTwoTone
} from "@ant-design/icons";
import {Button, Popconfirm} from "antd";
import t from "prop-types"
import {AttachmentType} from "@/Types/LessonType";

const getIcon = (type) => {
    switch (type) {
        case 'vector':
        case 'image':
            return <FileImageTwoTone style={{fontSize: 24}}/>
        case 'pdf':
            return <FilePdfTwoTone style={{fontSize: 24}}/>
        case 'document':
            return <FileWordTwoTone style={{fontSize: 24}}/>
        case 'spreadsheet':
            return <FileExcelTwoTone style={{fontSize: 24}}/>
        case 'presentation':
            return <FilePptTwoTone style={{fontSize: 24}}/>
        default:
            return <FileUnknownTwoTone style={{fontSize: 24}}/>
    }
}

const FileAttachment = ({attachment, onDelete}) => {
    const handleOpen = (attachment) => {
        window.open(attachment.url, "_blank")
    }

    return (
        <div
            onClick={() => handleOpen(attachment)}
            className={'flex bg-white bg-opacity-50 cursor-pointer select-none hover:bg-gray-50 transition hover:border-orange-400 items-center justify-between p-4 border border-solid rounded-md border-gray-200'}>
            <div className={'flex items-center'}>
                {getIcon(attachment.type)}
                <div className={'flex flex-col ml-3'}>
                    <span className={'flex text-gray-700'}>
                        {attachment.title}
                    </span>
                    <span className={'text-xs text-gray-400'}>
                        {attachment.filename}.{attachment.extension}
                    </span>
                </div>
            </div>
            <div className={'flex space-x-3'}>
                <Button href={attachment.url} onClick={e => e.stopPropagation()} download icon={<DownloadOutlined/>}
                        shape={'circle'} size={'small'}/>
                {onDelete && (
                    <Popconfirm title={`Удалить файл "${attachment.title}" ?`} placement={'topRight'}
                                onConfirm={(e) => {
                                    e.stopPropagation()
                                    onDelete(attachment)
                                }}>
                        <Button onClick={e => e.stopPropagation()} icon={<CloseOutlined/>} shape={'circle'} danger
                                size={'small'}/>
                    </Popconfirm>
                )}
            </div>
        </div>
    )
}

FileAttachment.propTypes = {
    attachment: AttachmentType,
    onDelete: t.func
}

export default FileAttachment
