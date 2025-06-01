import React,{useState} from "react";

import styled from "styled-components";

const NavWrapper = styled.nav`
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 150px;
    left: 0;
    background-color: blue;
    padding-top: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    transform: ${({ isVisible }) => (isVisible ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 100;
`;

const ToggleButton = styled.button`
    position: fixed;
    top: 170px;
    left: 0;
    width: 220px;
    height: 80px;
    background-color: #0055ff;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 110;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0077ff;
    }
`;

const Emoji = styled.p`
    font-size: 30px;  // 30px에서 더 크게
    margin: 0;        // 문단 기본 마진 제거 권장
`


function Nav() {
    const [isVisible, setIsVisible] = useState(false);



    return (
        <>
            <ToggleButton
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                aria-label="Toggle navigation"
            >
                <p>메인 메뉴</p><Emoji>🤿</Emoji>
            </ToggleButton>
            <NavWrapper
                isVisible={isVisible}
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
                여기는 Nav
            </NavWrapper>
        </>
    );
}

export default Nav;