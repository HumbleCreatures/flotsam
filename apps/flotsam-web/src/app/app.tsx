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
import AssignmentTest from './AssignmentTest';
import { HamburgerIcon } from '@flotsam/flotsam-ui';
import SideMenu from './SideMenu';
import { BoatList } from './BoatList';

const StyledApp = styled.div`
  // Your style here
  height: 100%;
`;

const myButtonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  fontSize: '20px'
};

export function App() {
  const [appState, setAppState] = useState({ animate: false });
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible)

  return (
    <StyledApp>
      {/* <MyForm></MyForm> */}
      {/* <LoginForm /> */}
      {/* <Counter />
      <CatFact /> */}
      {/* <AssignmentTest/> */}
      {/* <HamburgerIcon size={24} color="red" hoverColor="blue" /> */}
      {/* <SideMenu show={menuVisible} />
      <MenuButton show={menuVisible} onClick={toggleMenu} /> */}
      <SideMenu />

      <div style={{margin: '100px'}}><BoatList /></div>
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
