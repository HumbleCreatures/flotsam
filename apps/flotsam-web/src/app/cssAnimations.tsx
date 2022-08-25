import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations';

export const Breathe = () => {
 return (
  <Container>
   <Circle />
  </Container>
 )
}
const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`
const Circle = styled.div`
 height: 100px;
 width: 100px;
 border-style: solid;
 border-width: 5px;
 border-radius: 50%;
 border-color: #ff0000;
 animation-name: ${breatheAnimation};
 animation-duration: 8s;
 animation-iteration-count: infinite;
`
const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 height: 450px;
`

type WidthCompProps = {
  animate?: boolean
}

export const WidthTransition = styled.div<WidthCompProps>`
  transition: width 2s;
  width: ${props => props.animate ? "200px" : "100px"};
  background-color: #ff0000;
  height: 100px;
`

const bounceAnimation = keyframes`${bounce}`;

export const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
  background-color: #ff0000;
  height: 100px;
  width: 100px;
`;
