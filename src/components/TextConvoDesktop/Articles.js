import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import articles from "../../data/articles";
import theme from "../../theme";
import ArticleBoxes from "../ArticleBox";
import TextBubble from "../TextBubble";

const Wrapper = styled.div`
    width: 65%;
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
    padding-top: 1rem;
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

const Sticker1 = styled.div`
    width: 12rem;
    height: fit-content;
    margin: 1rem 1rem 1rem auto;

    img {
        width: 100%;
    }
`;

const Sticker2 = styled.div`
    width: 10rem;
    height: fit-content;
    margin: 1rem auto 3rem 1rem;

    img {
        width: 100%;
    }
`;

const Articles = ({selectedSection}) => {
    const [currArticles, setArticles] = useState(articles["Arts & Entertainment"])
    const [currArticleDivs, setArticleDivs] = useState([]);

    const side = {
        0:"left",
        1:"right"
    }

    useEffect(() => {
        console.log(articles[selectedSection.section])
        setArticles(articles[selectedSection.section]);
        if (currArticles) 
            createArticleDivs(articles[selectedSection.section]);
    },[selectedSection])

    const createArticleDivs = (currArticles) => {
        var divs = []
        var j = 0;
        for (var i = 0; i < currArticles.length; i+=4){
            if (currArticles[i+2]){
                divs.push(<ArticleBoxes article1={currArticles[i]} article2={currArticles[i+1]} side={side[j%2]} isLast={false}/>)
                divs.push(<ArticleBoxes article1={currArticles[i+2]} article2={currArticles[i+3]} side={side[j%2]} isLast={true}/>)
            } else {
                divs.push(<ArticleBoxes article1={currArticles[i]} article2={currArticles[i+1]} side={side[j%2]} isLast={true}/>)
            }
            j++;
        }

        setArticleDivs(divs)
    }

    return (
        <Wrapper>
            <Header>
            <Text color='#B0B0B0'>To:</Text><Text color="#616161">Class of 2022</Text>
            </Header>
            <ArticleWrap>
                {currArticleDivs}
                {selectedSection.section === "Spectrum" ? <Sticker1><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TBXMS6DUBVC6THIGRZQGPZKYBA.gif"/></Sticker1> : null}
                {selectedSection.section === "Spectrum" ? <Sticker2><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NYA4JDPMTNDC3B2C5JKGFVBUIA.gif"/></Sticker2> : null}
                <FinalText selectedSection={selectedSection}/>
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

const FinalText = ({selectedSection}) => {
    const [bubble, setBubble] = useState(<TextBubble status="received" reaction="heart" isLast={true} text="Congratulations!"/>)

    const bubbles = {
        "Arts & Entertainment" : <TextBubble status="received" reaction="heart" isLast={true} text="Congratulations!"/>,
        "News" : <TextBubble status="received" reaction="heart" isLast={true} text="Commencement Day!"/>,
        "Opinion" : <TextBubble status="sent" isLast={true} text="🎓 😆 👍"/>,
        "Sports" : <TextBubble status="sent" isLast={true} text="💙 🦁 💙"/>,
        "Spectrum" : <TextBubble status="received" reaction="heart" isLast={true} text="I'm taking lots of pics!"/>,
        "Miscellaneous" : <TextBubble status="received" reaction="heart" isLast={true} text="I'm so proud of you!"/>
    }

    useEffect(() => {
        setBubble(bubbles[selectedSection.section]);
    },[selectedSection])

    return (
        bubble
    )
}