import React from "react";
import styled from "styled-components";


const HeaderWrapper = styled.header`
    height: 150px;    
    padding-top:20px;
    background-color: lightskyblue;    
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin-top: 50px;
    font-size: 40px;
`


function Header(){
  return(
      <HeaderWrapper>
            <Title>다이빙샵</Title>
          {/*<MenuContainer>              */}
          {/*      <Menu>Nav</Menu>*/}
          {/*      <Menu>menu1</Menu>*/}
          {/*      <Menu>menu2</Menu>*/}
          {/*</MenuContainer>*/}
      </HeaderWrapper>
  );
}

export default Header;

