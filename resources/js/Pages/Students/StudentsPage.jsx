import {Head} from "@inertiajs/inertia-react";
import {Breadcrumb} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import StudentsTable from "@/Components/Students/StudentsTable";
import StudentDrawer from "@/Components/Students/StudentDrawer";

const StudentsPage = ({auth, students}) => {
    const [showStudentId, setShowStudentId] = useState(null)

    return (
        <Authenticated
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Список уроков</h2>}
        >
            <Head title="Список студентов"/>

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className={'flex flex-col space-y-5'}>
                        <Breadcrumb>
                            <Breadcrumb.Item><HomeOutlined/></Breadcrumb.Item>
                            <Breadcrumb.Item>Студенты</Breadcrumb.Item>
                        </Breadcrumb>

                        <div>
                            <div className={'mt-3'}>
                                <StudentsTable onOpen={(student) => setShowStudentId(student.id)} students={students}/>
                            </div>
                        </div>

                        <StudentDrawer studentId={showStudentId} onClose={() => setShowStudentId(undefined)} open={!!showStudentId} />
                    </div>
                </div>

            </div>
        </Authenticated>
    )
}

export default StudentsPage
