import {InboxOutlined, UploadOutlined} from "@ant-design/icons";
import {Button, Input, Modal, Upload} from "antd";
import React, {useState} from "react";
import t from "prop-types"
import useToggleState from "@/helpers/useToggleState";

const UploadButton = ({onUpload, disabled}) => {
    const [showUploadModal,, toggleShowUploadModal] = useToggleState(false)
    const [loading,,,withLoading] = useToggleState(false)

    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')

    const beforeUpload = (f) => {
        setFile(f)
        return false;
    }

    const handleUpload = async () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('filename', name)

        const resp = await withLoading(
            axios.post('/upload', formData)
                .catch(({response}) => {
                    console.log(response)
                    setError(response?.data?.message || 'Не удалось загрузить файл')
                })
        )

        if(resp?.data) {
            setName('')
            setFile(null)
            toggleShowUploadModal()

            onUpload(resp?.data)
        }
    }

    return (
        <>
            <Modal okText={'Загрузить'} onOk={handleUpload} okButtonProps={{disabled: !file, loading}} title={'Загрузка файла'} cancelText={'Отменить'} open={showUploadModal} onCancel={toggleShowUploadModal}>
                <div className={'mb-2'}>
                    <Upload.Dragger beforeUpload={beforeUpload} fileList={file ? [file] : []} onRemove={() => setFile(null)}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Выберите или перенести файл в выделенную область</p>
                        <p className="ant-upload-hint">
                            Допустимый формат файлов: jpg, png, pdf, xls, xlsx, doc, docx, html
                        </p>
                        <div className={'mt-2'}>
                            <Button icon={<UploadOutlined/>} >Выбрать файл</Button>
                        </div>
                    </Upload.Dragger>
                </div>
                {error && (
                    <span className={'text-red-500 mb-2 flex'}>{error}</span>
                )}
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={'Название файла'}/>
            </Modal>
            <Button disabled={disabled} type={'dashed'} onClick={toggleShowUploadModal} icon={<UploadOutlined/>} block>Загрузить файл</Button>
        </>
    )
}

UploadButton.propTypes = {
    onUpload: t.func,
    disabled: t.bool
}

export default UploadButton
