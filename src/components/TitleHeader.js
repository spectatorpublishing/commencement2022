import React from "react";
import styled from "styled-components";
import TextBubble from "./TextBubble";
import theme from "../theme";

const HeaderWrapper = styled.div`
    width: 100vw;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
`;

const ItemsWrapper = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    margin: 0rem auto;
`;

const LeftTitle = styled.div`
    margin: auto 1rem;
    padding-bottom: 1.7rem;
    width: fit-content;
`;

const RightTitle = styled.div`
    margin: auto 1rem auto 0rem;
    width: fit-content;
`;

const CenterLogo = styled.div`
    margin: 2rem 7rem;
    font-size: 2rem;
`;

const Logo = styled.div`
    display: flex;
    border-radius: 80px;
    background-color: ${theme.colors.lightBlue};
    width: 9rem;
    height: 9rem;
    margin: 0rem auto;

    img {
        width: 70%;
        margin: auto auto auto auto;
    }
`;

const ColumbiaText = styled.div`
    width: fit-content;
    margin: 0.5rem auto;
`;

const TitleImage = styled.div`
    height: 80vh;
    width: 100%;
    background-color: grey;

`;

const TitleHeader = () => {
    return (
        <HeaderWrapper>
            <ItemsWrapper>
                <LeftTitle>
                    <TextBubble status="sent" reaction="heartTitle" isLast={false} isTitle={true} text="Class of 2022"/>
                </LeftTitle>
                <CenterLogo>
                    <Logo>
                        <img src="https://commencement2022.s3.amazonaws.com/Columbia_Lions_logo.png"/>
                    </Logo>
                    <ColumbiaText>Columbia</ColumbiaText>
                </CenterLogo>
                <RightTitle>
                <TextBubble status="sent" isLast={false} isTitle={true} text="Commencement"/>
                </RightTitle>
            </ItemsWrapper>
            <TitleImage>

            </TitleImage>
        </HeaderWrapper>
    )
}

export default TitleHeader;