import React from 'react';
import MyLayout from './News_sty';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderNew from '../../components/HeaderNew';
const { Header, Content, Footer } = Layout;

function News(props) {
  return (
    <MyLayout>
      <Header className='header'>
        <HeaderNew></HeaderNew>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background">
          <Outlet></Outlet>
        </div>
        <Footer className='footer'>A I T ©2022 Created by Mottekel </Footer>
      </Content>
    </MyLayout>
  );
}

export default News;