import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Row, Col, Card, Button, Form, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const Login: React.FC = () => {
  const [form] = Form.useForm()
  const history = useHistory()

  const handleSignin = (): void => {
    history.push('/')
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
              <Form.Item label="Email" style={{ marginBottom: 15 }}>
                <Input.Group compact>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Email is required' }]}
                    style={{ margin: 0, width: '100%' }}
                  >
                    <Input name="email" type="email" />
                  </Form.Item>
                </Input.Group>
              </Form.Item>

              <Form.Item label="Password" style={{ marginBottom: 30 }}>
                <Input.Password
                  name="password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              <Row gutter={[8, 8]} justify="space-between" align="middle">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <a href="#">Forgot password?</a>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className="typo-right">
                  <Button onClick={handleSignin} type="primary" typeof="submit">
                    Sign in
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>

        <Col span={24} className="typo-grey typo-center" style={{ marginTop: 30 }}>
          <p>Don't have account yet?</p>
          <Link to="/register">Sign up here</Link>
        </Col>
      </Row>
    </section>
  )
}

export default Login
