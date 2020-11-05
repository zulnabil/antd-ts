import React from 'react'
import { Row, Col, Card, Button, Form, Input, Space, Tabs, Select } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

const CreateShipment: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="PICK-UP" key="1">
        <section className="app-section">
          <Row justify="center">
            <Col xl={6} lg={12} md={12} xs={12}>
              <Card>
                <Form form={form} layout="vertical" size="large">
                  <Col span={24}>
                    <span>From</span>
                  </Col>
                  <Form.Item label="Address" style={{ marginBottom: 15, marginTop: 10 }}>
                    <Input.Group compact>
                      <Form.Item
                        name={'from-country'}
                        rules={[{ required: true, message: 'Address is required' }]}
                        style={{ margin: 0, width: '100%' }}
                      >
                        <Select
                          showSearch
                          style={{ width: '100%' }}
                          placeholder="Select address"
                          optionFilterProp="children"
                        >
                          <Select.Option value="My Home 1 - Tadulako street 123">
                            My Home 1 - Tadulako street 123
                          </Select.Option>
                        </Select>
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>

                  <Row justify="end">
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        NEXT
                      </Button>
                    </Form.Item>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </section>
      </TabPane>

      <TabPane tab="DROP-OFF" key="2"></TabPane>
      <TabPane tab="ADDITIONAL" key="3"></TabPane>
    </Tabs>
  )
}

export default CreateShipment
