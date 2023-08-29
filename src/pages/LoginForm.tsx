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
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            name="username"
            rules={[{required: true, message: '请输入用户名!'}]}
        >
            <Input placeholder="用户名" key={'username'}/>
        </Form.Item>

        <Form.Item<FieldType>
            name="password"
            rules={[{required: true, message: '请输入密码!'}]}
        >
            <Input.Password placeholder="密码" key={'password'}/>
        </Form.Item>

        <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
        >
            <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item>
            <Button block type="primary" htmlType="submit">
                登录
            </Button>
        </Form.Item>
    </Form>
);

export default LoginForm;