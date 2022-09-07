import React from 'react';
import styles from './Button.module.css';

type ButtonInlineStylingProps = {
    variant?: 'primary' | 'secondary',
    children: JSX.Element | string
};

const ButtonCSSModule: React.FC<ButtonInlineStylingProps> = ({ variant = 'primary', children }) => {
    console.log(styles);
    return <button className={`${styles['baseButton']} ${variant === 'secondary' ? styles['buttonSecondary'] : ''}`}>{children}</button>
}

export default ButtonCSSModule;