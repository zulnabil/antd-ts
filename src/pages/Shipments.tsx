import React, { FC } from 'react';
import { Table, Row, Col } from 'antd';

import { columns, data } from 'constants/table.shipments';

const Shipments: FC = () => {
  return (
    <>
      <Row justify="center">
        <Col xl={18} lg={24} md={24} xs={24}>
          <Table columns={columns} dataSource={data} pagination={{ position: ['bottomCenter'] }} />
        </Col>
      </Row>
    </>
  );
};

export default Shipments;
