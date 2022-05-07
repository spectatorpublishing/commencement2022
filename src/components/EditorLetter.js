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
  background-color: ${theme.colors.lightGray};
  align-self: center;
  margin: 4rem;
  padding: 2.5rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${theme.sizes.mobile}) {
      width: 93%;
      border-radius: 15px;
      margin: 1rem;
      padding: 0;
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
    margin: 0 0 0 .5rem;
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
`;

const BodyWrapper = styled.div`
    margin: 2.5rem 0 2rem;
    display: flex;
    flex-direction: column;
    font-size: 2rem;

    @media (max-width: ${theme.sizes.mobile}) {
        margin: 0;
        padding-bottom: 1rem;
    }
`;

const IconWrapper = styled.div`
    align-self: flex-end;
    justify-self: center;
    font-size: 2.5rem;
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
                    <h2 style={{color:theme.colors.black}}>To:</h2>
                    <h2>Class of 2022</h2>
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
            <TopBar></TopBar>
            <EmailWrapper>
                <EmailHeader></EmailHeader>
                <EmailBody></EmailBody>
            </EmailWrapper>
            <BottomBar></BottomBar>
        </LetterWrapper>
    )
}

export default EditorLetter