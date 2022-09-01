import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import styled, { css } from 'styled-components'

function Test(props) {
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
              55
            </LDiv>
          </animated.div>
        )
      )
      }
    </Div>
  )
}


const back = css`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
  }
`
const LDiv=styled.div`
  position: absolute;
  left: 50%;
  height: 50%;
  transform: translate(-50%,50%);
  width: 200px;
  height: 300px;
  ${back}
`

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${back};
  p {
    letter-spacing: 50px;
    text-indent: 50px;
    ${back};
    box-shadow: 20px 20px 60px #d5caca,
             -20px -20px 60px #fff;
    font-family: 'Hanalei Fill', cursive;
    position: relative;
    font-size: 120px;
    font-weight: bold;
    color: #000;
    overflow: hidden;
    
    &::before,
    &:after {
      content: "";
      position: absolute;
      top: -923px;
      left: 50%;
      width: 2000px;
      height: 2000px;
      border-radius: 45% 48% 43% 47%;
      transform: translate(-50%, -50%);
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      animation: rotate 10s infinite linear;
      z-index: 1;
      mix-blend-mode: lighten;
    }
    
    &::after {
      border-radius: 43% 47% 44% 48%;
      animation: rotate 10s infinite .5s linear;
    }
}

@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
`

export default Test;