import React,{useState} from "react";

import styled from "styled-components";

const NavWrapper = styled.nav`
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 170px;
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
    width: 30px;
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

function Nav() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <ToggleButton
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                aria-label="Toggle navigation"
            >
                ☰
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