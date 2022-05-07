import React from "react";
import styled from 'styled-components/macro';
import theme from "../theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faCircleUp } from '@fortawesome/free-solid-svg-icons';

const KeyWrapper = styled.div`
  width: 5.5rem;
  height: 7rem;
  margin: .7rem .3rem;
  border-radius: 25px;
  display: grid;
  place-items: center;
  font-size: 3rem;
  font-weight: 400;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Lato';

  &.active {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }

  &.gray {
    background-color: ${theme.colors.keyGray};
  }

  &.fill {
      width: 50%;
  }

  &.wide {
      width: 25%;
  }

  @media only screen and (max-width: 768px) {
    width: 1.9rem;
    height: 3rem;
    margin: 0.15rem;
    font-size: 0.75rem;

    &.big {
      width: 3.1rem;
    }
  }
`

const Key = ({ keyVal, active, shift, del, blank, num, enter }) => {
    return (
        <KeyWrapper
            className={active ? "active" : del ? "gray" : blank ? "fill" : (num || enter) ? "gray wide" : null}
        >
            {shift ? <FontAwesomeIcon icon={faCircleUp} />
            : del ? <FontAwesomeIcon icon={faDeleteLeft}/>
            : null}
            {keyVal}
        </KeyWrapper>
    )
}

export default Key
