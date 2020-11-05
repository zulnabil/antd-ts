import React from 'react'
import { Row, Col, Card, Button, Form, Input, Space, Tabs } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

const Account: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Profile" key="1">
        <section className="app-section">
          <Row justify="center">
            <Col xl={8} lg={10} md={14} sm={18} xs={24}>
              <Card>
                <Form form={form} layout="vertical" size="large">
                  <Form.Item label="Name" style={{ marginBottom: 15 }}>
                    <Input.Group compact>
                      <Form.Item
                        name={'from-country'}
                        rules={[{ required: true, message: 'Name is required' }]}
                        style={{ margin: 0, width: '100%' }}
                      >
                        <Input type="text" />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>

                  <Form.Item label="Mobile Number" style={{ marginBottom: 15 }}>
                    <Input.Group compact>
                      <Form.Item
                        name={'to-country'}
                        rules={[{ required: true, message: 'Mobile number is required' }]}
                        style={{ margin: 0, width: '100%' }}
                      >
                        <Input type="number" />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>

                  <Form.Item label="Email" style={{ marginBottom: 35 }}>
                    <Input.Group compact>
                      <Form.Item
                        name={'to-country'}
                        rules={[{ required: true, message: 'Email is required' }]}
                        style={{ margin: 0, width: '100%' }}
                      >
                        <Input type="email" />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>

                  <Form.List name="address">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map((field) => (
                          <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                            <Form.Item
                              {...field}
                              name={[field.name, 'address']}
                              fieldKey={[field.fieldKey, 'address']}
                              rules={[{ required: true, message: 'Missing first name' }]}
                            >
                              <Input placeholder="Address" style={{ width: '170%' }} />
                            </Form.Item>
                            <MinusCircleOutlined
                              style={{ width: 160, textAlign: 'end' }}
                              onClick={() => remove(field.name)}
                            />
                          </Space>
                        ))}
                        <Form.Item>
                          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Add Address
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>

                  <Row justify="end">
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Form.Item>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </section>
      </TabPane>

      <TabPane tab="Change Password" key="2">
        <section className="app-section">
          <Row justify="center">
            <Col xl={8} lg={10} md={14} sm={18} xs={24}>
              <Card>
                <Form form={form} layout="vertical" size="large">
                  <Form.Item label="Current Password" style={{ marginBottom: 15 }}>
                    <Input.Group compact>
                      <Form.Item style={{ margin: 0, width: '100%' }}>
                        <Input.Password
                          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>

                  <Form.Item label="New Password" style={{ marginBottom: 15 }}>
                    <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                  </Form.Item>

                  <Form.Item label="Confirm Password" style={{ marginBottom: 15 }}>
                    <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                  </Form.Item>

                  <Row justify="end">
                    <Form.Item>
                      <Button type="primary">Save</Button>
                    </Form.Item>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </section>
      </TabPane>
    </Tabs>
  )
}

export default Account
