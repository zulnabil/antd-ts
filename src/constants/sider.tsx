import React from 'react'

import {
  AppstoreOutlined,
  PlusCircleOutlined,
  ClockCircleOutlined,
  ProfileOutlined,
  DollarOutlined,
  InteractionOutlined,
  UserOutlined,
  ImportOutlined,
} from "@ant-design/icons"

export const menus = [
  {
    name: "Dashboard",
    path: "/",
    icon: <AppstoreOutlined />,
  },
  {
    name: "Create shipment",
    path: "/create-shipment",
    icon: <PlusCircleOutlined />,
  },
  {
    name: "Pending checkout",
    path: "/pending-checkout",
    icon: <ClockCircleOutlined />,
  },
  {
    name: "Shipments",
    path: "/shipments",
    icon: <ProfileOutlined />,
  },
  {
    name: "Top-up",
    path: "/topup",
    icon: <DollarOutlined />,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: <InteractionOutlined />,
  },
  {
    name: "Account",
    path: "/account",
    icon: <UserOutlined />
  },
  {
    name: "Logout",
    path: "/logout",
    icon: <ImportOutlined />
  }
]
