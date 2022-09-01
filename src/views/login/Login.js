import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { animated, useTransition, } from 'react-spring';
import {Div,LDiv} from './Login_sty'

function Login(props) {
  const [toggle, set] = useState(true)
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    config:{duration:1000}
  })

  const handlerVis = (e) => set(!toggle)
  return (
    <Div onClick={handlerVis}>
      {
        transitions(({ opacity }, item) =>
        item ? (
          <animated.div
            style={{
              margin: 'auto',
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            }}>
              <p onClick={(e)=>e.stopPropagation()}>LOVE</p>
          </animated.div>
        ) : (
          <animated.div
            style={{
              opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
            }} onClick={(e)=>e.stopPropagation()}>
            <LDiv>
              <div className='tit'>
              🤗
              </div>
              <div className='inp'>
               <Input placeholder='Name' allowClear style={{marginBottom:'40px'}}></Input>
               <Input.Password placeholder='Password' allowClear style={{marginBottom:'40px'}}></Input.Password>
               <Button>LOGIN</Button>
              </div>
            </LDiv>
          </animated.div>
        )
      )
      }
    </Div>
  )
}

export default Login;