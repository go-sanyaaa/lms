import {Button} from "antd";
import useToggleState from "@/helpers/useToggleState";
import SetMentorModal from "@/Components/Students/SetMentorModal";

const InputMentor = ({value, onChange, studentId}) => {
    const [showModal, , toggleShowModal] = useToggleState(false)

    return (
        <div className={'rounded-md flex space-x-3'}>
            {value ? (
                <div className={'border border-solid border-gray-200 flex-1 rounded-md py-1 px-3'}>
                    {value.name}
                </div>
            ) : (
                <div className={'bg-gray-100 flex-1 rounded-md py-1 px-3'}>
                    Не назначен
                </div>
            )}
            <Button type={!value && 'primary'} onClick={toggleShowModal}>
                {value ? 'Изменить' : 'Назначить'}
            </Button>

            <SetMentorModal students={[studentId]} onChange={onChange} open={showModal} onCancel={toggleShowModal}/>
        </div>
    )
}

export default InputMentor
