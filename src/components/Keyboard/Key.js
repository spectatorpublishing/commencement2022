import React from "react";
import styled from 'styled-components/macro';
import theme from "../../theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faCircleUp } from '@fortawesome/free-solid-svg-icons';

const KeyWrapper = styled.div`
  width: 6.5rem;
  height: 8rem;
  margin: .7rem .3rem;
  border-radius: 25px;
  display: grid;
  place-items: center;
  font-size: 3.5rem;
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
    width: 2.5rem;
    min-width: 1.5rem;
    height: 3.5rem;
    min-height: 2rem;
    border-radius: 8px;
    margin: 0.2rem 0.1rem;
    font-size: 1.2rem;

    &.big {
      width: 3.1rem;
    }
  }

  @media only screen and (max-width: 375px) {
    width: 1.5rem;
    min-width: 1.5rem;
    height: 4rem;
    min-height: 2rem;
    border-radius: 8px;
    margin: 0.2rem 0.1rem;
    font-size: 2rem;

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
