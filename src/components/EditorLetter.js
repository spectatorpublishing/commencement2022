import React, { useContext } from "react";
import styled from 'styled-components/macro';
import theme from "../theme";

const LetterWrapper = styled.div`
  height: fit-content;
  min-height: 60%;
  width: 85%;
  border-radius: 90px;
  background-color: ${theme.colors.lightGray};
  align-self: center;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Arrow = (props) => {
    return (
        <>
            <svg width="35" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {props.left ?
                <path d="M15.535 3.515L7.05005 12L15.535 20.485L16.95 19.071L9.87805 12L16.95 4.929L15.535 3.515Z" fill={theme.colors.blue}></path>
                : props.down ?
                <path d="M3.51489 8.465L11.9999 16.95L20.4849 8.465L19.0709 7.05L11.9999 14.122L4.92889 7.05L3.51489 8.465Z" fill={theme.colors.blue}></path>
                : props.up ?
                <path d="M20.4851 15.535L12.0001 7.05L3.51511 15.535L4.92911 16.95L12.0001 9.878L19.0711 16.95L20.4851 15.535Z" fill={theme.colors.blue}></path>
                : null }
            </svg>
        </>
    )
}

const BarWrapper = styled.div`
    height: fit-content;
    width: 88%;
    //background-color: pink;
`;

const Row = styled.div`
    height: fit-content;
    margin: 2.5rem .5rem .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;


const Text = styled.p`
    margin-left: .5rem;
    font-family: "Lato";
    font-weight: 400;
    font-size: 2rem;
    color: ${theme.colors.blue};
`;

const LeftSide = styled.div`
    width: 8rem;
    //background-color: green;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const TopBar = () => {
    return (
        <BarWrapper>
            <Row>
                <Arrow left></Arrow>
                <Text>Sent</Text>
                <LeftSide>
                    <Arrow up></Arrow>
                    <Arrow down></Arrow>
                </LeftSide>
            </Row>
        </BarWrapper>
    )
}

const EmailWrapper = styled.div`
    width: 80%;
    height: 80%;
    padding: 0 10%;
    background-color: ${theme.colors.white};
    font-family: "Lato";
`;

const Email = () => {
    return (
        <EmailWrapper>
            <EmailHeader></EmailHeader>
        </EmailWrapper>
    )
}

const HeaderWrapper = styled.div`
    margin: 2.5rem 0 2rem;
    display: flex;
    flex-direction: column;
    //background-color: pink;
    font-size: 2rem;
    border-bottom: 1px solid ${theme.colors.gray};
`;

const Subject = styled.div`
    font-weight: 700;
    margin-bottom: .5rem;
`;

const ObjectLine = styled.div`
    display: flex;
    flex-direction: row;
`;

const Object = styled.div`
    font-weight: 400;
    margin-bottom: 2rem;
`;

const EmailHeader = () => {
    return (
        <HeaderWrapper>
            <Subject>Columbia Spectator</Subject>
            <ObjectLine>
                <Object style={{color:theme.colors.black}}>To:</Object>
                <Object style={{color:theme.colors.gray}}>Class of 2022</Object>
            </ObjectLine>
        </HeaderWrapper>
    )
}

const EditorLetter = () => {
    return (
        <LetterWrapper>
            <TopBar></TopBar>
            <Email></Email>
        </LetterWrapper>
    )
}

export default EditorLetter