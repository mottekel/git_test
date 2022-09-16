import styled from "styled-components"
import { Layout } from 'antd';

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
margin-right: 30px;
margin-left: 30px;
}
.site-layout .site-layout-background {
  background: #fff;
}
.site-layout{
  padding: 0 20px;
  margin-top:80px;
  min-width: 1200px;
}
.site-layout-background{
  padding: 24px;
  /* height: 90%; */
  min-height:88%;
}
.footer{
  text-align: center;
}
.ant-layout-header {
  min-width: 1200px;
}
.header{
  z-index: 2;
}
`
export default MyLayout