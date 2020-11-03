import React, { FC } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const CircleFullscreen: FC = () => {
  return (
    <div className="container-center">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} />} />
    </div>
  );
};

export default CircleFullscreen;
