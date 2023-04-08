import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, useForm} from '@inertiajs/inertia-react';
import {Button, Form, Input} from "antd";
import {LeftOutlined} from "@ant-design/icons";
import {Inertia} from "@inertiajs/inertia";

export default function ForgotPassword({status}) {
    const {setData, post, processing, errors} = useForm({
        email: '',
    });

    const submit = () => {
        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password"/>

            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Забыли свой пароль? Без проблем. <br/>
                Просто сообщите нам свой адрес электронной почты, и мы вышлем вам по электронной почте
                ссылку, которая позволит вам установить новый пароль.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <Form onFinish={submit} onValuesChange={(_, d) => setData(d)}>
                <Form.Item name={'email'} validateStatus={errors.email && 'error'} help={errors.email}>
                    <Input placeholder={'Электронная почта'}/>
                </Form.Item>

                <div className="flex items-center justify-between mt-4">
                    <Button onClick={() => Inertia.visit(route('login'))} icon={<LeftOutlined/>} disabled={processing}>
                        Вернуться к авторизации
                    </Button>
                    <Button htmlType={'submit'} loading={processing}>
                        Восстановить пароль
                    </Button>
                </div>
            </Form>
        </GuestLayout>
    );
}
