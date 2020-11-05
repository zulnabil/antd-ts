import React from 'react'
import { Button } from 'antd'

const icon = {
  wooCommerce: '/img/wooCommerce_logo.svg',
  shopify: '/img/shopify_logo.svg',
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
    dataIndex: 'action',
  },
]

export const data = [
  {
    courier: icon.wooCommerce,
    channel: 'Woo Commerce',
    key: '1234-fjdkl-9876-cvkjd',
    status: 'active',
    action: <Button type="primary"> Active </Button>,
  },
  {
    courier: icon.shopify,
    channel: 'Shoopify',
    key: '-',
    status: 'Not Active',
    action: <Button danger> View </Button>,
  },
]
