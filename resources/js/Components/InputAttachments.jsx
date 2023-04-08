import t from "prop-types"
import UploadButton from "@/Components/UploadButton";
import {Empty} from "antd";
import FileAttachment from "@/Components/FileAttachment";

const InputAttachments = ({onChange, value = [], showEmpty = true, disabled}) => {

    const handleUpload = (file) => {
        onChange([...value, file])
    }

    const handleDelete = (file) => {
        const index = value.indexOf(file)
        const newValue = [...value]
        newValue.splice(index, 1)

        onChange(newValue)
    }

    return (
        <>
            {value?.length > 0 ? (
                <div className={'flex flex-col space-y-4 mb-4'}>
                    {value.map(attachment => <FileAttachment onDelete={!disabled && handleDelete} attachment={attachment}
                                                             key={attachment.id}/>)}
                </div>
            ) : ( showEmpty && (
                <Empty description={'Дополнительные материалы отсутствуют'} image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            ))}

            <UploadButton disabled={disabled} onUpload={handleUpload}/>
        </>
    )
}

InputAttachments.propTypes = {
    value: t.array,
    onChange: t.func,
    showEmpty: t.bool,
    disabled: t.bool
}

export default InputAttachments
