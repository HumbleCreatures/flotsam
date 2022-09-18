import styled from 'styled-components';
import React from 'react';

const StyledLayout = styled.div`
    display: grid;
    
    gap: 20px;
    grid-template-areas:
        "header"
        "nav"
        "content"
        "sidebar"
        "ad"
        "footer";
    @media (min-width: 500px) {
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-areas:
            "header header  header"
            "nav    content sidebar"
            "nav    content ad"
            "footer footer  footer";
    }
`;
type LayoutProps = { children?: React.ReactNode }
const Layout = ({ children }: LayoutProps) => <StyledLayout>{children}</StyledLayout>

const StyledHeader = styled.div`
    grid-area: header;
`
Layout.Header = StyledHeader;

const StyledContent = styled.div`
    grid-area: content;
`
Layout.Content = StyledContent;

const StyledMainNav = styled.nav`
    grid-area: nav;
    display: flex;
    flex-direction: row;
`
Layout.MainNav = StyledMainNav;

const StyledSide = styled.div`
    grid-area: sidebar;
`
Layout.Side = StyledSide;

const StyledAd = styled.div`
    grid-area: ad;
`
Layout.Ad = StyledAd;

const StyledMainFooter = styled.div`
    grid-area: footer;
`
Layout.MainFooter = StyledMainFooter;


export default Layout;