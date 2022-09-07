import { Menu, Space, Input, Avatar, Dropdown } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  HeartOutlined,
  CommentOutlined,
  SendOutlined,
  ReadOutlined
} from '@ant-design/icons';
import React from 'react';
import logo from '../assets/images/logo.gif'
import show1 from '../assets/images/show1.gif'
import { useLocation, useNavigate } from 'react-router-dom';
const { Search } = Input

function HeaderNew(props) {
  // const [select, setselect] = useState(['/news/home'])
  const navigate = useNavigate()
  const location = useLocation()
  const menu = (<Menu
    onClick={({ key }) => { navigate(key) }}
    style={{ fontFamily: "'Hanalei Fill', cursive" }}
    items={[
      {
        key: '/',
        label: 'mine'
      },
      {
        key: '/login',
        label: 'out',
        danger: 'true'
      },
    ]}
  />)

  return (
    <Space align='center' size='large'>
      <div className="logo">
        <img src={logo} alt='' height='50px' />
      </div>
      <Menu
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={['/news/home']}
        onClick={({ key }) => {
          navigate(key);
        }}
        style={{ width: "850px" }}
        mode="horizontal"
        items={items}
      />
      <Search allowClear placeholder='search' enterButton
        style={{ float: 'left', width: '300px' }} />
      <Dropdown overlay={menu}>
        <Avatar src={show1} size='large' style={{ background: 'red', marginLeft: '30px' }}></Avatar>
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
  getItem('articles', '/news/articles', <ReadOutlined />,),
  getItem('favorites', '/news/favorites', <HeartOutlined />,),
  getItem('comments', '/news/comments', <CommentOutlined />,),
  getItem('write', '/news/write', <CommentOutlined />,),
  getItem('journey', '/news/journey', <SendOutlined />,),
  getItem('Mine', '/news/mine', <UserOutlined />,),
]

export default HeaderNew;