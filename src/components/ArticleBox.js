import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../theme";

const ArticleWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;

    border-radius: 30px;

    &.left {
        border-radius: 0px 0px 0px 30px;
    }

    &.right {
        border-radius: 0px 0px 30px 0px;
        border-left: 1px solid grey;
        height: 100%;
    }
`;

const Image = styled.div`

    width: 100%;
    height: 8rem;

    img {
        width: 100%;
        height: 8rem;
        object-fit: cover;
        object-position: center top;

        border-radius: 30px 30px 0px 0px;

        &.left {
            border-radius: 30px 0px 0px 0px;
        }

        &.right {
            border-radius: 0px 30px 0px 0px;
        }
    }

`;

const Info = styled.div`
    background-color: #e5e5ea;
    color: #616161;
    margin-bottom: auto;
    
    border-radius: 0px 0px 30px 30px;

    &.left {
        border-radius: 0px 0px 0px 30px;
    }

    &.right {
        border-radius: 0px 0px 30px 0px;
    }
`;

const Title = styled.div`
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 1rem 0rem 1rem;
`;

const Author = styled.div`
    font-size: 0.8rem;
    padding: 0.5rem 1rem 1rem 1rem;
    text-transform: lowercase;
    
    :first-line {
        text-transform: capitalize;
    }
`;

const ArticleBox = ({article, side}) => {
    const content = article ? 
    <a href={article.articleLink}>
    <ArticleWrap className={side}>
        <Image>
            <img  className={side} src={article.imageLink}/>
        </Image>
        <Info className={side}>
            <Title>{article.title}</Title>
            <Author>{article.author}</Author>
        </Info>
    </ArticleWrap>
    </a> : <></>

    return content;
}

const ArticleBubble = ({content, status, isLast}) => {

    return (
        <BubbleWrapper className={status}>
            <Bubble className={status + (isLast ? "" : " noTail")}>
                {content}
            </Bubble>
        </BubbleWrapper>
    )
}

const ArticleBoxes = ({article1, article2, side, isLast}) => {
    const content = article2 ?
    <>
        <ArticleBox article={article1} side='left'/>
        <ArticleBox article={article2} side='right'/>
    </> : 
    <ArticleBox article={article1}/>

    return (
        <ArticleBubble content={content} status={side === "left" ? "received" : "sent"} isLast={isLast}/>
    )
}

export default ArticleBoxes;

const BubbleWrapper = styled.div`
    width: fit-content;
    list-style: none;
    margin: 0.5rem 1rem;

    &.sent {
        margin-left: auto;
    }

    &.received {
        margin-right: auto;
    }
`;

const Bubble = styled.li`

    a {
        text-decoration: none;
    }

    display: flex;
    flex-direction: row;

    font-size: 2.5rem;

    z-index: 1;
    position: relative;
    width: fit-content;
    
    margin-bottom: 3rem;
    word-wrap: break-word;
    border-radius: 30px;
      
    &:before {
        width: 20px;
    }
    
    &:after {
        width: 10px;
        background-color: white;
    }
    
    &:before,
    &:after {
        position: absolute;
        bottom: 0;
        height: 25px;
        content: '';
    }

    &.noTail {
        margin-bottom: 0rem;
      
        &:before,
        &:after {
          opacity: 0;
        }
    }
      
    &.sent {
        margin-left: auto;
        color: white;
        background: #e5e5ea;
      
        &:before {
          right: -7px;
          background: #e5e5ea;
          border-bottom-left-radius: 16px 14px;
        }
      
        &:after {
          right: -10px;
          border-bottom-left-radius: 10px;
        }
    }
      
    &.received {
        align-self: flex-start;
        color: black;
        background: #e5e5ea;
      
        &:before {
          left: -7px;
          background: #e5e5ea;
          border-bottom-right-radius: 16px 14px;
        }
      
        &:after {
          left: -10px;
          border-bottom-right-radius: 10px;
        }
    }
`