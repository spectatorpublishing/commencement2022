import React, {useState} from "react";
import styled from 'styled-components/macro';
import theme from "../../theme";
import Keyboard from "../Keyboard/Keyboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import TextConvoHeader from "./TextConvoHeader";
import Articles from "./Articles";
import TopNav from "./TopNav";

const TextConvoWrapper = styled.div`
  display: none;

  @media (max-width: ${theme.sizes.tablet}) {
    width: 93%;
    border-radius: 40px;
    margin: 1rem auto;
    height: fit-content;
    min-height: 60%;
    background-color: ${theme.colors.lightGray};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${theme.sizes.mobile}) {
    border-radius: 20px;
}
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;

const TextsWrapper = styled.div``;

const TypingBar = styled.div`
    width: 100%;
    height: 7rem;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    font-size: 2rem;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.sizes.mobile}) {
        height: 2rem;
        padding: .2rem 0;
    }
`;

const IconWrapper = styled.div`
  width: 12%;
  height: 100%;
  color: ${theme.colors.gray};
  font-size: 5.5rem;
  display: grid;
  place-items: center;

  @media (max-width: ${theme.sizes.mobile}) {
      height: 35px;
      font-size: 1.5rem;
  }
`;

const TypingBubble = styled.div`
    width: 60%;
    height: 6rem;
    border-radius: 90px;
    border: 1px solid ${theme.colors.keyGray};
    padding-left: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 4rem;
    margin-left: 1rem;

    @media (max-width: ${theme.sizes.mobile}) {
        width: 60%;
        height: 1.8rem;
        font-size: 1.3rem;
        padding-left: .8rem;
    }
`;

const TypingText = styled.div`
    padding-right: .4rem;
    border-right: 3px solid ${theme.colors.blue};

    @media (max-width: ${theme.sizes.mobile}) {
        padding-right: .2rem;
        border-right: 2px solid ${theme.colors.blue};
    }
`;

const SendBubble = styled.div`
    height: 5.2rem;
    width: 5.2rem;
    border-radius: 90px;
    background-color: ${theme.colors.blue};
    margin-right: .6rem;
    text-align: center;
    color: ${theme.colors.white};

    @media (max-width: ${theme.sizes.mobile}) {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: .2rem;
    }
`;

const KeyboardImage = styled.div`
    width: 100%;
    height: fit-content;
    margin: 0rem auto;
    display: flex;

    img {
        width: 100%;
        margin: auto;
    }
`;

const ArticlesWrapper = styled.div`
    
`;

const sections = {
    "Arts & Entertainment": {
        section: "Arts & Entertainment",
        color: theme.colors.yellow,
        shortName: "A&E"
    },
    "News": {
        section: "News",
        color: theme.colors.pink,
        shortName: "N"
    },
    "Opinion": {
        section: "Opinion",
        color: theme.colors.green,
        shortName: "O"
    },
    "Sports": {
        section: "Sports",
        color: theme.colors.alternateBlue,
        shortName: "S"
    },
    "Spectrum": {
        section: "Spectrum",
        color: theme.colors.red,
        shortName: "S"
    },
    "Miscellaneous": {
        section: "Miscellaneous",
        color: theme.colors.darkGray,
        shortName: "M"
    },
}

const TextConvo = () => {
    const [section, setSection] = useState(sections["Arts & Entertainment"]);

    const selectSection = (name) => {
        setSection(sections[name])
    }

    return (
        <ArticlesWrapper>
            <TopNav sections={sections} selectedSection={section} setSection={selectSection}/>
        <TextConvoWrapper>
            <HeaderWrapper>
                <TextConvoHeader section={section}/>
            </HeaderWrapper>
            <TextsWrapper></TextsWrapper>
            <Articles selectedSection={section}/>
            {/* <TypingBar>
                <IconWrapper>
                    <FontAwesomeIcon icon={faCamera} ></FontAwesomeIcon>
                </IconWrapper>
                <IconWrapper>
                    <FontAwesomeIcon icon={faAppStoreIos} ></FontAwesomeIcon>
                </IconWrapper>
                <TypingBubble>
                    <TypingText>Columbia</TypingText>
                    <SendBubble>
                        <FontAwesomeIcon icon={faArrowUp} ></FontAwesomeIcon>
                    </SendBubble>
                </TypingBubble>
            </TypingBar>
            <Keyboard /> */}
            <KeyboardImage>
                <img src="https://commencement2022.s3.amazonaws.com/fullkeyboard.png"/>
            </KeyboardImage>
        </TextConvoWrapper>
        </ArticlesWrapper>
    )
}

export default TextConvo
