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
`;

const BodyWrapper = styled.div`
  flex: 1;
  display: flex;
  background-color: #f9f9f9;
`;

function Layout(props) {

    const child =
        <p>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            aaaaaaaaaaaaaaaaaaaaaaaaa<br/>
    </p>



    return (
        <LayoutWrapper>
            <Header />
            <Nav />
            <Content>
                {child}
            </Content>
            <Footer />
        </LayoutWrapper>
    );
}

export default Layout;