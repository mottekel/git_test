import React from 'react';
import MyLayout from './NewsSanBox_sty';
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'
import { Layout } from 'antd';
const { Content } = Layout;

function NewsSanBox(props) {
  return (
    <MyLayout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: '24px',
          }}>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </MyLayout>
  );
}

export default NewsSanBox;