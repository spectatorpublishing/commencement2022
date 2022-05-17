import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryThreeQuarters, faChevronRight, faSignal, faWifi } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const HeaderWrapper = styled.div`
    width: 100%;
    background-color: ${theme.colors.lightGray};
    display: flex;
    flex-direction: column;
`;

const StatusBar = styled.div`
    display: flex;
    flex-direction: row;
`;

const Time = styled.div`
    margin: auto auto auto 2rem;
    width: fit-content;

    font-size: 2rem;
`;

const Icons = styled.div`
    margin: auto 2rem auto auto;
    width: fit-content;
    display: flex;

    svg {
        margin: auto 0.4rem;
        font-size: 2rem;
    }

    img {
        margin: auto 0.3rem;
        height: 3.5rem;
    }
`;

const CenterLogo = styled.div`
    margin: 2rem auto;
    padding-left: 9rem;
    font-size: 2rem;

    svg {
        margin: auto 0.5rem;
        font-size: 1rem;
    }
`;

const Logo = styled.div`
    display: flex;
    border-radius: 80px;
    background-color: ${theme.colors.lightBlue};
    width: 9rem;
    height: 9rem;
    margin: 0rem auto;

    img {
        width: 70%;
        margin: auto auto auto auto;
    }
`;

const ColumbiaText = styled.div`
    width: fit-content;
    margin: 0.5rem auto;
    line-height: 2rem;
`;

const FacetimeIcon = styled.div`
    display: flex;
    margin: auto 5rem auto 1rem;
    width: 4.5rem;

    img {
        margin: auto 0rem;
        width: 100%;
    }
`;

const Row = styled.div`
    display: flex;
`;

const TextConvoHeader = () => {
    return (
        <HeaderWrapper>
            <StatusBar>
                <Time>12:00</Time>
                <Icons>
                    <FontAwesomeIcon icon={faSignal}/>
                    <FontAwesomeIcon icon={faWifi}/>
                    <img src="https://commencement2022.s3.amazonaws.com/icons8-battery-level-90.png"/>
                </Icons>

            </StatusBar>
            <Row>
                <CenterLogo>
                    <Logo>
                        <img src="https://commencement2022.s3.amazonaws.com/Columbia_Lions_logo.png"/>
                    </Logo>
                   <Row><ColumbiaText>Columbia</ColumbiaText><FontAwesomeIcon icon={faChevronRight}/></Row> 
                </CenterLogo>
                <FacetimeIcon>
                     <img src="https://commencement2022.s3.amazonaws.com/icons8-video-call-100.png"/>
                </FacetimeIcon>
            </Row>
            
        </HeaderWrapper>
    )
}

export default TextConvoHeader;