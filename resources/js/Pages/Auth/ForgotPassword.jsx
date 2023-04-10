import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import {Button, Div, FormItem, FormLayout, Group, Input} from "@vkontakte/vkui";
import {Icon16ArrowLeftOutline} from "@vkontakte/icons";

export default function ForgotPassword({status}) {
    const {setData, data: form, post, processing, errors} = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault()
        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password"/>

            <Group>
                <p className="mb-0 p-4 text-sm leading-normal">
                    Забыли свой пароль? Без проблем. <br/>
                    Просто сообщите нам свой адрес электронной почты, и мы вышлем вам по электронной почте
                    ссылку, которая позволит вам установить новый пароль.
                </p>
                <FormLayout onSubmit={submit}>
                    <FormItem name={'email'} status={errors.email ? 'error' : ''} bottom={errors.email}>
                        <Input value={form.email} onChange={(e) => setData('email', e.target.value)}
                               placeholder={'Электронная почта'}/>
                    </FormItem>

                    <Div className="flex w-full box-border items-center justify-between">
                        <Button onClick={() => Inertia.visit(route('login'))} before={<Icon16ArrowLeftOutline/>}
                                disabled={processing}>
                            Вернуться к авторизации
                        </Button>
                        <Button type={'submit'} loading={processing}>
                            Восстановить пароль
                        </Button>
                    </Div>
                </FormLayout>
            </Group>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
        </GuestLayout>
    );
}
