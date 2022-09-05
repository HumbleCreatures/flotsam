import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FlotsamUiProps {}

const StyledFlotsamUi = styled.div`
  color: pink;
`;

export function FlotsamUi(props: FlotsamUiProps) {
  return (
    <StyledFlotsamUi>
      <h1>Welcome to FlotsamUi!</h1>
    </StyledFlotsamUi>
  );
}

export default FlotsamUi;
