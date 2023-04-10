import React, {useEffect, useState} from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import {usePage} from '@inertiajs/inertia-react';
import {message} from "antd";
import useRole from "@/helpers/useRole";
import {
    Avatar,
    Button,
    Cell,
    Group,
    Panel,
    PanelHeader,
    Platform,
    RichCell,
    Separator,
    SplitCol,
    SplitLayout,
    useAdaptivityConditionalRender,
    usePlatform
} from "@vkontakte/vkui";
import {Icon24BookSpreadOutline, Icon24Users3Outline} from "@vkontakte/icons";
import {Inertia} from "@inertiajs/inertia";

export default function Authenticated({auth, children}) {
    const props = usePage().props

    const {isController} = useRole()

    const [showSupport, setShowSupport] = useState(!sessionStorage.getItem('hideSupport'))

    const handleHideSupport = () => {
        sessionStorage.setItem('hideSupport', true)
        setShowSupport(false)
    }

    useEffect(() => {
        if (props.flash.message) {
            message.open({
                key: 'flash',
                content: props.flash.message,
                type: 'success'
            })
        }
    }, [props])

    const platform = usePlatform();
    const {viewWidth} = useAdaptivityConditionalRender();

    const isVKCOM = platform === Platform.VKCOM;

    return (
        <SplitLayout
            style={{justifyContent: 'center'}}
            header={!isVKCOM && <PanelHeader separator={false}/>}
        >
            {viewWidth.tabletPlus && (
                <SplitCol animate={true} className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
                    <Panel>
                        {!isVKCOM && (
                            <PanelHeader before={<ApplicationLogo/>}>
                                <span>LMS</span>
                            </PanelHeader>
                        )}
                        <Group>
                            <RichCell
                                subhead={auth.user.email}
                                before={<Avatar initials="АЩ" gradientColor="orange" size={42}/>}
                                disabled
                            >
                                {auth.user.name}
                            </RichCell>
                        </Group>
                        <Group className={'space-y-1'}>
                            <Cell
                                disabled={route().current('home')}
                                style={
                                    route().current('home') || route().current('course.*')
                                        ? {
                                            backgroundColor: 'var(--vkui--color_background_secondary)',
                                            borderRadius: 8,
                                        }
                                        : {}
                                }
                                before={<Icon24BookSpreadOutline/>}
                                onClick={() => Inertia.visit(route('home'))}
                            >
                                Курсы
                            </Cell>
                            {isController && (
                                <Cell
                                    disabled={route().current('student.index')}
                                    style={
                                        route().current('student.*')
                                            ? {
                                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                                borderRadius: 8,
                                            }
                                            : {}
                                    }
                                    before={<Icon24Users3Outline/>}
                                    onClick={() => Inertia.visit(route('student.index'))}
                                >
                                    Студенты
                                </Cell>
                            )}
                            <Separator className={'my-2'}/>
                            <Button onClick={() => Inertia.post(route('logout'))} appearance={'negative'}
                                    mode={'tertiary'} stretched>Выйти</Button>
                        </Group>
                    </Panel>
                </SplitCol>
            )}

            <SplitCol width="100%" maxWidth="720px" stretchedOnMobile autoSpaced>
                {children}
            </SplitCol>
        </SplitLayout>
    );
}
