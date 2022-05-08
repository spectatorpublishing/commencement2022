import React from "react";
import styled from 'styled-components/macro';
import theme from "../theme";
import Keyboard from "./Keyboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

const TextConvoWrapper = styled.div`
  height: fit-content;
  min-height: 60%;
  width: 85%;
  border-radius: 90px;
  background-color: ${theme.colors.lightGray};
  align-self: center;
  margin: 4rem;
  padding: 5rem 0 0;
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

const HeaderWrapper = styled.div``;

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
`;

const IconWrapper = styled.div`
  width: 15%;
  height: 100%;
  color: ${theme.colors.gray};
  font-size: 5rem;
  display: grid;
  place-items: center;

  @media (max-width: ${theme.sizes.mobile}) {
      height: 35px;
      font-size: 1rem;
  }
`;

const TypingBubble = styled.div`
    width: 50%;
    height: 6rem;
    border-radius: 90px;
    border: 1px solid ${theme.colors.keyGray};
    padding-left: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 4rem;
`;

const SendBubble = styled.div`
    height: 5.2rem;
    width: 5.2rem;
    border-radius: 90px;
    background-color: ${theme.colors.blue};
    margin-right: .6rem;
    text-align: center;
    color: ${theme.colors.white};
`;

const TextConvo = () => {
    return (
        <TextConvoWrapper>
            <HeaderWrapper></HeaderWrapper>
            <TextsWrapper></TextsWrapper>
            <TypingBar>
                <IconWrapper>
                    <FontAwesomeIcon icon={faCamera} ></FontAwesomeIcon>
                </IconWrapper>
                <IconWrapper>
                    <FontAwesomeIcon icon={faAppStoreIos} ></FontAwesomeIcon>
                </IconWrapper>
                <TypingBubble>
                    <div>Columbia</div>
                    <SendBubble>
                        <FontAwesomeIcon icon={faArrowUp} ></FontAwesomeIcon>
                    </SendBubble>
                </TypingBubble>
            </TypingBar>
            <Keyboard />
        </TextConvoWrapper>
    )
}

export default TextConvo
