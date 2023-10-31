import {Button} from "antd";
import {EditOutlined, PlusOutlined} from "@ant-design/icons";
import useToggleState from "@/helpers/useToggleState";
import QuizEditDrawer from "@/Components/QuizInput/QuizEditDrawer";
import {useCallback} from "react";

const QuizInput = ({value, onChange}) => {
    const [showDrawer, , toggleShowDrawer] = useToggleState()

    const handleChange = useCallback(
        (questions) => {
            onChange({
                questions
            })
        },
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
            <QuizEditDrawer open={showDrawer} questions={value?.questions || []} onChange={handleChange} onClose={toggleShowDrawer}/>
        </div>
    )
}

export default QuizInput
