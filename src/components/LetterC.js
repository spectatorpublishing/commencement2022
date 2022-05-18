import React from "react";
import styled from "styled-components";

const ImageWrap = styled.div`
    width: 30%;
    height: 100vh;
    margin: 0rem auto;
    display: flex;

    img {
        width: 100%;
        margin: auto;
    }
`;

const LetterC = () => {
    return (
        <ImageWrap>
            <img src="https://commencement2022.s3.amazonaws.com/columbiac.png"/>
        </ImageWrap>
    )
}

export default LetterC;