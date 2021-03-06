import React, { FC } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Row, Col, Card, Button, Form, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const Register: FC = () => {
  const [form] = Form.useForm()
  const history = useHistory()

  const handleSignup = (): void => {
    history.push('/login')
  }

  return (
    <section className="app-section">
      <Row justify="center">
        <Col span={24} className="typo-grey typo-center">
          <h2>DeliverIT</h2>
        </Col>

        <Col xl={6} lg={8} md={10} sm={12} xs={24}>
          <Card>
            <Form form={form} layout="vertical" size="large">
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Email is required' }]}
                style={{ marginBottom: 15 }}
              >
                <Input name="email" type="email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Password is required' }]}
                style={{ marginBottom: 30 }}
              >
                <Input.Password
                  name="password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              <Row justify="center">
                <Col>
                  <Button onClick={handleSignup} type="primary" typeof="submit">
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>

        <Col span={24} className="typo-grey typo-center" style={{ marginTop: 30 }}>
          <p>Already have account?</p>
          <Link to="/login">Login here</Link>
        </Col>
      </Row>
    </section>
  )
}

export default Register
