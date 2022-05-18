import { faMagnifyingGlass, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import styled from "styled-components";
import theme from "../../theme";

const Wrapper = styled.div`
    display: flex;
    width: 85%;
    margin: 3rem auto 2rem auto;

    @media (min-width: ${theme.sizes.tablet}) {
        display: none;
    }
`;

const BubbleWrapper = styled.div`
    width: fit-content;
    list-style: none;
    margin: auto auto;
`;

const Bubble = styled.li`
    font-size: 2.5rem;
    width: 450px;
    text-align: center;

    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 1.5rem;
        width: 200px;
        padding: 1rem 1.5rem;
    }

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 1rem;
        max-width: 150px;
        padding: 0.8rem 1.2rem;
    }

    @media (max-width: 500px) {
        font-size: 0.8rem;
        max-width: 100px;
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
    color: ${props => props.textColor};
    background: ${props => props.color};
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const MenuItem = ({section, isSelected, setSection}) => {

    const color = isSelected? theme.colors.blue : theme.colors.lightGray;
    const textColor = isSelected? "white" : "black";

    return (
        <BubbleWrapper onClick={() => setSection(section.section)} color={color} textColor={textColor}>
            <Bubble color={color} textColor={textColor}>{section.section}</Bubble>
        </BubbleWrapper>
    )
}

const TopNav = ({sections, selectedSection, setSection}) => {

    const selectSection = (section) => {
        setSection(section)
    }

    return (
        <Wrapper>
            <Column>
             {sections && Object.values(sections).slice(0,3).map((section) => {
                return (
                    <MenuItem section={section} isSelected={(section.section === selectedSection.section) ? true : false} setSection={selectSection}/>
                )
            })}
            </Column>
            <Column>
             {sections && Object.values(sections).slice(3,6).map((section) => {
                return (
                    <MenuItem section={section} isSelected={(section.section === selectedSection.section) ? true : false} setSection={selectSection}/>
                )
            })}
            </Column>
        </Wrapper>
    )
};

export default TopNav;