import {StarFilled} from "@ant-design/icons";

const HomeworkStatusBlock = ({homework}) => {
    return homework && (
        <div className={`text-sm w-36 h-6 flex items-center justify-center status--${homework?.status?.key}`}>
            {homework?.status?.title} {homework?.grade &&
            <span className={'grade'}><b>{homework.grade}</b></span>}
        </div>
    )
}

export default HomeworkStatusBlock
