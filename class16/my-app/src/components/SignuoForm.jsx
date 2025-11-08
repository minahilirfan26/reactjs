import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
// const onFinish = values => {
//   console.log('Success:', values);
// };
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const SignupForm = ({HandleSignup}) => (
  <Form
    name="basic"
    initialValues={{ remember: true }}
    onFinish={HandleSignup}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="Email"
      rules={[{ required: true, message: 'Please input your Email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default SignupForm;