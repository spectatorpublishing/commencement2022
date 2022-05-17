import React, { useEffect, useState } from "react";
import styled from "styled-components";
import articles from "../../data/articles";

const Wrapper = styled.div`
    min-width: 50%;
`;

const Articles = ({selectedSection}) => {
    const [currArticles, setArticles] = useState(articles["Arts & Entertainment"])

    useEffect(() => {
        setArticles(articles[selectedSection])
    },[selectedSection])

    return (
        <Wrapper>

        </Wrapper>
    )
};

export default Articles;