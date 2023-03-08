import React from 'react'
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import './App.css';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function ProForm() {
    const [form] = Form.useForm() 
    const Id = Form.useWatch("id", form);
    const Name = Form.useWatch("name", form);
    const BloodGroup = Form.useWatch("bloodGroup", form);
    const Age = Form.useWatch("age", form);
    const Mobile_no = Form.useWatch("mobile_no", form);
    const Place = Form.useWatch("place", form);
    const Healthissues = Form.useWatch("healthissues", form);
    function submit(e) {
        e.preventDefault();
        const data = {
            id: Id,
            name: Name,
            age: Age,
            bloodGroup: BloodGroup,
            place:Place,
            mobile_no: Mobile_no,
            healthissues:Healthissues   
        }
        console.log(data);
        axios.post("http://localhost:8080/post",data)
    }
    return (
        <div className='co'>
                <center className='val'><h1>Patient Details</h1></center>
                <Form className='col'
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    autoComplete="off"
                    action='POST'
                >
                <Form.Item label="Person ID" name="id">
                    <Input
                        type="number"
                        style={{
                            width: 100,
                        }}
                    />
                </Form.Item>
                <Form.Item label="Person Name" name="name">
                    <Input
                        type="text"
                        style={{
                            width: 150,
                        }}
                    />
                </Form.Item>
                <Form.Item label="Age" name="age">
                    <Input
                        type="number"
                        style={{
                            width: 100,
                        }}
                    />
                </Form.Item>
                <Form.Item label="BloodGroup" name="bloodGroup">
                    <Input
                        type="text"
                        style={{
                            width: 150,
                        }}
                    />
                </Form.Item>
                <Form.Item label="Mobile_No" name="mobile_no">
                    <Input
                        type="text"
                        style={{
                            width: 150,
                        }}
                    />
                </Form.Item>
                <Form.Item label="Place" name="place">
                    <Input
                        type="text"
                        style={{
                            width: 150,
                        }}
                    />
                </Form.Item>
                <Form.Item label="HealthIssues" name="healthissues">
                    <Input
                        type="text"
                        style={{
                            width: 150,
                        }}
                    />
                </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        name="submit"
                    >
                        <Button type="primary" htmlType="submit" onClick={submit} style={{ backgroundColor: "rgb(156, 220, 217)", color: "Black"}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            <br />
            <br />
            <br />
            <br />


        </div>
    )
}

export default ProForm;