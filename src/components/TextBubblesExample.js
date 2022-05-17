import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import TextBubble from './TextBubble';

const Bubbles = styled.div`  
    display: flex;
    flex-direction: column;
    width: 100vw;
    list-style: none;
`;

const Messages = () => {

  return (
      <Bubbles>
        <TextBubble status="received" reaction="heartTitle" isLast={false} text="Some kind of text"/>
        <TextBubble status="received" reaction="heart" isLast={true} text="Some kind of text to introduce the articles"/>
        <TextBubble status="sent" reaction="haha" isLast={true} text="Roar, Lion, Roar!"/>
        <TextBubble status="sent" reaction="thumbs" isLast={false} text="Congratulations!"/>
        <TextBubble status="sent" reaction="haha" isLast={true} text="Roar, Lion, Roar!"/>
        <TextBubble status="received" reaction="heart" isLast={false} text="Some kind of text to introduce the articles"/>
      </Bubbles>
  )
}

export default Messages;