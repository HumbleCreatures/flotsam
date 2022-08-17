import styled from 'styled-components';
import { Parent } from './parent';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Parent></Parent>
    </StyledApp>
  );
}

export default App;
