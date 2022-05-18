import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryThreeQuarters, faChevronRight, faSignal, faWifi } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components/macro";
import theme from "../../theme";

const HeaderWrapper = styled.div`
    width: 100%;
    background-color: ${theme.colors.lightGray};
    display: flex;
    flex-direction: column;
    border-radius: 50px 50px 0px 0px;

    @media (max-width: 500px) {
        border-radius: 30px 30px 0px 0px;
    }
`;

const StatusBar = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;

    @media (max-width: 500px) {
        margin-top: 1rem;
    }
`;

const Time = styled.div`
    margin: auto auto auto 2rem;
    width: fit-content;

    font-size: 1.3rem;

    @media (max-width: 500px) {
        margin: auto auto auto 1rem;
        font-size: 1rem;
    }
`;

const Icons = styled.div`
    margin: auto 2rem auto auto;
    width: fit-content;
    display: flex;

    svg {
        margin: auto 0.4rem;
        font-size: 1.2rem;
    }

    img {
        margin: auto 0.3rem;
        height: 2rem;
    }

    @media (max-width: 500px) {
        margin: auto 1rem auto auto;

        svg {
            margin: auto 0.4rem;
            font-size: 1rem;
        }
    
        img {
            margin: auto 0.3rem;
            height: 1.8rem;
        }
    }
`;

const CenterLogo = styled.div`
    margin: 1rem auto 2rem auto;

    svg {
        font-size: 1rem;
        margin: auto 0.3rem;
    }

    @media (max-width: 500px) {
        margin: 0rem auto 2rem auto;
    }
`;

const ColumbiaText = styled.div`
    width: fit-content;
    margin: auto;
    line-height: 1.5rem;
    font-size: 1.5rem;


    @media (max-width: 500px) {
        font-size: 1.3rem;
        line-height: 1.3rem;
    }
`;

const FacetimeIcon = styled.div`
    margin: auto 2rem auto 1rem;
    width: 3rem;
    postion: relative;
    top: 0;
    right: 0;

    img {
        margin: auto 0rem;
        width: 100%;
    }
`;

const Row = styled.div`
    display: flex;
`;

const ContactPhoto = styled.div`
    display: flex;
    background-color: ${props => props.color};
    max-width: 4.5rem;
    min-width: 4.5rem;
    max-height: 4.5rem;
    min-height: 4.5rem;
    border-radius: 100px;
    margin: 1rem auto 1rem auto;
`;

const ShortText = styled.div`
    margin: auto;
    color: white;
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 800;
`;

const TextConvoHeader = ({section}) => {
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
                    <ContactPhoto color={section.color}>
                        <ShortText>{section.shortName}</ShortText>
                    </ContactPhoto>
                   <Row><ColumbiaText>{section.section}</ColumbiaText><FontAwesomeIcon icon={faChevronRight}/></Row> 
                </CenterLogo>
                {/* <FacetimeIcon>
                     <img src="https://commencement2022.s3.amazonaws.com/icons8-video-call-100.png"/>
                </FacetimeIcon> */}
            </Row>
        </HeaderWrapper>
    )
}

export default TextConvoHeader;