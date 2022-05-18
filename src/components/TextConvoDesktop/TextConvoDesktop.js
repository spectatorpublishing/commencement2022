import React, {useState} from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import Articles from "./Articles";
import theme from "../../theme";

const Wrapper = styled.div`
    display: flex;
    width: 85%;
    margin: 4rem auto;
    border-radius: 90px;

  @media (max-width: ${theme.sizes.tablet}) {
    display: none;
  }
`;

const sections = {
    "Arts & Entertainment": {
        section: "Arts & Entertainment",
        color: theme.colors.yellow,
        shortName: "A&E",
        time: "9:50 am",
        message: 'You loved "Congratulations!"'
    },
    "News": {
        section: "News",
        color: theme.colors.pink,
        shortName: "N",
        time: "9:44 am",
        message: 'You loved "Commencement Day!"'
    },
    "Opinion": {
        section: "Opinion",
        color: theme.colors.green,
        shortName: "O",
        time: "9:12 am",
        message: '🎓 😆 👍'
    },
    "Sports": {
        section: "Sports",
        color: theme.colors.alternateBlue,
        shortName: "S",
        time: "8:32 am",
        message: '💙 🦁 💙'
    },
    "Spectrum": {
        section: "Spectrum",
        color: theme.colors.red,
        shortName: "S",
        time: "8:03 am",
        message: 'You loved "I\'m taking lots of pics!"'
    },
    "Miscellaneous": {
        section: "Miscellaneous",
        color: theme.colors.darkGray,
        shortName: "M",
        time: "8:01 am",
        message: 'You loved "I\'m so proud of you!"'
    },
}

const TextConvoDesktop = () => {
    const [section, setSection] = useState(sections["Arts & Entertainment"]);

    const selectSection = (name) => {
        setSection(sections[name])
    }

    return (
        <Wrapper>
            <SideNav sections={sections} selectedSection={section} setSection={selectSection}/>
            <Articles selectedSection={section}/>
        </Wrapper>
    )
}

export default TextConvoDesktop;