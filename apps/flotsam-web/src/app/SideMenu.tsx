import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { HamburgerIcon } from '@flotsam/flotsam-ui';
import { CSSTransition } from 'react-transition-group';

const IconWrapper = styled.button`
    position: absolute;
    z-index: 2;
    margin: 10px;
    border: 0;
    background-color: inherit;
`;

const MenuWrapper = styled.ul`
    position: absolute;
    height: 100%;
    width: 200px;
    background-color: red;
    color: white;
    margin-top: 0;
    list-style-type: none;
    padding: 50px 0 0 0;
    top: 0;

    &.my-node-enter {
        margin-left: -200px;
    }
    &.my-node-enter-active {
        margin-left: 0px;
        transition: margin-left 1000ms;
    }
    &.my-node-exit {
        margin-left: 0px;
    }
    &.my-node-exit-active {
        margin-left: -200px;
        transition: margin-left 1000ms;
    }   
`

const MenuItem = styled.li`
    &:hover {
        background-color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
    }
    padding: 15px;

`

const SideMenu = () => {

    const [showMenu, setShowMenu] = useState(false);
    const nodeRef = useRef(null);

    return <>
        <IconWrapper onClick={() => setShowMenu(!showMenu)} title={showMenu ? "Stäng meny" : "Öppna meny"}>
            <HamburgerIcon size={35} isCross={showMenu} color={showMenu ? "white" : "black"} />
        </IconWrapper>
        <CSSTransition nodeRef={nodeRef} in={showMenu} timeout={1000} classNames="my-node" unmountOnExit>
            <MenuWrapper ref={nodeRef}>
                <MenuItem>Hem</MenuItem>
                <MenuItem>Om oss</MenuItem>
                <MenuItem>Hitta hit</MenuItem>
                <MenuItem>Vårt erbjudande</MenuItem>
                <MenuItem>Kontakt</MenuItem>
            </MenuWrapper>
        </CSSTransition>
    </>
}

export default SideMenu;