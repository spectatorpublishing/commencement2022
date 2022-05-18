import React from "react";
import styled from 'styled-components/macro';
import theme from "../theme";
import staff from "../data/staff";

const CreditsWrapper = styled.div`
  min-height: 60%;
  width: 85%;
  border-radius: 90px;
  background-color: ${theme.colors.lightGray};
  align-self: center;
  margin: 4rem;
  padding: 4rem;
  display: flex;
  flex-direction: row;

  @media (max-width: ${theme.sizes.tablet}) {
    flex-direction: column;
    width: 93%;
    border-radius: 40px;
    margin: 1rem auto;
    padding: 2rem 0;
  }

  @media (max-width: ${theme.sizes.mobile}) {
    border-radius: 20px;
}
`;

const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    text-align: left;

    @media (max-width: ${theme.sizes.tablet}) {
        margin: auto;
        width: fit-content;
        display: none
    }

`;

const ColumnMobile = styled.div`
    display: none;

    @media (max-width: ${theme.sizes.tablet}) {
        display: flex;
        flex-direction: column;
        text-align: left;
        
        margin: auto;
        width: fit-content;
    }

`;

const SubDiv = styled.div`
    padding-bottom: 3rem;

    h2 {
        color: ${theme.colors.black};
        font-size: 1.6rem;
        margin-bottom: .8rem;
    }

    p {
        font-size: 1rem;
        margin: .6rem 0;
        text-align: left;
    }

    @media only screen and (max-width: 750px) {
        padding-bottom: 2rem;
    }
`;

const NameLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

// const panel1 = ["Corporate Board", "Design and Development", "Cover Illustration By", "Illustration", "The Eye", "Sports"]
// const panel2 = ["University News", "City News", "Copy"]
// const panel3 = ["Photo", "Opinion", "Spectrum", "Arts and Entertainment"]
const panel1 = ["Corporate Board", "Opinion", "Arts and Entertainment", "Copy", "Engagement"]
const panel2 = ["Design and Development", "News", "Sports", "Spectrum", "Graphics", "Illustrations", "Photo", "Revenue"]

const panelMobile = ["Corporate Board", "Design and Development", "News", "Opinion", "Sports", "Arts and Entertainment", "Graphics", "Spectrum", "Illustrations", "Photo", "Copy", "Revenue", "Engagement"]

const Section = (props) => {
    var creditsList = []
    
    if (props.section !== undefined) {
        creditsList = staff[props.section].map((person) => (
            <NameLine>
                {/* <Bold>{person.split(",")[0]}</Bold>
                <p>, {person.split(",")[1]}</p> */}
                <p>{person}</p>
            </NameLine>
        ))
        return (
            <SubDiv>
                <h2>{props.section}</h2>
                {creditsList}
            </SubDiv>
        )
    }
}

const Credits = () => {
    return (
        <CreditsWrapper>
            <Column>
                {panel1.map((sectionName) => (
                    <Section section={sectionName}></Section>
                ))}
            </Column>
            <Column>
                {panel2.map((sectionName) => (
                    <Section section={sectionName}></Section>
                ))}
            </Column>
            {<ColumnMobile>
                {panelMobile.map((sectionName) => (
                    <Section section={sectionName}></Section>
                ))}
            </ColumnMobile>}
        </CreditsWrapper>
    )
}

export default Credits