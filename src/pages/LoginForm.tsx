import React from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {ValidateErrorEntity} from "rc-field-form/lib/interface";

const onFinish = (values: FieldType) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: ValidateErrorEntity<FieldType>) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const LoginForm: React.FC = () => (
    <Form
        name="loginForm"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        style={{maxWidth: 600}}
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
        >
            <Input/>
        </Form.Item>

        <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
        >
            <Input.Password/>
        </Form.Item>

        <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{offset: 8, span: 16}}
        >
            <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">
                登录
            </Button>
        </Form.Item>
    </Form>
);

export default LoginForm;