import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Layout } from 'antd';
const { Header } = Layout;

function TopHeader(props) {
  const [collapsed, setcollapsed] = useState(false)
  const changeCollapsed = () => [
    setcollapsed(!collapsed)
  ]

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
    </Header>
  );
}

export default TopHeader;