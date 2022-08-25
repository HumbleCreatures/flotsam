import { useState } from 'react';
import styled from 'styled-components';
import { BouncyDiv, Breathe, WidthTransition } from './cssAnimations';
import { Parent } from './parent';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [appState, setAppState] = useState({ animate: false });

  return (
    <StyledApp>
      <Parent></Parent>
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
    </StyledApp>
  );
}

export default App;
