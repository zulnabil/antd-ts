import React from 'react'
import { Tag } from "antd"
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons"

const icon = {
  lalamove: "/img/lalamove_logo.svg",
  gogovan: "/img/gogovan_logo.svg",
  grab: "/img/grab_logo.svg",
}

interface NameAddress {
  name: string
  address: string
}

declare type AlignType = 'left' | 'center' | 'right'

export const columns = [
  {
    title: "Courier",
    dataIndex: "courier",
    key: "courier",
    align: "center" as AlignType,
    render: (courier: string): JSX.Element => <img src={courier} alt={courier} />,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "From",
    dataIndex: "from",
    key: "from",
    render: (from: NameAddress): JSX.Element => (
      <span>
        {from.name}
        <br />
        {from.address}
      </span>
    ),
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
    render: (to: NameAddress): JSX.Element => (
      <span>
        {to.name}
        <br />
        {to.address}
      </span>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status: string): JSX.Element => (
      <>
        {status === "Delivered" ? (
          <Tag icon={<CheckCircleOutlined />} color="success">
            {status}
          </Tag>
        ) : status === "On the way" ? (
          <Tag icon={<SyncOutlined spin />} color="processing">
            {status}
          </Tag>
        ) : status === "Pending pickup" ? (
          <Tag icon={<ClockCircleOutlined />} color="warning">
            {status}
          </Tag>
        ) : (
          <Tag icon={<CloseCircleOutlined />} color="error">
            {status}
          </Tag>
        )}
      </>
    ),
  },
]

export const data = [
  {
    courier: icon.lalamove,
    description: "Same day delivery",
    from: {
      name: "Wuhan Yan",
      address: "514 Chai Chee Lane",
    },
    to: {
      name: "Jian Tao",
      address: "150 Neil Road",
    },
    status: "Pending pickup",
  },
  {
    courier: icon.gogovan,
    description: "Same day delivery",
    from: {
      name: "Joseph",
      address: "100 Bukit Timah Road 01-23...",
    },
    to: {
      name: "Kam",
      address: "1 Fullerton Rd #02-02...",
    },
    status: "On the way",
  },
  {
    courier: icon.grab,
    description: "Same day delivery",
    from: {
      name: "Wuhan Yan",
      address: "514 Chai Chee Lane",
    },
    to: {
      name: "Jian Tao",
      address: "150 Neil Road",
    },
    status: "Rejected",
  },
  {
    courier: icon.gogovan,
    description: "Same day delivery",
    from: {
      name: "Joseph",
      address: "100 Bukit Timah Road 01-23...",
    },
    to: {
      name: "Kam",
      address: "1 Fullerton Rd #02-02...",
    },
    status: "Delivered",
  },
  {
    courier: icon.lalamove,
    description: "Same day delivery",
    from: {
      name: "Wuhan Yan",
      address: "514 Chai Chee Lane",
    },
    to: {
      name: "Jian Tao",
      address: "150 Neil Road",
    },
    status: "Pending pickup",
  },
  {
    courier: icon.grab,
    description: "Same day delivery",
    from: {
      name: "Joseph",
      address: "100 Bukit Timah Road 01-23...",
    },
    to: {
      name: "Kam",
      address: "1 Fullerton Rd #02-02...",
    },
    status: "On the way",
  },
  {
    courier: icon.lalamove,
    description: "Same day delivery",
    from: {
      name: "Wuhan Yan",
      address: "514 Chai Chee Lane",
    },
    to: {
      name: "Jian Tao",
      address: "150 Neil Road",
    },
    status: "Rejected",
  },
  {
    courier: icon.gogovan,
    description: "Same day delivery",
    from: {
      name: "Joseph",
      address: "100 Bukit Timah Road 01-23...",
    },
    to: {
      name: "Kam",
      address: "1 Fullerton Rd #02-02...",
    },
    status: "Delivered",
  },
  {
    courier: icon.grab,
    description: "Same day delivery",
    from: {
      name: "Wuhan Yan",
      address: "514 Chai Chee Lane",
    },
    to: {
      name: "Jian Tao",
      address: "150 Neil Road",
    },
    status: "Pending pickup",
  },
  {
    courier: icon.gogovan,
    description: "Same day delivery",
    from: {
      name: "Joseph",
      address: "100 Bukit Timah Road 01-23...",
    },
    to: {
      name: "Kam",
      address: "1 Fullerton Rd #02-02...",
    },
    status: "On the way",
  },
  {
    courier: icon.lalamove,
    description: "Same day delivery",
    from: {
      name: "Wuhan Yan",
      address: "514 Chai Chee Lane",
    },
    to: {
      name: "Jian Tao",
      address: "150 Neil Road",
    },
    status: "Rejected",
  },
  {
    courier: icon.grab,
    description: "Same day delivery",
    from: {
      name: "Joseph",
      address: "100 Bukit Timah Road 01-23...",
    },
    to: {
      name: "Kam",
      address: "1 Fullerton Rd #02-02...",
    },
    status: "Delivered",
  },
]
