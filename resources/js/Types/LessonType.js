import t from "prop-types"

export const LessonType = t.shape({
    id: t.number.isRequired,
    title: t.string.isRequired,
    description: t.string,
    content: t.string
})

export const AttachmentType = t.shape({
    id: t.number.isRequired,
    title: t.string.isRequired,
    url: t.string.isRequired,
    type: t.string.isRequired,
    filename: t.string.isRequired,
    extension: t.string.isRequired,
})
