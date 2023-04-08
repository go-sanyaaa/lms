import {useState} from "react";

const useObject = (initialObject) => {
    const [state, setState] = useState(initialObject)

    const setValue = (key, value) => {
        const newState = Object.assign({}, state, {
            [key]: value
        })

        setState(newState)
    }

    return [state, setState, setValue]
}

export default useObject
