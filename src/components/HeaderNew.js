import { Menu, Space, Input, Button, Avatar, Dropdown } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  HeartOutlined,
  CommentOutlined,
  ReadOutlined
} from '@ant-design/icons';
import React from 'react';
import logo from '../assets/images/logo.gif'
import show1 from '../assets/images/show1.gif'
const { Search } = Input

function HeaderNew(props) {
  return (
    <Space align='center' size='large'>
      <div className="logo">
        <img src={logo} alt='' height='50px' />
      </div>
      <Menu
        // style={{ width: '600px' }}
        mode="horizontal"
        defaultSelectedKeys={['/news/home']}
        items={items}
      />
      <Search allowClear placeholder='search' enterButton
        style={{ float: 'left', width: '300px' }} />
      <Button>write</Button>
      <Dropdown overlay={menu}>
        <Avatar src={show1} size='large' style={{ background: 'red' }}></Avatar>
      </Dropdown>
    </Space>
  );
}
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', '/news/home', <HomeOutlined />,),
  getItem('articles', '/ff', <ReadOutlined />,),
  getItem('favorites', '/ddg', <HeartOutlined />,),
  getItem('comments', '/jj', <CommentOutlined />,),
  getItem('Mine', '/gg', <UserOutlined />,),
]
const menu=(<Menu
  style={{fontFamily:"'Hanalei Fill', cursive"}}
  items={[
    {
      key:'1',
      label:'mine'
    },
    {
      key:'2',
      label:'out',
      danger:'true'
    },
  ]}
/>)

export default HeaderNew;