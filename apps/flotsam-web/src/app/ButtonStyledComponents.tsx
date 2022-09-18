import React from 'react';
import styled, { css } from 'styled-components';
import theme from './theme';

type ButtonStyledComponentsProps = {
    variant?: 'primary' | 'secondary',
    children: JSX.Element | string
};

const baseButton = css`
    border: none;
    border-radius: 3px;
    padding: 12px;
    color: white;

    &:hover {
        text-decoration: underline;
    }
`

const StyledButton = styled.button<ButtonStyledComponentsProps>`
    ${baseButton}
    background-color: ${props => props.variant === "primary" ? theme.colors.blue : "darkgray" };
    ${ props => props.variant === "primary" ? "text-transform: uppercase;" : ""}
`

const ButtonStyledComponents: React.FC<ButtonStyledComponentsProps> = ({ variant = 'primary', children }) => {
    return <StyledButton variant={variant}>{children}</StyledButton>
}

export default ButtonStyledComponents;