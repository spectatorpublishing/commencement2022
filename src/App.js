import React from 'react';
import styled from 'styled-components/macro';
import theme from "./theme";

import Credits from './components/Credits';
import Letter from './components/EditorLetter';
import TextConvo from './components/TextConvoMobile/TextConvo';
import TextConvoDesktop from './components/TextConvoDesktop/TextConvoDesktop';
import TitleHeader from './components/TitleHeader';
import TextBubbleTitle from './components/TextBubbleTitle';
import LetterC from './components/LetterC';

const HomeContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.lightBlue};
`;

const SectionTitle = styled.div`
  width: fit-content;
  margin: 5rem auto 0rem auto;

  @media (max-width: ${theme.sizes.tablet}) {
    margin: 1rem auto 0rem auto;

    &.articles {
      display: none;
    }
  }
`;

const App = () => (
    <HomeContainer>
      <TitleHeader/>
      <SectionTitle>
        <TextBubbleTitle status={"sent"} isLast={false} className="sectionTitle" text={"Letter from the Editor"}/>
      </SectionTitle>
      <Letter />
      <SectionTitle className='articles'>
        <TextBubbleTitle status={"sent"} isLast={false} className="sectionTitle" text={"Articles"}/>
      </SectionTitle>
      <TextConvoDesktop/>
      <TextConvo />
      <SectionTitle>
        <TextBubbleTitle status={"sent"} isLast={false} className="sectionTitle" text={"Credits"}/>
      </SectionTitle>
      <Credits />
      <LetterC/>
    </HomeContainer>
);

export default App;