import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, useForm} from '@inertiajs/inertia-react';
import {Button, Checkbox, FormItem, FormLayout, Group, Input} from "@vkontakte/vkui";
import {Inertia} from "@inertiajs/inertia";
import {Icon16DoorEnterArrowRightOutline} from "@vkontakte/icons";

export default function Login({status}) {
    const {setData, data: form, post, processing, errors} = useForm({
        email: '',
        password: '',
        remember: true
    });

    const submit = (e) => {
        e.preventDefault()
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Авторизация"/>

            {status && <div className="mb-4 font-medium text-sm text-green-600 text-center">{status}</div>}
            <div className={'flex flex-col items-center justify-center'}>
                <Group className={'max-w-md w-full'}>
                    <div className={'w-full border rounded-md'}>
                        <FormLayout onSubmit={submit}
                                    layout={'vertical'}>
                            <FormItem status={errors.email ? 'error' : ''} bottom={errors.email} name={'email'}
                                      top={'Электронная почта'}>
                                <Input value={form.email} onChange={(e) => setData('email', e.target.value)}/>
                            </FormItem>
                            <FormItem status={errors.password ? 'error' : ''} bottom={errors.password} name={'password'}
                                      top={'Пароль'}>
                                <Input type={'password'} value={form.password}
                                       onChange={(e) => setData('password', e.target.value)}/>
                            </FormItem>
                            <FormItem name={'remember'}>
                                <Checkbox checked={form.remember}
                                          onChange={(e) => setData('remember', e.target.checked)}>Запомнить
                                    меня</Checkbox>
                            </FormItem>
                            <FormItem>
                                <Button loading={processing} after={<Icon16DoorEnterArrowRightOutline/>} type={'submit'}
                                        stretched size={'m'}
                                        mode={'primary'}>Войти</Button>
                            </FormItem>
                            <FormItem>
                                <Button mode={'link'} stretched
                                        onClick={() => Inertia.visit(route('password.request'))}>Восстановить пароль
                                    ?</Button>
                            </FormItem>
                        </FormLayout>
                    </div>
                </Group>
            </div>
        </GuestLayout>
    );
}
