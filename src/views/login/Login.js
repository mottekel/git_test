import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated, useTransition, } from 'react-spring';
import { Div } from './Login_sty'

function Login(props) {
  const [toggle, set] = useState(true)
  const [show, setshow] = useState(true)
  const navigate = useNavigate()
  //过渡
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    config: { duration: 1000 }
  })
  const Logintran = useTransition(show, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    config: { duration: 1000 }
  })
  //状态改变
  const handlerVis = (e) => set(!toggle)

  //登录
  const handlerLogin = () => {
    setshow(!show)
    setTimeout(() => {
      navigate('/news')
    }, 1000);
  }

  return (
    Logintran((styles, item) => item && <animated.div style={{...styles,height:'100%'}}>
      <Div onClick={handlerVis}>
        {
          transitions(({ opacity }, item) =>
            item ? (
              <animated.div
                style={{
                  margin: 'auto',
                  opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                }}>
                <p onClick={(e) => e.stopPropagation()}>LOVE</p>
              </animated.div>
            ) : (
              <animated.div
                style={{
                  opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                }} onClick={(e) => e.stopPropagation()}>
                <div className='ldiv'>
                  <div className='tit'>
                    🤗
                  </div>
                  <div className='inp'>
                    <Input placeholder='Name' allowClear style={{ marginBottom: '40px' }}></Input>
                    <Input.Password placeholder='Password' allowClear style={{ marginBottom: '40px' }}></Input.Password>
                    <Button onClick={handlerLogin}>LOGIN</Button>
                  </div>
                </div>
              </animated.div>
            )
          )
        }
      </Div>
    </animated.div>)
  )
}

export default Login;