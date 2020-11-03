import React, { FC } from 'react';
import { Row, Col, Card, Typography, Button, Form, Input, Select } from 'antd';

import classes from './Dashboard.module.css';

import { analytics } from 'constants/dashboard';

const Dashboard: FC = () => {
  const [form] = Form.useForm();

  return (
    <>
      {/* Analytic section */}
      <section className="app-section">
        <Row gutter={[32, 32]} justify="center">
          {analytics.map((analytic) => (
            <Col key={analytic.name} xl={4} lg={6} md={8} xs={12}>
              <p className="typo-grey">{analytic.name}</p>

              <Card className={classes['card-analytic']} size="default">
                <Row justify="center" align="stretch">
                  <Typography.Title level={1} style={{ margin: 0 }}>
                    {analytic.value}
                  </Typography.Title>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Create shipment section */}
      <section className="app-section">
        <Row gutter={[8, 8]} justify="center">
          <Col span={24} className="typo-grey typo-center">
            <span>What do you want to ship?</span>
          </Col>
          <Col flex="0 0 150px" className="typo-center">
            <Button type="primary">Single shipment</Button>
          </Col>
          <Col flex="0 0 150px" className="typo-center">
            <Button type="primary">Bulk shipment</Button>
          </Col>
        </Row>
      </section>

      {/* Get quotes section */}
      <section className="app-section">
        <Row justify="center">
          <Col span={24} className="typo-grey typo-center">
            <span>Get instant quotes</span>
          </Col>
          <Col xl={16} lg={24} md={24} xs={24}>
            <Card className={classes['card-analytic']}>
              <Form form={form} layout="vertical" size="large">
                <Form.Item
                  label="From"
                  required
                  tooltip="From where the package will be sent"
                  style={{ marginBottom: 18 }}
                >
                  <Input.Group compact>
                    <Form.Item
                      name={'from-country'}
                      rules={[{ required: true, message: 'Country is required' }]}
                      style={{ margin: 0, width: '70%' }}
                    >
                      <Select
                        showSearch
                        style={{ width: '95%' }}
                        placeholder="Select country"
                        optionFilterProp="children"
                      >
                        <Select.Option value="indonesia">Indonesia</Select.Option>
                        <Select.Option value="singapore">Singapore</Select.Option>
                        <Select.Option value="malaysia">Malaysia</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={'from-postal-code'}
                      rules={[{ required: true, message: 'Postal code is required' }]}
                      style={{ margin: 0, width: '30%' }}
                    >
                      <Input type="number" placeholder="Postal code" />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>

                <Form.Item label="To" required tooltip="Where will the package be sent" style={{ marginBottom: 15 }}>
                  <Input.Group compact>
                    <Form.Item
                      name={'to-country'}
                      rules={[{ required: true, message: 'Country is required' }]}
                      style={{ margin: 0, width: '70%' }}
                    >
                      <Select
                        showSearch
                        style={{ width: '95%' }}
                        placeholder="Select country"
                        optionFilterProp="children"
                      >
                        <Select.Option value="indonesia">Indonesia</Select.Option>
                        <Select.Option value="singapore">Singapore</Select.Option>
                        <Select.Option value="malaysia">Malaysia</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={'to-postal-code'}
                      rules={[{ required: true, message: 'Postal code is required' }]}
                      style={{ margin: 0, width: '30%' }}
                    >
                      <Input type="number" placeholder="Postal code" />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>

                <Form.Item
                  label="Parcel details"
                  required
                  tooltip="What is the weight of the package in kilogram"
                  style={{ marginBottom: 30 }}
                >
                  <Input type="number" placeholder="Weight (in kg)" />
                </Form.Item>

                <Row justify="center" align="middle">
                  <Form.Item>
                    <Button type="primary" size="large">
                      Get quotes
                    </Button>
                  </Form.Item>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Dashboard;
