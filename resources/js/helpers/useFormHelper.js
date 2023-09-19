export const useFormHelper = ({setData, data, errors}) => {
    return {
        mapItemProps: (key) => ({
            validateStatus: errors[key] && 'error',
            help: errors[key] || null
        }),
        mapInputProps: (key) => ({
            value: data[key] !== null ? data[key] : null,
            onChange: e => {
                if(typeof e === "object" && !Array.isArray(e)) {
                    return setData(key, e.target.value)
                }

                setData(key, e)
            }
        })
    }
}
