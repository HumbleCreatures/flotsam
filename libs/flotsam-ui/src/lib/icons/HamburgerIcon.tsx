import { typeOf } from 'react-is';
import styled from 'styled-components';

type HambugerIconType = {
    size?: number;
    color?: string;
    hoverColor?: string;
    isCross?: boolean;
}

type StyledIconType = {
    hoverColor: string;
    isCross?: boolean;
}

const StyledIcon = styled.svg<StyledIconType>`
    &:hover {
        fill: ${props => props.hoverColor};
    }

    &>rect {
        transition: transform 500ms;
    }

    ${props => props.isCross && `
        &>rect:nth-child(1) {
            transform: rotate(45deg);
            y: 1;
            x: 5;
        }

        &>rect:nth-child(2) {
            transform: rotate(-45deg);
            x: -14;
            y: 16;
        }

        &>rect:nth-child(3) {
            display: none;
        }
    `}
`;
export const HamburgerIcon = ({ size = 512, color = "black", hoverColor = color, isCross = false }: HambugerIconType) => (
    <StyledIcon xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} fill={color} hoverColor={hoverColor} isCross={isCross}>
        <rect y="4" width="24" height="2" rx="1" />
        <rect y="11" width="24" height="2" rx="1" />
        <rect y="18" width="24" height="2" rx="1" />
    </StyledIcon>
)
