import React, {useEffect} from "react";
import styled from "styled-components";
import theme from "../../theme";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.lightGray};
    width: fit-content;
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

   /*  useEffect(() => {
    },[]) */

    console.log(selectedSection)

    const selectSection = (section) => {
        setSection(section)
    }

    return (
        <Wrapper>
             {sections && Object.values(sections).map((section) => {
                return (
                    <MenuItem section={section} isSelected={(section.section === selectedSection.section) ? true : false} setSection={selectSection}/>
                )
            })}
        </Wrapper>
    )
};

export default SideNav;