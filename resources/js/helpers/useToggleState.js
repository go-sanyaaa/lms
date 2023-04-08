import {useCallback, useState} from "react";

const useToggleState = (value = false) => {
    const [state, setState] = useState(value);

    const toggleState = useCallback(() => {
        setState(!state);
    }, [state, setState]);

    const withToggle = useCallback(async (promise) => {
        setState(true)
        let resp = null
        try {
            resp = await promise
        } catch (e) {
        }
        setState(false)

        return resp
    }, [setState])

    return [state, setState, toggleState, withToggle];
};

export default useToggleState;
