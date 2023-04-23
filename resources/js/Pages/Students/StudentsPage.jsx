import {Head} from "@inertiajs/inertia-react";
import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import StudentsTable from "@/Components/Students/StudentsTable";
import StudentDrawer from "@/Components/Students/StudentDrawer";
import {Panel, PanelHeader, PanelHeaderBack, Title, View} from "@vkontakte/vkui";
import ShowStudentPanel from "@/Panels/ShowStudentPanel";

const StudentsPage = ({auth, students}) => {
    const [showStudentId, setShowStudentId] = useState(null)

    const [activePanel, setActivePanel] = useState('students')

    const handleShowStudent = (student) => {
        setShowStudentId(student.id)
        setActivePanel('show')
    }

    const handleCloseStudent = () => {
        setActivePanel('students')
        setShowStudentId(null)
    }

    return (
        <Authenticated
            auth={auth}
        >
            <Head title="Список студентов"/>
            <View activePanel={activePanel}>
                <Panel id={'students'}>
                    <PanelHeader before={null}>
                        <Title level={2} weight={2} style={{color: 'var(--vkui--color_text_contrast)'}}>Студенты</Title>
                    </PanelHeader>
                    <StudentsTable onOpen={handleShowStudent}
                                   students={students.data}/>
                    <StudentDrawer studentId={showStudentId} onClose={() => setShowStudentId(undefined)}
                                   open={!!showStudentId}/>
                </Panel>
                <ShowStudentPanel id={'show'} studentId={showStudentId} onClose={handleCloseStudent}/>
            </View>
        </Authenticated>
    )
}

export default StudentsPage
