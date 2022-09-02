import styled from "styled-components"
import {Layout } from 'antd';

const MyLayout = styled(Layout)`
font-family:'Hanalei Fill', cursive;
Header{
  position: fixed;
  z-index: 1;
  width: 100%;
  background: #fff;
}
.logo {
float: left;
width: 50px;
height: 50px;
}
.site-layout .site-layout-background {
  background: #fff;
}
.site-layout{
  padding: 0 20px;
  margin-top:80px;
}
.site-layout-background{
  padding: 24px;
  min-height:500px;
}
.footer{
  text-align: center;
}
`
export default MyLayout