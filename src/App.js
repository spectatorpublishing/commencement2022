import React from 'react';
import styled from 'styled-components/macro';
import theme from "./theme";
import Letter from './components/EditorLetter';
import TextConvo from './components/TextConvo';

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
    </HomeContainer>
);

export default App;