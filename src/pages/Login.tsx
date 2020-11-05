import React, { FC, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Row, Col, Card, Button, Form, Input, Alert } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

import { useFetchPost } from 'services/useFetch'
import { useAuth } from 'context/auth'

const Login: FC = () => {
  const [form] = Form.useForm()
  const { setAuthToken } = useAuth()
  const [values, setValues] = useState<Record<string, unknown>>({})
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isInvalidCredential, setInvalidCredential] = useState(false)

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
    setInvalidCredential(false)
  }

  const handleSignin = async () => {
    try {
      const res = await useFetchPost(`${process.env.REACT_APP_API_URL}/auth`, 'POST', values)
      if (res.token) {
        setAuthToken(res.token)
        setLoggedIn(true)
      } else {
        throw Error('failed')
      }
    } catch (error) {
      console.log(error)
      setInvalidCredential(true)
    }
  }

  if (isLoggedIn) {
    return <Redirect to="/" />
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
                <Input onChange={handleChange('email')} name="email" type="email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Password is required' }]}
                style={{ marginBottom: 15 }}
              >
                <Input.Password
                  onChange={handleChange('password')}
                  name="password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>
              {isInvalidCredential && <Alert message="Error: Invalid credentials." type="error" showIcon />}
              <Row gutter={[8, 8]} justify="space-between" align="middle" style={{ marginTop: 15 }}>
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
