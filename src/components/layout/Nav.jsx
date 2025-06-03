import React,{useState} from "react";

import styled from "styled-components";

const NavWrapper = styled.div`
    position: sticky;
    top: 0; /* 스크롤되면 최종적으로 이 위치에 고정됨 */
    background-color: blue;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`
const Menu  = styled.ul`
    display: flex;
    justify-content: center;    
`


function Nav() {




    return (
        <>
            <NavWrapper>
                <Menu>
                    <li>ㅇㅇㅇ</li>
                    <li>ㅇㅇㅇ</li>
                    <li>ㅇㅇㅇ</li>
                </Menu>
            </NavWrapper>
        </>
    );
}

export default Nav;