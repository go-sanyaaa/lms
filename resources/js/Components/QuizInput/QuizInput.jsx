import {Button} from "antd";
import {EditOutlined, PlusOutlined} from "@ant-design/icons";
import useToggleState from "@/helpers/useToggleState";
import QuizDrawer from "@/Components/QuizInput/QuizDrawer";
import {useCallback} from "react";
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
            {value?.questions?.length > 0 ? (
                <Button block onClick={toggleShowDrawer} icon={<EditOutlined/>}>
                    Редактировать тест
                </Button>
            ) : (
                <Button block type={'dashed'} onClick={toggleShowDrawer} icon={<PlusOutlined/>}>
                    Создать тест
                </Button>
            )}
            <QuizDrawer open={showDrawer} questions={value?.questions || []} onChange={handleChange} onClose={toggleShowDrawer}/>
        </div>
    )
}

export default QuizInput
