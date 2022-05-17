import { faMagnifyingGlass, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import styled from "styled-components";
import theme from "../../theme";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.lightGray};
    width: fit-content;
    padding: 2rem 1rem 2rem 2rem;
    border-radius: 70px 0px 0px 70px;
`;

const MenuItemWrap = styled.div`
    display: flex;
    background-color: ${props => props.color};
    color: ${props => props.textColor};
    border-radius: 15px;
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
    margin: 1rem 0rem 1rem 1rem;
`;

const ShortText = styled.div`
    margin: auto;
    color: white;
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 800;
`;

const ContentWrap = styled.div`
    padding: 1.3rem 1rem 1rem 0rem;
    margin-left: 1rem;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.darkGray}
`;

const Name = styled.div`
    margin: auto 1rem auto 0rem;
    font-weight: 600;
    font-size: 1.1rem;
`;

const Time = styled.div`
    margin: auto 0rem auto auto;
    font-size: 1.1rem;
`;

const Text = styled.div`
    font-size: 1.1rem;
    color: ${props => props.textColor};
`;

const MenuItem = ({section, isSelected, setSection}) => {

    const color = isSelected? theme.colors.blue : theme.colors.lightGray;
    const textColor = isSelected? "white" : "black";

    return (
        <MenuItemWrap onClick={() => setSection(section.section)} color={color} textColor={textColor}>
                <ContactPhoto color={section.color}>
                    <ShortText>{section.shortName}</ShortText>
                </ContactPhoto>
                <ContentWrap>
                    <Row>
                        <Name>{section.section}</Name>
                        <Time>{section.time}</Time>
                    </Row>
                    <Text textColor={isSelected? "white" : "#676767"}>{section.message}</Text>
                </ContentWrap>
        </MenuItemWrap>
    )
}

const SideNav = ({sections, selectedSection, setSection}) => {

    const selectSection = (section) => {
        setSection(section)
    }

    return (
        <Wrapper>
            <Buttons>
                <SmallCircle color="#F86058"/>
                <SmallCircle color="#F9BD2E"/>
                <SmallCircle color="#28C940"/>
            </Buttons>
            <SearchWrapper>
                <SearchBar>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <SearchText>Search</SearchText>
                </SearchBar>
                <CreateIcon>
                    <FontAwesomeIcon icon={faPenToSquare}/>
                </CreateIcon>
            </SearchWrapper>
             {sections && Object.values(sections).map((section) => {
                return (
                    <MenuItem section={section} isSelected={(section.section === selectedSection.section) ? true : false} setSection={selectSection}/>
                )
            })}
        </Wrapper>
    )
};

export default SideNav;

const Buttons = styled.div`
    display: flex;
`;

const SmallCircle = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: ${props => props.color};
    border-radius: 50%;
    display: inline-block;
    margin: auto 0.2rem;
`;

const SearchWrapper = styled.div`
    display: flex;
    margin: 1rem 0rem;
`;

const SearchBar = styled.div`
    display: flex;
    width: 80%;
    color: #B5B5B5;
    background-color: #DEDEE0;
    padding: 0.5rem;
    border-radius: 8px;

    svg {
        margin: auto 0.5rem;
    }
`;

const SearchText = styled.div`
    margin: auto 0.5rem auto 0rem;
`;

const CreateIcon = styled.div`
    padding: 0.2rem 1rem;
    background-color: white;
    margin-left: 1rem;
    border-radius: 8px;
    display: flex;

    svg {
        font-size: 1.2rem;
        color: #B0B0B0;
        margin: auto auto;
    }
`;