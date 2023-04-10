import {Head} from "@inertiajs/inertia-react";
import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import StudentsTable from "@/Components/Students/StudentsTable";
import StudentDrawer from "@/Components/Students/StudentDrawer";
import {Panel, PanelHeader} from "@vkontakte/vkui";

const StudentsPage = ({auth, students}) => {
    const [showStudentId, setShowStudentId] = useState(null)

    return (
        <Authenticated
            auth={auth}
        >
            <Head title="Список студентов"/>

            <Panel>
                <PanelHeader before={null}>
                    Студенты
                </PanelHeader>
                <StudentsTable onOpen={(student) => setShowStudentId(student.id)}
                               students={students}/>
                <StudentDrawer studentId={showStudentId} onClose={() => setShowStudentId(undefined)}
                               open={!!showStudentId}/>
            </Panel>
        </Authenticated>
    )
}

export default StudentsPage
