import React from 'react';
import styled from 'styled-components'
import Not from '../../assets/images/404.gif'

function NotFound(props) {
  return (
    <Div style={{background:`url(${Not}) no-repeat  center`}}>
      {/* <img src={Not} height='100%' alt=''/> */}
    </Div>
  );
}

const Div=styled.div`
 width: 100%;
 height: 100%;
 min-width: 520px;
`
export default NotFound;