import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
import {Head, useForm} from '@inertiajs/inertia-react';
import {Button, Checkbox, Form, Input} from "antd";
import {LoginOutlined} from "@ant-design/icons";
import {Inertia} from "@inertiajs/inertia";

export default function Login({status}) {
    const {setData, post, processing, errors} = useForm();

    const submit = () => {
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Авторизация"/>

            {status && <div className="mb-4 font-medium text-sm text-green-600 text-center">{status}</div>}
            <div className={'flex flex-col w-full items-center justify-center'}>
                <div className={'p-8 max-w-md w-full bg-white border border-solid border-gray-200 rounded-md'}>
                    <Form onValuesChange={(_, values) => setData(values)} onFinish={submit} layout={'vertical'}>
                        <Form.Item validateStatus={errors.email && 'error'} help={errors.email} name={'email'}
                                   label={'Электронная почта'}>
                            <Input size={'large'}/>
                        </Form.Item>
                        <Form.Item validateStatus={errors.password && 'error'} help={errors.password} name={'password'}
                                   label={'Пароль'}>
                            <Input.Password size={'large'}/>
                        </Form.Item>
                        <Form.Item name={'remember'} valuePropName={'checked'}>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                        <Button block size={'large'} loading={processing} htmlType={'submit'} icon={<LoginOutlined/>}
                                type={'primary'}>Войти</Button>
                        <Button onClick={() => Inertia.visit(route('password.request'))} className={'mt-2'} block
                                type={'link'}>Восстановить пароль ?</Button>
                    </Form>
                </div>
            </div>
        </GuestLayout>
    );
}
