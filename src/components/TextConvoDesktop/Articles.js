import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import articles from "../../data/articles";
import theme from "../../theme";

const Wrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    border-radius: 0px 45px 45px 0px;
`;

const Header = styled.div`
    background-color: ${theme.colors.lightGray};
    padding: 3rem 1rem 1rem 1rem;
    border-radius: 0px 45px 0px 0px;
`;

const ArticleWrap = styled.div`
    height: 100%;
    background-color: white;
`;

const TextBoxWrap = styled.div`
    display: flex;
    background-color: ${theme.colors.lightGray};
    border-radius: 0px 0px 45px 0px;
    padding-right: 2rem;

    svg {
        font-size: 1.2rem;
        margin: auto;
        color: #B0B0B0;
    }
`;

const TextBox = styled.div`
    width: 80%;
    border-radius: 40px;
    margin: 1rem;
    background-color: white;
    padding: 0.5rem 1rem;
`;

const Text = styled.span`
    color: ${props => props.color};
    margin-right: 0.3rem;
`;

const Articles = ({selectedSection}) => {
    const [currArticles, setArticles] = useState(articles["Arts & Entertainment"])

    useEffect(() => {
        setArticles(articles[selectedSection])
    },[selectedSection])

    return (
        <Wrapper>
            <Header>
            <Text color='#B0B0B0'>To:</Text><Text color="#616161">Class of 2022</Text>
            </Header>
            <ArticleWrap>

            </ArticleWrap>
            <TextBoxWrap>
                <TextBox>
                    <Text color='#B5B5B5'>Columbia...</Text>
                </TextBox>
                <FontAwesomeIcon icon={faMicrophone}/>
            </TextBoxWrap>
        </Wrapper>
    )
};

export default Articles;