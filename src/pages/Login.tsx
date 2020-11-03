import React from 'react'
import { Row, Col, Card, Button, Form, Input } from "antd"
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Login: React.FC = () => {

    const [form] = Form.useForm()

  return (
    
    <section className="app-section">
        <Row justify="center">
            
            <Col span={24} className="typo-grey typo-center">
                <h2>DeliverIT</h2>
            </Col>

            <Col xl={5} lg={10} md={10} xs={10}>
                <Card >
                    <Form 
                        form={form} 
                        layout="vertical"
                        size="large"
                    >
        
                        <Form.Item
                            label="Email"
                            style={{ marginBottom: 15 }}
                        >
                            <Input.Group compact>
                                <Form.Item
                                name="email"
                                rules={[
                                { required: true, message: "Email is required" },
                                ]}
                                style={{ margin: 0, width: "100%" }}
                                >
                                    <Input 
                                        name="email"
                                        type="email"
                                    />
                                </Form.Item>
                            </Input.Group>
                        </Form.Item>

                        <Form.Item
                        label="Password"
                        style={{ marginBottom: 30 }}
                        >
                            <Input.Password
                                name="password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        <Row justify="center">
                            <Col style={{ marginTop: 10 }}>
                                <p> <a href="#"> Forgot password ? </a> </p>
                            </Col>
                            <Col xl={14} lg={14} md={12} sm={10} xs={24} style={{ textAlign: 'right' }}>
                                <Button type="primary" typeof="submit">Sign In</Button>
                            </Col>
                        </Row>

                    </Form>
                </Card>
            </Col>

            <Col span={24} className="typo-grey typo-center" style={{marginTop: 30}}>
                <span>Don't have account yet?</span>
                <p> <a href="#"> Sign up here </a> </p>
            </Col>
        </Row>
    </section>

  )
}

export default Login