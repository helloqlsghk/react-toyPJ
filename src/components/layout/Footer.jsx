import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    width: 100%;
    height: 150px;
    background-color: grey;
    padding-top: 20px;
    color: white;
    text-align: center;
`

function Footer(){
    return(
        <FooterWrapper>여기는 Footer</FooterWrapper>
    );
}

export default Footer;