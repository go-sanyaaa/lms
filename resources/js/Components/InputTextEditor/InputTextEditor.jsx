import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './styles.css'
import {Button, Modal} from "antd";
import {
    BoldOutlined,
    ItalicOutlined,
    OrderedListOutlined,
    UnorderedListOutlined,
    YoutubeFilled,
} from "@ant-design/icons";
import React, {useCallback, useEffect, useState} from "react";
import {debounce} from "lodash";
import t from 'prop-types'
import {Youtube} from "@tiptap/extension-youtube";
import {Input} from "antd/es";
import useToggleState from "@/helpers/useToggleState";

const MenuBar = ({editor}) => {
    const [url, setUrl] = useState('')
    const [showModal, , toggleModal] = useToggleState()

    if (!editor) {
        return null
    }

    const handleAddYoutube = () => {
        editor.commands.setYoutubeVideo({
            src: url,
            width: '100%',
            height: 480
        })

        setUrl('')
        toggleModal()
    }

    return (
        <div className={'space-x-3 flex items-center'}>
            <Button.Group>
                <Button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    type={editor.isActive('bold') ? 'primary' : ''}
                    icon={<BoldOutlined/>}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    type={editor.isActive('italic') ? 'primary' : ''}
                    icon={<ItalicOutlined/>}
                />
            </Button.Group>

            <Button.Group>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                    type={editor.isActive('heading', {level: 1}) ? 'primary' : ''}
                    icon={'H1'}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                    type={editor.isActive('heading', {level: 2}) ? 'primary' : ''}
                    icon={'H2'}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                    type={editor.isActive('heading', {level: 3}) ? 'primary' : ''}
                    icon={'H3'}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({level: 4}).run()}
                    type={editor.isActive('heading', {level: 4}) ? 'primary' : ''}
                    icon={'H4'}
                />
            </Button.Group>

            <Button.Group>
                <Button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    type={editor.isActive('bulletList') ? 'primary' : ''}
                    icon={<UnorderedListOutlined/>}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    type={editor.isActive('orderedList') ? 'primary' : ''}
                    icon={<OrderedListOutlined/>}
                />
            </Button.Group>

            <Button.Group>
                <Button icon={<YoutubeFilled style={{color: 'red'}}/>} onClick={toggleModal} />
                <Modal title={'Добавить видео с YouTube'} onOk={handleAddYoutube} onCancel={toggleModal} open={showModal}>
                    <Input placeholder={'Ссылка на видео'} value={url} onChange={e => setUrl(e.target.value)}/>
                </Modal>
            </Button.Group>
        </div>
    )
}

const InputTextEditor = ({value, initialValue, onChange, disabled}) => {
    const handleChange = debounce(useCallback((editor) => {
        let content = editor.getHTML()
        if (content === '<p></p>') {
            content = ''
        }
        onChange(content)
    }, [onChange]), 300)

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3, 4]
                },
                strike: false,
                code: false,
                codeBlock: false,
                blockquote: false,
                horizontalRule: false,
                hardBreak: false
            }),
            Youtube.configure({})
        ],
        content: initialValue || value,
        injectCSS: false,
        onUpdate: ({editor}) => handleChange(editor)
    })

    // Если обновлять контент по изменению в value, то ломается работа истории и скидывается указатель
    useEffect(() => {
        editor?.commands.setContent(initialValue)
        // eslint-disable-next-line
    }, [initialValue])

    useEffect(() => {
        if (disabled && editor?.isEditable) {
            editor?.setOptions({editable: false});
        } else if (!disabled && !editor?.isEditable) {
            editor?.setOptions({editable: true});
        }
    }, [disabled, editor])


    return (
        <div className={'space-y-3'}>
            <MenuBar editor={editor}/>
            <EditorContent disabled={disabled} className={'input-text-editor'} editor={editor}/>
        </div>
    )
}

InputTextEditor.propTypes = {
    value: t.string,
    initialValue: t.string,
    onChange: t.func,
    disabled: t.bool
}

export default InputTextEditor
