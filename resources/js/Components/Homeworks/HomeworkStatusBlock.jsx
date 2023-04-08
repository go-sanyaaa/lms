import {StarFilled} from "@ant-design/icons";

const HomeworkStatusBlock = ({homework}) => {
    return homework && (
        <div className={`text-sm status--${homework?.status?.key}`}>
            {homework?.status?.title} {homework?.grade &&
            <span className={'grade'}><StarFilled style={{color: '#ff8828'}}/> <b>{homework.grade}</b></span>}
        </div>
    )
}

export default HomeworkStatusBlock
