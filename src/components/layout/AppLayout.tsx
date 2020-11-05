import React, { FC, ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import classes from './AppLayout.module.css'
import { menus } from 'constants/sider'

const { Header, Sider, Content } = Layout

interface Props {
  children: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(true)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const getCurrentPageName = () => {
    const currentMenu = menus.find((menu) => menu.path === location.pathname)
    return currentMenu && currentMenu.name
  }

  const isAuthPage = () => {
    return location.pathname === '/login' || location.pathname === '/register'
  }

  return (
    <Layout>
      {!isAuthPage() && (
        <Sider className={classes.sider} theme="light" trigger={null} collapsible collapsed={collapsed}>
          <div className={classes.logo} />
          <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
            {menus.map((menu, index) => (
              <Menu.Item key={menu.path} icon={menu.icon}>
                <Link id={`link-${index}`} to={menu.path}>
                  {menu.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      )}
      <Layout className={classes['site-layout']}>
        {!isAuthPage() && (
          <Header className="content-blue" style={{ padding: 0 }}>
            <MenuOutlined className={classes.trigger} onClick={toggle} />
            <span className={classes['header-title']}>{getCurrentPageName()}</span>
          </Header>
        )}
        <Content
          className={classes['site-layout-background']}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
