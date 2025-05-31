import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
    display: flex;
    margin-left: 200px; // Nav 너비 보존
    height: 200px;
    background-color: white;
`;

const SideImage = styled.div`
    width: 150px;    
    background-size: cover;
    background-position: center;
`;

const ContentWrapper = styled.div`
    flex: 1;
    padding: 20px;
`;

function Content() {
    return (
        <LayoutWrapper>
            <SideImage />
            <ContentWrapper>여기는 Content</ContentWrapper>
            <SideImage />
        </LayoutWrapper>
    );
}
export default Content;