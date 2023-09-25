export const useFormHelper = ({errors}) => {
    return {
        mapItemProps: (key) => ({
            validateStatus: errors[key] && 'error',
            help: errors[key] || null
        }),
    }
}
