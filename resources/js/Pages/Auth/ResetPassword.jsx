import React, {useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, useForm} from '@inertiajs/inertia-react';
import {Button, Form, Input} from "antd";

export default function ResetPassword({token, email}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = () => {
        post(route('password.update'));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password"/>

            <Form layout={'vertical'} onFinish={submit}>
                <Form.Item label={'Электронная почта'} validateStatus={errors.email && 'error'} help={errors.email}>
                    <Input value={data.email} name={'email'} disabled autoComplete="username"/>
                </Form.Item>

                <Form.Item label={'Пароль'} validateStatus={errors.password && 'error'} help={errors.password}>
                    <Input.Password onChange={onHandleChange} name={'password'} autoComplete="new-password"/>
                </Form.Item>

                <Form.Item label={'Подтвердите пароль'} validateStatus={errors.password_confirmation && 'error'}
                           help={errors.password_confirmation}>
                    <Input.Password onChange={onHandleChange} name={'password_confirmation'}
                                    autoComplete="new-password"/>
                </Form.Item>

                <div className="flex items-center justify-end mt-4">
                    <Button htmlType={'submit'} block loading={processing}>
                        Сбросить пароль
                    </Button>
                </div>
            </Form>
        </GuestLayout>
    );
}
