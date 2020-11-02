import React, { FC } from 'react'
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

const style = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}

const CircleFullscreen: FC = () => {
  return (
    <div style={style.container}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} />} />
    </div>
  )
}

export default CircleFullscreen
