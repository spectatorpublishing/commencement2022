import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import theme from '../theme';

const BubbleWrapper = styled.div`
    width: fit-content;
    list-style: none;
`;

const Bubble = styled.li`
    font-size: 2.5rem;
    max-width: 450px;

    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 1.5rem;
        max-width: 350px;
        padding: 1rem 1.5rem;

        &.reaction {
            margin-bottom: 0.2rem;
        }

        &.sectionTitle {
            font-size: 2rem;
        }
    }

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 1rem;
        max-width: 250px;
        padding: 0.8rem 1.2rem;

        &.reaction {
            margin-bottom: 0.1rem;
        }

        &.sectionTitle {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 500px) {
        font-size: 0.7rem;
        max-width: 250px;
        padding: 0.8rem 1rem;
    }

    z-index: 1;
    position: relative;
    
    width: fit-content;
    margin-bottom: 15px;
    padding: 1rem 2.5rem;
    word-wrap: break-word;
    border-radius: 50px;
    margin-left: auto;
    color: white;
    background: ${theme.colors.blue};
`

const Icon = styled.div`
    position: relative;
    width: fit-content;
    margin-bottom: -2.2rem;
    z-index: 99;
    margin-left: auto;
    margin-right: -1.9rem;

    svg {
        width: 3.5rem;
    }

    @media (max-width: ${theme.sizes.tablet}) {
        margin-bottom: -1.8rem;
        margin-right: -1.5rem;
        
        svg {
            width: 3rem;
        }
    }

    @media (max-width: ${theme.sizes.mobile}) {
        margin-bottom: -1.5rem;
        margin-right: -1.5rem;
        
        svg {
            width: 2.5rem;
        }
    }
`

const TextBubbleTitle = ({text, status, reaction, className}) => {

    return (
        <BubbleWrapper className={status}>
            {reaction ? <HeartIcon title={true}/> : null}
            <Bubble className={status + " noTail" + (reaction ? " reaction" : "") + " " + className}>{text}</Bubble>
        </BubbleWrapper>
    )
}

export default TextBubbleTitle;

const HeartIcon = ({title}) => {
    return (
        <Icon className="received">
            <svg viewBox="0 0 118 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={title ? "#E9E9EA" : "#4C90F7"} stroke="white" d="M102.002 51.4766C102.002 60.2268 99.7764 68.4573 95.8606 75.6329C100.695 78.123 104.002 83.1636 104.002 88.9766C104.002 97.2608 97.2862 103.977 89.002 103.977C83.189 103.977 78.1484 100.67 75.6583 95.8352C68.4827 99.7511 60.2522 101.977 51.502 101.977C23.6116 101.977 1.00195 79.3669 1.00195 51.4766C1.00195 23.5862 23.6116 0.976562 51.502 0.976562C79.3923 0.976562 102.002 23.5862 102.002 51.4766ZM109.002 114.977C104.584 114.977 101.002 111.395 101.002 106.977C101.002 102.558 104.584 98.9766 109.002 98.9766C113.42 98.9766 117.002 102.558 117.002 106.977C117.002 111.395 113.42 114.977 109.002 114.977Z"/>
            <path fill={title ? "#F85D96" : "white"} fill-rule="evenodd" clip-rule="evenodd" d="M34.206 36.4916C33.2905 37.0496 32.031 38.0166 31.4075 38.6401C30.7835 39.2641 29.8695 40.3906 29.376 41.1441C28.882 41.8976 28.2585 43.4611 27.99 44.6186C27.7215 45.7761 27.502 47.5106 27.502 48.4731C27.502 49.4356 27.717 51.1231 27.98 52.2231C28.2425 53.3231 29.167 55.6181 30.0335 57.3236C31.0685 59.3591 33.1135 61.9376 35.9895 64.8326C38.399 67.2571 41.1575 69.7921 42.12 70.4656C43.0825 71.1391 44.176 71.9876 44.5505 72.3511C44.9245 72.7146 46.3235 73.5661 47.6585 74.2426C48.994 74.9196 50.397 75.4731 50.776 75.4731C51.155 75.4731 52.906 74.5446 54.6675 73.4096C56.429 72.2746 57.9825 71.1946 58.12 71.0106C58.2575 70.8261 59.1575 70.1261 60.12 69.4546C61.0825 68.7836 63.02 67.0871 64.4255 65.6841C65.831 64.2816 68.087 61.4661 69.4385 59.4286C70.79 57.3906 72.2095 54.8231 72.593 53.7231C72.9765 52.6231 73.2805 50.3286 73.268 48.6241C73.256 46.9201 72.939 44.4871 72.5645 43.2176C72.1895 41.9481 71.2005 40.1646 70.366 39.2541C69.532 38.3431 68.0665 37.1206 67.11 36.5376C65.745 35.7056 64.5615 35.4766 61.62 35.4766C58.69 35.4766 57.493 35.7066 56.1465 36.5276C55.1985 37.1056 53.787 38.2591 53.0095 39.0911C52.2325 39.9231 51.3765 40.9686 51.108 41.4136C50.6715 42.1381 50.528 42.1121 49.745 41.1676C49.264 40.5871 48.42 39.5456 47.87 38.8536C47.32 38.1616 46.0825 37.1186 45.12 36.5361C43.75 35.7066 42.5555 35.4766 39.62 35.4766C36.732 35.4766 35.4875 35.7101 34.206 36.4916Z"/>
            </svg>
        </Icon>
    )  
}