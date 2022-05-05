import React, { useContext } from "react";
import styled, { ThemeConsumer } from 'styled-components/macro';
import theme from "../theme";

const LetterWrapper = styled.div`
  height: fit-content;
  min-height: 60%;
  width: 85%;
  border-radius: 90px;
  background-color: ${theme.colors.lightGray};
  align-self: center;
  margin-top: 4rem;
  padding: 2.5rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = (props) => {
    return (
        <>
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {props.left ?
                <path
                    d="M15.535 3.515L7.05005 12L15.535 20.485L16.95 19.071L9.87805 12L16.95 4.929L15.535 3.515Z"
                    fill={theme.colors.blue}>
                </path>
                : props.down ?
                <path
                    d="M3.51489 8.465L11.9999 16.95L20.4849 8.465L19.0709 7.05L11.9999 14.122L4.92889 7.05L3.51489 8.465Z"
                    fill={theme.colors.blue}>
                </path>
                : props.up ?
                <path
                    d="M20.4851 15.535L12.0001 7.05L3.51511 15.535L4.92911 16.95L12.0001 9.878L19.0711 16.95L20.4851 15.535Z"
                    fill={theme.colors.blue}>
                </path>
                : props.read ?
                <path
                    d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM5 10V19H19V10H5ZM5 5V8H19V5H5Z"
                    fill={theme.colors.blue}>
                </path>
                : props.archive ?
                <path
                    d="M20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H10C10.2652 3 10.5195 3.10545 10.707 3.293L12.414 5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21ZM4 7V19H20V7H4Z"
                    fill={theme.colors.blue}>
                </path>
                : props.reply ?
                <path
                    d="M6 4H8V6.55709C9.19001 5.622 10.6906 5.0643 12.3214 5.0643C16.1874 5.0643 19.3214 8.19831 19.3214 12.0643C19.3214 15.9303 16.1874 19.0643 12.3214 19.0643C10.171 19.0643 8.24696 18.0946 6.96289 16.5685L8.58221 15.3837C9.49811 16.4147 10.8339 17.0643 12.3214 17.0643C15.0829 17.0643 17.3214 14.8257 17.3214 12.0643C17.3214 9.30288 15.0829 7.0643 12.3214 7.0643C11.2346 7.0643 10.2288 7.41107 9.4085 8L12 8V10H6V4Z"
                    fill={theme.colors.blue}>
                </path>
                : props.new ?
                <path
                    d="M14.0002 22H4.00019C3.46427 22.0186 2.94467 21.8139 2.56548 21.4347C2.1863 21.0555 1.98157 20.5359 2.00019 20V10C1.98157 9.46408 2.1863 8.94448 2.56548 8.5653C2.94467 8.18611 3.46427 7.98138 4.00019 8.00001H8.00019V4.00001C7.98157 3.46408 8.1863 2.94448 8.56548 2.5653C8.94467 2.18611 9.46427 1.98138 10.0002 2.00001H20.0002C20.5361 1.98138 21.0557 2.18611 21.4349 2.5653C21.8141 2.94448 22.0188 3.46408 22.0002 4.00001V14C22.0185 14.5358 21.8137 15.0553 21.4346 15.4344C21.0555 15.8135 20.536 16.0183 20.0002 16H16.0002V20C16.0185 20.5358 15.8137 21.0553 15.4346 21.4344C15.0555 21.8135 14.536 22.0183 14.0002 22ZM4.00019 10V20H14.0002V16H10.0002C9.46435 16.0183 8.94493 15.8135 8.56581 15.4344C8.18669 15.0553 7.98187 14.5358 8.00019 14V10H4.00019ZM10.0002 4.00001V14H20.0002V4.00001H10.0002Z"
                    fill={theme.colors.blue}>
                </path>
                : null }
            </svg>
        </>
        
    )
}

const AttachWrapper = styled.div`
    align-self: flex-end;
`;

const Attach = () => {
    return (
        <AttachWrapper>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.46492 20.535C6.44276 20.535 4.6197 19.3169 3.84572 17.4487C3.07175 15.5805 3.49925 13.4301 4.92892 12L7.05092 9.87799L8.46492 11.292L6.34392 13.413C5.58598 14.1709 5.28997 15.2756 5.5674 16.311C5.84482 17.3464 6.65354 18.1551 7.6889 18.4325C8.72426 18.7099 9.82898 18.4139 10.5869 17.656L12.7079 15.535L14.1219 16.95L12.0009 19.071C11.065 20.0115 9.79178 20.5387 8.46492 20.535ZM9.17192 16.242L7.75792 14.828L14.8289 7.75699L16.2429 9.17099L9.17292 16.241L9.17192 16.242ZM16.9509 14.121L15.5359 12.707L17.6569 10.586C18.4252 9.83032 18.7291 8.72065 18.4532 7.67897C18.1772 6.63729 17.3637 5.82364 16.3221 5.54743C15.2805 5.27123 14.1708 5.57491 13.4149 6.34299L11.2929 8.46399L9.87892 7.04999L12.0009 4.92799C13.956 2.98996 17.1099 2.99686 19.0565 4.94344C21.0031 6.89002 21.01 10.0439 19.0719 11.999L16.9509 14.12V14.121Z"
                    fill={theme.colors.gray}>
                </path>
            </svg>
        </AttachWrapper>
    )
}

const BarWrapper = styled.div`
    height: fit-content;
    width: 88%;
`;

const Row = styled.div`
    height: fit-content;
    margin: 2.5rem .5rem .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 2rem;

    &.icons {
        width: 100%;
        justify-content: space-around;
    }
`;


const Text = styled.p`
    margin: 0 0 0 .5rem;
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
                <Icon left></Icon>
                <Text>Sent</Text>
                <LeftSide>
                    <Icon up></Icon>
                    <Icon down></Icon>
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
    flex-direction: row;
    //background-color: pink;
    font-size: 2rem;
    border-bottom: 1px solid ${theme.colors.gray};
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
    }

    &.two {
        width: 50%;
        align-items: flex-start;
        padding: .5rem 0 0 2rem;
    }

    &.three {
        margin-left: auto;
        padding: .5rem 0 0;
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
            height: 1.4rem;
        }
    }
`;

const ObjectLine = styled.div`
    display: flex;
    flex-direction: row;
`;

const EmailHeader = () => {
    return (
        <HeaderWrapper>
            <Col className="one">
                <CDSLogo><img src="https://doordle.s3.amazonaws.com/whitecrown.png"/></CDSLogo>
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
                <Attach></Attach>
            </Col>
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

const BottomBar = () => {
    return (
        <Row className="icons">
            <Icon read></Icon>
            <Icon archive></Icon>
            <Icon reply></Icon>
            <Icon new></Icon>
        </Row>
    )
}

const EditorLetter = () => {
    return (
        <LetterWrapper>
            <TopBar></TopBar>
            <Email></Email>
            <BottomBar></BottomBar>
        </LetterWrapper>
    )
}

export default EditorLetter