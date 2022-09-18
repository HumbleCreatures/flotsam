import React from 'react';

type ButtonInlineStylingProps = {
    variant?: 'primary' | 'secondary',
    children: JSX.Element | string
};

const buttonBaseStyle = {
    border: "none",
    borderRadius: "3px",
    padding: "12px",
    color: "white",
    backgroundColor: 'blue'
}


const ButtonInlineStyling: React.FC<ButtonInlineStylingProps> = ({ variant = 'primary', children }) => {
    const buttonStyle = { ...buttonBaseStyle, backgroundColor: variant === "primary" ? "blue" : "darkgrey" };
    return <button style={buttonStyle}>{children}</button>
}

export default ButtonInlineStyling;