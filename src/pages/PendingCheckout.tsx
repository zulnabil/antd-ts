import React, { FC, useState } from 'react'
import { Row, Col, Table, Button } from 'antd'

import { columns, data } from 'constants/table.pendingCheckout'

declare type selectType = 'checkbox' | 'radio'

const PendingCheckout: FC = () => {
  // rowSelection object indicates the need for row selection

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const [selectionType] = useState<selectType>('checkbox')

  return (
    <section className="app-section">
      <Row justify="center">
        <Col xl={18} lg={24} md={24} xs={24}>
          <Table
            pagination={false}
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            footer={() => (
              <Row justify="end">
                <Col>
                  <span>Total = x 18</span>
                </Col>
              </Row>
            )}
          />
          <Row gutter={[8, 8]} justify="center" align="middle" style={{ marginTop: 18 }}>
            <Col xl={5} lg={5} md={6} sm={7} xs={24}>
              <Button type="primary">
                Add Shipment
              </Button>
            </Col>
            <Col xl={5} lg={5} md={6} sm={7} xs={24}>
              <Button danger>
                Remove Shipment
              </Button>
            </Col>
            <Col xl={14} lg={14} md={12} sm={10} xs={24} style={{ textAlign: 'right' }}>
              <Button
                type="primary"
                size="large"
                className="btn-green"
              >
                Pay For Service
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  )
}

export default PendingCheckout
