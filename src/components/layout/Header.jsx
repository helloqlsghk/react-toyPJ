import React from "react";
import styled from "styled-components";


const HeaderWrapper = styled.header`
    height: 150px;    
    padding-top:20px;
    background-color: lightskyblue;    
`

// const MenuContainer = styled.ul`
//     display: flex;
//     justify-content: center;
//     list-style: none;
//     padding: 0;
//     margin-top: 10px;
// `;
//
// const Menu = styled.li`
//     margin: 0 15px;
//     font-weight: bold;
// `;



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
            <Title>펄다이브 다이빙샵</Title>
          {/*<MenuContainer>              */}
          {/*      <Menu>Nav</Menu>*/}
          {/*      <Menu>menu1</Menu>*/}
          {/*      <Menu>menu2</Menu>*/}
          {/*</MenuContainer>*/}
      </HeaderWrapper>
  );
}

export default Header;

