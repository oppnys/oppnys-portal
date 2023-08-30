import React from 'react';
import {Button, Form, Input} from 'antd';
import {ValidateErrorEntity} from "rc-field-form/lib/interface";
import styled from "@emotion/styled";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

const FlexLR = styled.div`
  display: flex;
  justify-content: space-between;
`

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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            name="username"
            rules={[{required: true, message: '请输入用户名!'}]}
        >
            <Input
                prefix={<UserOutlined className="site-form-item-icon"/>}
                placeholder="用户名"
                key={'username'}
            />
        </Form.Item>

        <Form.Item<FieldType>
            name="password"
            rules={[{required: true, message: '请输入密码!'}]}
        >
            <Input.Password
                type="password"
                prefix={<LockOutlined className="site-form-item-icon"/>}
                placeholder="密码"
                key={'password'}
            />
        </Form.Item>

        <Form.Item>
            <Button block type="primary" htmlType="submit">
                登录
            </Button>
        </Form.Item>
        <Form.Item>
            <FlexLR>
                <Button type="link">去注册</Button>
                <Button type="link">忘记密码</Button>
            </FlexLR>
        </Form.Item>
    </Form>
);

export default LoginForm;