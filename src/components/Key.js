import React from "react";
import styled from 'styled-components/macro';
import theme from "../theme";

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

  &.big {
    width: 4.5rem;
  }

  &.active {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
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

const Shift = () => {
    return (
        <></>
    )
}

const Del = () => {
    return (
        <></>
    )
}

const Key = ({ keyVal, active, shift, del }) => {
    return (
        <KeyWrapper
            className={active ? "active" : null}
        >
            {shift ? <Shift></Shift>
            : del ? <Del></Del>
            : null}
            {keyVal}
        </KeyWrapper>
    )
}

export default Key
