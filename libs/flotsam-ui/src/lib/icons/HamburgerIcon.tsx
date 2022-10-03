import { typeOf } from 'react-is';
import styled from 'styled-components';

type HambugerIconType = {
    size?: number;
    color?: string;
    hoverColor?: string;
}

type StyledIconType = {
    hoverColor: string;
}

const StyledIcon = styled.svg<StyledIconType>`
    &:hover {
        fill: ${props => props.hoverColor };
    }
`;
export const HamburgerIcon = ({ size = 512, color = "black", hoverColor = color}: HambugerIconType) => (
    <StyledIcon xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} fill={color} hoverColor={hoverColor}>
        <rect y="4" width="24" height="2" rx="1" />
        <rect y="11" width="24" height="2" rx="1" />
        <rect y="18" width="24" height="2" rx="1" />
    </StyledIcon>
)
