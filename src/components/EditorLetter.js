import React from "react";
import styled from 'styled-components/macro';
import theme from "../theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown, faAngleUp, faPaperclip, faBoxArchive, faFolder, faReply, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const LetterWrapper = styled.div`
  height: fit-content;
  min-height: 60%;
  width: 85%;
  border-radius: 90px;
  background-color: ${theme.colors.white};
  align-self: center;
  margin: 4rem 4rem 0rem 4rem;
  padding: 2.5rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${theme.sizes.tablet}) {
    width: 93%;
    margin: 4rem auto 4rem 0rem auto;
    border-radius: 40px;
  }

  @media (max-width: ${theme.sizes.mobile}) {
      border-radius: 20px;
      margin: 2rem auto 0rem auto;
      padding: 2.5rem 0;
  }
`;

const BarWrapper = styled.div`
    height: fit-content;
    width: 88%;

    @media (max-width: ${theme.sizes.mobile}) {
        height: fit-content;
        width: 100%;
    }
`;

const Row = styled.div`
    height: fit-content;
    margin: 2.5rem .5rem .5rem;
    display: flex;
    flex-direction: row;
    padding-bottom: 2rem;
    align-items: flex-end;

    &.icons {
        width: 100%;
        justify-content: space-around;
        padding-bottom: 1rem;
    }

    @media (max-width: ${theme.sizes.mobile}) {
        height: 2rem;
        margin: 0;
        padding: 2rem .8rem 1rem;

        &.icons {
            padding: 1rem .8rem 1.5rem;
        }
    }
`;

const Text = styled.p`
    margin: auto 0 auto .5rem;
    font-family: "Lato";
    font-weight: 400;
    font-size: 2rem;
    color: ${theme.colors.blue};

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 1.2rem;
        margin: 0 0 0 0.3rem;
    }
`;

const LeftSide = styled.div`
    width: 8rem;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: ${theme.sizes.mobile}) {
        width: 4rem;
    }
`;

const EmailWrapper = styled.div`
    width: 80%;
    height: fit-content;
    padding: 0 10%;
    background-color: ${theme.colors.white};
    font-family: "Lato";

    @media (max-width: ${theme.sizes.mobile}) {
        width: 85%;
        padding: 0 7.5%;
    }
`;

const HeaderWrapper = styled.div`
    margin: 2.5rem 0 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    font-size: 2rem;
    border-bottom: 1px solid ${theme.colors.gray};

    @media (max-width: ${theme.sizes.mobile}) {
        margin: 1rem 0 .5rem;
        padding-bottom: .6rem;
        font-size: 1.3rem;
    }
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    &.one {
        width: 100px;
        height: 100px;
        min-width: fit-content;
        min-height: fit-content;
        border-radius: 50px;
        background-color: ${theme.colors.gray};

        @media (max-width: ${theme.sizes.mobile}) {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            padding: 0;
            margin: 0;
        }
    }

    &.two {
        width: 50%;
        align-items: flex-start;
        padding: .5rem 0 0 2rem;

        @media (max-width: ${theme.sizes.mobile}) {
            width: 65%;
            padding: 0rem 0 0 .8rem;
            
        }
    }

    &.three {
        margin-left: auto;
        padding: .5rem 0 0;

        @media (max-width: ${theme.sizes.mobile}) {
            padding: 0;
        }
    }
`;

const CDSLogo = styled.div`
    height: fit-content;
    width: fit-content;
    margin: auto 0.5rem auto 0.5rem;
    img {
        width: auto;
        height: 4rem;
    }

    @media (max-width: ${theme.sizes.mobile}) {
        img {
            width: auto;
            height: 1.5rem;
        }
    }
`;

const ObjectLine = styled.div`
    display: flex;
    flex-direction: row;

    h2 {
        margin-right: 0.4rem;
    }
`;

const BodyWrapper = styled.div`
    margin: 2.5rem 0 2rem;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    line-height: 2rem;

    @media (max-width: ${theme.sizes.mobile}) {
        margin: 0;
    }
`;

const IconWrapper = styled.div`
    align-self: flex-end;
    justify-self: center;
    font-size: 2.7rem;
    color: ${theme.colors.blue};

    &.attach {
        text-align: end;
        font-size: 2rem;
        color: ${theme.colors.gray};
    }

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 1rem;

        &.attach {
            font-size: .9rem;
            margin-top: .2rem;
        }
    }
`;

const TopBar = () => {
    return (
        <BarWrapper>
            <Row>
                <IconWrapper>
                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                </IconWrapper>
                <Text>Sent</Text>
                <LeftSide>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                    </IconWrapper>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
                    </IconWrapper>
                </LeftSide>
            </Row>
        </BarWrapper>
    )
}

const EmailHeader = () => {
    return (
        <HeaderWrapper>
            <Col className="one">
                <CDSLogo><img src="https://doordle.s3.amazonaws.com/whitecrown.png" alt="Columbia Daily Spectator white crown logo"/></CDSLogo>
            </Col>
            <Col className="two">
                <h3>Columbia Spectator</h3>
                <ObjectLine>
                    <h2 style={{color:theme.colors.black}}>To: </h2>
                    <h2> Class of 2022</h2>
                </ObjectLine>
            </Col>
            <Col className="three">
                <h2>5/18/22</h2>
                <IconWrapper className="attach">
                    <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
                </IconWrapper>
            </Col>
        </HeaderWrapper>
    )
}

const EmailBody = () => {
    return (
        <BodyWrapper>
            <h1>Columbia University Commencement 2022</h1>
            <p>Dear readers,</p>
            <p>In reflection and celebration of the first in-person Commencement week since 2019, Spectator spoke with seniors from across the University, highlighting the stories of Columbia’s graduating artists, athletes, activists, and more. In this year’s Commencement edition, find articles on Columbia’s largest cohort of formerly incarcerated students to graduate, senior columns from graduating members of Spectator, and profiles on athletes who changed the game for their respective teams.</p>
            <p>During this historic moment for Columbia’s students, Spectator sends its deepest congratulations to the classes of 2020, 2021, and 2022—whether you are returning to campus for the first time since 2020 to walk the stage or you’ve spent the past two months soaking up the last of your sun-filled days on Low Beach as an undergraduate, we hope you can find reflections of your Columbia experience in this edition.</p>
            <p>Clara Ence Morse,<br></br>
            Editor in Chief<br></br>
            Dia Gill, <br></br>
            Managing Editor</p>
        </BodyWrapper>
    )
}

const BottomBar = () => {
    return (
        <Row className="icons">
            <IconWrapper>
                <FontAwesomeIcon icon={faBoxArchive}></FontAwesomeIcon>
            </IconWrapper>
            <IconWrapper>
                <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
            </IconWrapper>
            <IconWrapper>
                <FontAwesomeIcon icon={faReply}></FontAwesomeIcon>
            </IconWrapper>
            <IconWrapper>
                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
            </IconWrapper>
        </Row>
    )
}

const EditorLetter = () => {
    return (
        <LetterWrapper>
            {/* <TopBar></TopBar> */}
            <EmailWrapper>
                {/* <EmailHeader></EmailHeader> */}
                <EmailBody></EmailBody>
            </EmailWrapper>
            {/* <BottomBar></BottomBar> */}
        </LetterWrapper>
    )
}

export default EditorLetter