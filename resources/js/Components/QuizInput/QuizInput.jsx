import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import useToggleState from "@/helpers/useToggleState";
import QuizDrawer from "@/Components/QuizInput/QuizDrawer";
import {useCallback, useEffect} from "react";
import {debounce} from "lodash";

const QuizInput = ({value, onChange}) => {
    const [showDrawer, , toggleShowDrawer] = useToggleState()

    const handleChange = useCallback(
        debounce((questions) => {
            onChange({
                questions
            })
        }, 500),
        [onChange, value]
    )

    return (
        <div>
            <Button block type={'dashed'} onClick={toggleShowDrawer} icon={<PlusOutlined/>}>
                Создать тест
            </Button>
            <QuizDrawer open={showDrawer} questions={value?.questions || []} onChange={handleChange} onClose={toggleShowDrawer}/>
        </div>
    )
}

export default QuizInput
