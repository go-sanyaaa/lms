import React, {useEffect, useState} from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import {Link, usePage, useRemember} from '@inertiajs/inertia-react';
import {Avatar, message} from "antd";
import {CloseCircleOutlined, CloseOutlined, SmileFilled} from "@ant-design/icons";
import useRole from "@/helpers/useRole";

export default function Authenticated({ auth, header, children, ...e }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const props = usePage().props

    const [showSupport, setShowSupport] = useState(!sessionStorage.getItem('hideSupport'))


    const handleHideSupport = () => {
        sessionStorage.setItem('hideSupport', true)
        setShowSupport(false)
    }

    const {isController} = useRole()

    useEffect(() => {
        if(props.flash.message) {
            message.open({
                key: 'flash',
                content: props.flash.message,
                type: 'success'
            })
        }
    }, [props])

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                {showSupport && (
                    <div className="bg-gray-500">
                        <div className="max-w-7xl flex items-center py-2 mx-auto px-4 sm:px-6 lg:px-8">
                            <span className={'text-white'}>
                                Возник вопрос по работе платформы ?
                                Напиши нам в техподдержку <a className={'text-gray-100'} href={"mailto:help@i-digit.ru"}>help@i-digit.ru</a>
                            </span>
                            <span onClick={handleHideSupport} className={'cursor-pointer text-gray-400 hover:text-gray-200 transition'}>
                                <CloseCircleOutlined className={'ml-3'}/>
                            </span>
                        </div>
                    </div>
                )}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto text-gray-500"/>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex items-center">
                                <NavLink href={route('home')} active={route().current('home')}>
                                    Уроки
                                </NavLink>
                                {isController && (
                                    <NavLink href={route('student.index')} active={route().current('student.index')}>
                                        Студенты
                                    </NavLink>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 select-none">
                            <div className="ml-3 relative">
                                <span className="inline-flex items-center rounded-full pr-4 bg-emerald-50">
                                    <span className={'mr-2'}>
                                        <Avatar style={{background: '#20b981'}} icon={<SmileFilled/>}/>
                                    </span>
                                    <span className={'font-medium text-sm text-emerald-900'}>
                                        {auth.user.name}
                                    </span>
                                </span>
                            </div>
                            <Link method={'post'} href={route('logout')}
                                  className={'flex cursor-pointer text-gray-500 hover:text-gray-600 items-center ml-2'}>
                                Выйти
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
