import React from "react";
import styled from 'styled-components/macro';
import theme from "../theme";
import Key from "./Key";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const KEYS1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const KEYS2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const KEYS3 = ["Z", "X", "C", "V", "B", "N", "M"];
const ACTIVE_KEYS = new Set(["C", "O", "L", "U", "M", "B", "I", "A"]);

const KeyboardWrapper = styled.div`
  height: fit-content;
  min-height: 60%;
  width: 85%;
  border-radius: 90px;
  background-color: ${theme.colors.darkGray};
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

const Line = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  width: 80%;

  &.icons {
      justify-content: space-between;
  }
`;

const IconWrapper = styled.div`
  width: 25%;
  height: 135px;
  color: ${theme.colors.black};
  font-size: 5rem;
  display: grid;
  place-items: center;
`;

const isActive = (key) => {
    return ACTIVE_KEYS.has(key)
}

const Keyboard = () => {
    return (
        <KeyboardWrapper>
            <Line>
                {KEYS1.map((key) => {
                    return <Key keyVal={key} active={isActive(key)}></Key>
                })}
            </Line>
            <Line>
                {KEYS2.map((key) => {
                    return <Key keyVal={key} active={isActive(key)}></Key>
                })}
            </Line>
            <Line>
                <Key shift></Key>
                {KEYS3.map((key) => {
                    return <Key keyVal={key} active={isActive(key)}></Key>
                })}
                <Key del></Key>
            </Line>
            <Line>
                <Key keyVal="123" num></Key>
                <Key blank></Key>
                <Key keyVal="Return" enter></Key>
            </Line>
            <Line className="icons">
                <IconWrapper>
                    <FontAwesomeIcon icon={faFaceSmile} />
                </IconWrapper>
                <IconWrapper>
                    <FontAwesomeIcon icon={faMicrophone} />
                </IconWrapper>
            </Line>
        </KeyboardWrapper>
    )
}

export default Keyboard
