import React from 'react'
import { Button } from "antd"
import { EditOutlined } from "@ant-design/icons"

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
    title: "Rate",
    dataIndex: "rate",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
]

export const data = [
  {
    key: "1",
    courier: icon.lalamove,
    description: "Sameday Delivery",
    from: {
      name: "Joseph",
      address: "100 Bukit Timah Road 01-23...",
    },
    to: {
      name: "Kam",
      address: "1 Fullerton Rd #02-02...",
    },
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "2",
    courier: icon.gogovan,
    description: "Sameday Delivery",
    from: {
      name: "Wuhan Yan",
      address: "514 Chai Chee Lane",
    },
    to: {
      name: "Jian Tao",
      address: "150 Neil Road",
    },
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "3",
    courier: icon.grab,
    description: "Sameday Delivery",
    from: {
      name: "Joseph",
      address: "100 Bukit Timah Road 01-23...",
    },
    to: {
      name: "Kam",
      address: "1 Fullerton Rd #02-02...",
    },
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "4",
    courier: icon.gogovan,
    description: "Sameday Delivery",
    from: {
      name: "Wuhan Yan",
      address: "514 Chai Chee Lane",
    },
    to: {
      name: "Jian Tao",
      address: "150 Neil Road",
    },
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "5",
    courier: icon.lalamove,
    description: "Sameday Delivery",
    from: {
      name: "Joseph",
      address: "100 Bukit Timah Road 01-23...",
    },
    to: {
      name: "Jian Tao",
      address: "150 Neil Road",
    },
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "6",
    courier: icon.grab,
    description: "Sameday Delivery",
    from: {
      name: "Wuhan Yan",
      address: "514 Chai Chee Lane",
    },
    to: {
      name: "Kam",
      address: "1 Fullerton Rd #02-02...",
    },
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
]
