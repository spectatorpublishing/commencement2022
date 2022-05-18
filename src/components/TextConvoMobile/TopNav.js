import { faMagnifyingGlass, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import styled from "styled-components/macro";
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
    height: 3.5rem;

    display: flex;

    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 1.5rem;
        width: 200px;
        padding: 0.8rem 1.5rem;
    }

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 1rem;
        max-width: 180px;
        padding: 0.8rem 1.2rem;
        height: 2.5rem;
    }

    @media (max-width: 500px) {
        font-size: 1rem;
        max-width: 110px;
        padding: 0.8rem 1rem;
    }

    z-index: 1;
    position: relative;
    
    width: fit-content;
    padding: 1rem 2.5rem;
    word-wrap: break-word;
    border-radius: 50px;
    color: ${props => props.textColor};
    background: ${props => props.color};

    margin: 0.3rem 0rem;
`

const BubbleText = styled.div`
    margin: auto;
    height: fit-content;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;


    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const MenuItem = ({section, isSelected, setSection}) => {

    const color = isSelected? theme.colors.blue : theme.colors.lightGray;
    const textColor = isSelected? "white" : "black";

    return (
        <BubbleWrapper onClick={() => setSection(section.section)} color={color} textColor={textColor}>
            <Bubble color={color} textColor={textColor}><BubbleText>{section.section}</BubbleText></Bubble>
        </BubbleWrapper>
    )
}

const TopNav = ({sections, selectedSection, setSection}) => {

    const selectSection = (section) => {
        setSection(section)
    }

    return (
        <Wrapper>
            {/* <Column>
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
            </Column> */}
            <Column>
             {sections && Object.values(sections).map((section) => {
                return (
                    <MenuItem section={section} isSelected={(section.section === selectedSection.section) ? true : false} setSection={selectSection}/>
                )
            })}
            </Column>
        </Wrapper>
    )
};

export default TopNav;