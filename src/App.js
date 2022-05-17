import React from 'react';
import styled from 'styled-components/macro';
import theme from "./theme";

import Credits from './components/Credits';
import Letter from './components/EditorLetter';
import TextConvo from './components/TextConvo';
import Messages from './components/TextBubblesExample';

const HomeContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.lightBlue};
`;

const App = () => (
    <HomeContainer>
      <Letter />
      <TextConvo />
      <Credits />
      <Messages/>
    </HomeContainer>
);

export default App;