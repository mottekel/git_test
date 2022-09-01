import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Dropdown, Layout, Menu } from 'antd';
const { Header } = Layout;

function TopHeader(props) {
  const [collapsed, setcollapsed] = useState(false)
  const changeCollapsed = () => {
    setcollapsed(!collapsed)
  }
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <span>超级管理员</span>
          ),
        },
        {
          key: '2',
          danger: true,
          label: '退出',
        },
      ]}
    />
  );

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: '0 16px',
      }}
    >
      <div className='trigger'>
        {
          collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} />
            : <MenuFoldOutlined onClick={changeCollapsed} />
        }
      </div>
      <div style={{ float: 'right' }}>
        <span>欢迎回来admin</span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
}

export default TopHeader;