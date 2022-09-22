import { useState } from 'react';
import styled from 'styled-components';
import { BouncyDiv, Breathe, WidthTransition } from './cssAnimations';
import { MyForm } from './form';
import { Parent } from './parent';
import './App.css';
import ButtonInlineStyling from './ButtonInlineStyling';
import ButtonCSSModule from './ButtonCSSModule';
import ButtonStyledComponents from './ButtonStyledComponents';
import Counter from './Counter';
import CatFact from './CatFact';
import LoginForm from './LoginForm';

const StyledApp = styled.div`
  // Your style here
`;

const myButtonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  fontSize: '20px'
};

export function App() {
  const [appState, setAppState] = useState({ animate: false });


  return (
    <StyledApp>
      {/* <MyForm></MyForm> */}
      <LoginForm />
    </StyledApp>
  );
}

export default App;


/*
      <div>
        Breath:
        <Breathe></Breathe>
        Transiotion:
        <div>
          <button onClick={() => {setAppState({animate: !appState.animate}) }}>Animate</button>
          <WidthTransition animate={appState.animate}></WidthTransition>
        </div>
        Bounce:
        <div>
          <BouncyDiv></BouncyDiv>
        </div>
      </div>
*/
