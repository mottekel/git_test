import styled, { css } from 'styled-components'

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

const Div = styled.div`
font-family: 'Hanalei Fill', cursive;
width: 100%;
height: 100%;
display: flex;
${back};
p {
  height: 300px !important;
  padding-top: 50px;
  letter-spacing: 50px;
  text-indent: 50px;
  ${back};
  box-shadow: 20px 20px 60px #d5caca,
           -20px -20px 60px #fff;
  /* position: relative; */
  position: absolute;
  left: 50%;
  height: 50%;
  transform: translate(-50%,-50%);
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
.ldiv{
  position: absolute;
  left: 50%;
  height: 50%;
  transform: translate(-50%,50%);
  width: 500px;
  height: 300px;
  ${back};
  box-shadow: 20px 20px 60px #d5caca,
            -20px -20px 60px #fff;
  border-radius:20px;
  font-family: 'Gochi Hand', cursive;
  .tit{
    letter-spacing: 10px;
    padding-top: 24px;
    font-size: 26px;
    font-family:'Hanalei Fill', cursive;
    text-align: center;
    margin-bottom: 30px;
  }
  .inp{
    width: 250px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    Button{
      letter-spacing: 5px;
      font-size: 12px;
      font-family:'Hanalei Fill', cursive;
    }
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
export {Div}