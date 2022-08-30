import styled from 'styled-components'
import { Layout } from "antd"

const MyLayout = styled(Layout)`
.site-layout .site-layout-background {
  background: #fff;
}
.trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
    background: red;
  }
} 
`
export default MyLayout