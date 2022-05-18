import React, { useEffect, useState } from "react";
import styled from "styled-components";
import articles from "../../data/articles";
import theme from "../../theme";
import ArticleBoxes from "../ArticleBox";
import TextBubble from "../TextBubble";

const ArticleWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-top: 1rem;
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
        for (var i = 0; i < currArticles.length; i+=2){
            if (currArticles[i+1]){
                divs.push(<ArticleBoxes article1={currArticles[i]} side={side[j%2]} isLast={false}/>)
                divs.push(<ArticleBoxes article1={currArticles[i+1]} side={side[j%2]} isLast={true}/>)
            } else {
                divs.push(<ArticleBoxes article1={currArticles[i]} side={side[j%2]} isLast={true}/>)
            }
            j++;
        }

        setArticleDivs(divs)
    }

    return (
            <ArticleWrap>
                {currArticleDivs}
                {selectedSection.section === "Spectrum" ? <Sticker1><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TBXMS6DUBVC6THIGRZQGPZKYBA.gif"/></Sticker1> : null}
                {selectedSection.section === "Spectrum" ? <Sticker2><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NYA4JDPMTNDC3B2C5JKGFVBUIA.gif"/></Sticker2> : null}
                <FinalText selectedSection={selectedSection}/>
            </ArticleWrap>
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