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
  padding-bottom: 10rem;
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
    height: fit-content;
    padding: 0 10%;
    background-color: ${theme.colors.white};
    font-family: "Lato";
`;

const Email = () => {
    return (
        <EmailWrapper>
            <EmailHeader></EmailHeader>
            <EmailBody></EmailBody>
        </EmailWrapper>
    )
}

const HeaderWrapper = styled.div`
    margin: 2.5rem 0 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    //background-color: pink;
    font-size: 2rem;
    border-bottom: 1px solid ${theme.colors.gray};
`;

const ObjectLine = styled.div`
    display: flex;
    flex-direction: row;
`;

const Object = styled.h2`
`;

const EmailHeader = () => {
    return (
        <HeaderWrapper>
            <h3>Columbia Spectator</h3>
            <ObjectLine>
                <Object style={{color:theme.colors.black}}>To:</Object>
                <Object style={{color:theme.colors.gray}}>Class of 2022</Object>
            </ObjectLine>
        </HeaderWrapper>
    )
}

const BodyWrapper = styled.div`
    margin: 2.5rem 0 2rem;
    display: flex;
    flex-direction: column;
    //background-color: pink;
    font-size: 2rem;
`;

const EmailBody = () => {
    return (
        <BodyWrapper>
            <h1>Columbia University Commencement 2022</h1>
            <p>Dear readers,</p>
            <p>More than ever, this year’s Homecoming truly feels like coming home. Many of us spent last year away from Morningside Heights, creating a Columbia community from the confines of our bedrooms. While not back in full swing, after 18 months we are back to campus, back to the Baker Athletics Complex, and most importantly, back to being a unified community. </p>
            <p>At Spectator, we have used our year of remote learning to reevaluate what it means to be a Columbia student and a member of the greater Morningside Heights and West Harlem communities. Despite being back on campus, many students from all class years still struggle with feeling fully ingrained at Columbia. Homecoming weekend serves as a time to come together and to help find your community whether you are a first-year, senior, or even an alum.</p>
            <p>Whether you are the biggest Columbia Lions fan out there, or have never stepped foot near a football stadium, we hope this edition shows you that Homecoming is more than just watching the Light Blue play against Penn. It’s about looking back at memories at the University, but also looking forward.</p>
            <p>We invite you to take a look back on the stories that have shaped Homecoming this year, prepare for Saturday afternoon’s game, and reflect on the last 250 years of education and community. </p>
            <p>Sarah Braka, <br></br>
            Editor in Chief, President <br></br>
            Lizzie Karpen, <br></br>
            Managing Editor, Vice President</p>
        </BodyWrapper>
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