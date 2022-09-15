import { useState } from 'react';
import styled from 'styled-components';
import { BouncyDiv, Breathe, WidthTransition } from './cssAnimations';
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
      <LoginForm />
      {/* <CatFact /> */}
      {/* <Counter /> */}
      {/* <Parent></Parent> */}
      {/* <button style={myButtonStyle}>Klicka här</button>
      <ButtonInlineStyling>Inlined styled button (Primary)</ButtonInlineStyling>
      <ButtonInlineStyling variant='secondary'>Inlined styled button (Secondary)</ButtonInlineStyling>
      <br/>
      <ButtonCSSModule>Button using CSS module (Primary)</ButtonCSSModule>
      <ButtonCSSModule variant="secondary">Button using CSS module (Secondary)</ButtonCSSModule>
      <br/>
      <ButtonStyledComponents>Button using Styled components (Primary)</ButtonStyledComponents>
      <ButtonStyledComponents variant="secondary">Button using Styled components (Secondary)</ButtonStyledComponents> */}

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
