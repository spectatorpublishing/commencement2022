import React from "react";
import styled from "styled-components";
import TextBubbleTitle from "./TextBubbleTitle";
import theme from "../theme";

const HeaderWrapper = styled.div`
    width: 100vw;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
`;

const ItemsWrapper = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    margin: 1rem auto;

    @media (max-width: 360px) {
        flex-direction: column;
    }
`;

const LeftTitle = styled.div`
    margin: auto 1rem;
    padding-bottom: 1.7rem;
    width: fit-content;

    @media (max-width: 360px) {
        margin: auto;
        padding-bottom: 0.7rem;
    }
`;

const RightTitle = styled.div`
    margin: auto 1rem auto 0rem;
    width: fit-content;

    @media (max-width: 360px) {
        padding-top: 0.5rem;
        margin-bottom: 2rem;
        margin: auto;
    }
`;

const CenterLogo = styled.div`
    margin: 2rem 7rem;
    font-size: 2rem;

    @media (max-width: ${theme.sizes.tablet}) {
        margin: 2rem 2rem;
        font-size: 1.5rem;
    }

    @media (max-width: 500px) {
        margin: 1rem 1rem;
        font-size: 1rem;
    }

    @media (max-width: 360px) {
        margin: auto;
    }
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
        margin: auto;
    }

    @media (max-width: ${theme.sizes.tablet}) {
        width: 6rem;
        height: 6rem;

        img {
            width: 65%;
        }
    }

    @media (max-width: ${theme.sizes.mobile}) {
        width: 4.5rem;
        height: 4.5rem;
    }

    @media (max-width: 400px) {
        width: 3.5rem;
        height: 3.5rem;
    }
    
`;

const ColumbiaText = styled.div`
    width: fit-content;
    margin: 0.5rem auto;
`;

const TitleImage = styled.div`
    height: 100vh;
    width: 100%;
    background-color: grey;
    overflow: hidden;
    text-align: center;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom center;
        //transform: scale(1.2);
    }

    @media (max-width: ${theme.sizes.tablet}) {
        height: 40rem;
    }

    @media (max-width: ${theme.sizes.mobile}) {
        height: 20rem;
    }
`;

const TitleText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Georgia;
    font-size: 6rem;
    color: white;
    width: 100%;
    text-shadow: 1px 1px black;

    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 4rem;    
    }

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 3rem;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
`;

const TitleHeader = () => {
    return (
        <HeaderWrapper>
            <ItemsWrapper>
                <LeftTitle>
                    <TextBubbleTitle status="sent" reaction="heartTitle" isLast={false} isTitle={true} text="Class of 2022"/>
                </LeftTitle>
                <CenterLogo>
                    <Logo>
                        <img src="https://commencement2022.s3.amazonaws.com/Columbia_Lions_logo.png"/>
                    </Logo>
                    <ColumbiaText>Columbia</ColumbiaText>
                </CenterLogo>
                <RightTitle>
                <TextBubbleTitle status="sent" isLast={false} isTitle={true} text="Commencement"/>
                </RightTitle>
            </ItemsWrapper>
            <TitleImage>
                <img src="https://commencement2022.s3.amazonaws.com/IMG_3562.png"/>
                <TitleText>Commencement 2022</TitleText>
            </TitleImage>
        </HeaderWrapper>
    )
}

export default TitleHeader;