import React from 'react'
import { Tag, Button } from 'antd'
import { CheckCircleOutlined, SyncOutlined, CloseCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { ButtonHTMLType } from 'antd/lib/button/button'

const icon = {
  lalamove: '/img/lalamove_logo.svg',
  gogovan: '/img/gogovan_logo.svg',
  grab: '/img/grab_logo.svg',
}

interface NameAddress {
  name: string
  address: string
}

declare type AlignType = 'left' | 'center' | 'right'

export const columns = [
  {
    title: 'Courier',
    dataIndex: 'courier',
    key: 'courier',
    align: 'center' as AlignType,
    render: (courier: string): JSX.Element => <img src={courier} alt={courier} />,
  },
  {
    title: 'Channel',
    dataIndex: 'channel',
    key: 'channel',
  },
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
  },
]

export const data = [
  {
    courier: icon.lalamove,
    channel: 'Woo Commerce',
    key: '1234-fjdkl-9876-cvkjd',
    status: 'active',
    Action: <Button type="primary"> Active </Button>,
  },
  {
    courier: icon.gogovan,
    channel: 'Woo Commerce',
    key: '1234-fjdkl-9876-cvkjd',
    status: 'Not Active',
    Action: <Button type="primary"> Active </Button>,
  },
]
