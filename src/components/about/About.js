import { useLinkClickHandler } from "react-router-dom";
import styled from "styled-components";
import { GoldContainer } from "../StyledComponents";

const AboutWrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  padding-top: 64px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 64px;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 90%;
    gap: 64px;
  }
`;

const AboutMe = styled.article`
  max-width: 800px;
  width: 30vw;
  padding: 32px;
  text-align: left;
  font-size: 1.2em;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 16px;
    font-size: 1em;
  }
`;

const MySkills = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 16px;
  padding: 32px;
  width: fit-content;

  /* min-width: 340px; */

  h1 {
    grid-column: 1 / 3;
    text-align: left;
  }
  li {
    text-align: left;
    font-size: 1.2em;
    width: 6em;
  }
`;

const skills = [
  "Java Script",
  "Next.js",
  "Type Script",
  "Electron",
  "HTML",
  "UX Design",
  "CSS",
  "Figma",
  "React",
  "Photoshop",
  "Redux",
  "Blender",
  "Three.js",
  "Unreal 4",
];

let myClassObject;
const set1 = { "--myVariables": "translateX(80px)" };
const set2 = { "--myVariables": "translateX(80px)" };

export default function About() {
  return (
    <AboutWrapper>
      <GoldContainer>
        <AboutMe className={myClassObject}>
          Hello! I'm Andrew. A digital creative, web developer, UX designer, and
          game developer. <br /><br />I create tailor-made digital solutions that fit
          my clients unique brand identity. My solutions aim to use agility and
          beauty to enhance functionality.<br /><br /> With all of life's complex
          challenges, technology should serve to amplify reality making life
          simpler and more enjoyable. <br /><br />My approach to development embodies these
          ideals in a constant endeavor to fuse aesthetic beauty with functionality.
        </AboutMe>
      </GoldContainer>
      <GoldContainer>
        <MySkills>
          <h1>Skills</h1>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </MySkills>
      </GoldContainer>
    </AboutWrapper>
  );
}
