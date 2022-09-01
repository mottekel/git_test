import React, { useState } from 'react';
import styled from 'styled-components'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

function getItem(key, icon, label, children, type) {
  return {
    key, icon, label, children, type,
  };
}

function SideMenu(props) {
  const rootSubmenuKeys = ['/home', '/right-manage', '/user-manage'];
  const navigate =useNavigate()

  const [openKeys, setOpenKeys] = useState(['/home']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <Div className="logo">全球新闻发布系统</Div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={({key})=>navigate(key)}
        defaultSelectedKeys={['/right-manage/role/list']}
        items={[
          getItem('/home',<UserOutlined />, '首页'),
          getItem('/right-manage', <VideoCameraOutlined />, '权限管理', [
            getItem('/right-manage/role/list', <UserOutlined />, '首页'),
            getItem('/right-manage/right/list', <UserOutlined />, '首页'),
          ]),
          getItem('/user-manage', <UploadOutlined />, '用户管理', [
            getItem('/user-manage/list', <UserOutlined />, '首页'),
          ]),
        ]}
      />
    </Sider>
  );
}

const Div = styled.div`
  line-height: 32px;
  color: #fff;
  background-color: rgba(255,255,255,0.3);
  font-size: 18px;
  margin: 10px;
  text-align: center;
`

export default SideMenu;