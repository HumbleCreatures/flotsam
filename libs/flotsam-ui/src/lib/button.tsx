import React from 'react';
import styled, { css } from 'styled-components';
import "typeface-roboto-slab";

type ButtonProps = {
    variant?: 'primary' | 'secondary',
    children: JSX.Element | string
};

const baseButton = css`
    border: none;
    border-radius: 3px;
    padding: 12px;
    color: white;
    font-family: Roboto Slab;

    &:hover {
        text-decoration: underline;
    }
`

const StyledButton = styled.button<ButtonProps>`
    ${baseButton}
    background-color: ${props => props.variant === "primary" ? "blue" : "darkgray" };
    ${ props => props.variant === "primary" ? "text-transform: uppercase;" : ""}
`

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }) => {
    return <StyledButton variant={variant}>{children}</StyledButton>
}