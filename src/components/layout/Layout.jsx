import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Content from "./Content";



const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media (max-width: 768px) {
        padding: 0 16px;
    }
`;

const BodyWrapper = styled.div`
  flex: 1;
  display: flex;
  background-color: #f9f9f9;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 16px 0;
    }
`;

function Layout(props) {


    return (
        <LayoutWrapper>
            <Header />
            <Nav />
            <Content>

            </Content>
            <Footer />
        </LayoutWrapper>
    );
}

export default Layout;