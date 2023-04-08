import {usePage} from "@inertiajs/inertia-react";
import {Role} from "@/constants/roles";

export default () => {
    const role = usePage().props?.auth?.role || ''

    return {
        isAuditor: role === Role.Auditor,
        isStudent: role === Role.Student,
        isController: role === Role.Controller,
        isManager: [Role.Auditor, Role.Controller].includes(role)
    }
}
