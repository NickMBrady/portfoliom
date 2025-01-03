import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Nav, NavLogoSection, NavLinkSection, NBTitle, LogoBox, LinkBox, Logo } from './NavBarComponent';
import { BubbleDiv, KeywordBubble } from './Bubbles';

import logoImg from "/assets/nb-logo.png";
import CEDImg from "/assets/CED/CED.jpg";
import diffImg from "/assets/diffEDge/diffusionEdge.png";
import orthoticImg from "/assets/orthotic/orthotic.jpg";
import img3d from "/assets/3DEm/hero.webp";
import kidney from "/assets/kidney/hero2.webp";
import appImg from "/assets/intervalTimer/hero.jpg";
import cardiacImg from "/assets/cardiac/main.jpeg";
import chinrestImg from "/assets/chinrest/chinrest.jpg";

export default function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />  {/* Apply global styles */}
      <Nav>
        <NavLogoSection>
          <LogoBox>
            <a href="/portfolio/"><Logo src={logoImg} alt="Logo" /> </a>
            <NBTitle>Nick Brady</NBTitle>
          </LogoBox>
        </NavLogoSection>
        <NavLinkSection>
          <LinkBox>
            <a href="https://www.linkedin.com/in/nickmbrady" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a href="mailto:nickbrady8444@example.com">
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </a>
            <a href="https://github.com/nickmbrady" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </LinkBox>
        </NavLinkSection>
      </Nav>
      <Main>
        <MainGrid>
          <ProjectsSection>
            <BoldTitle>Projects</BoldTitle>
          </ProjectsSection>
          <ContentSection>
            <Row onClick={() => navigate('/projects/cardiacsimulator')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Cardiac Simulator Capable of Controlled Pulsatile Flow</ProjectTitle>
                <Paragraph>Engineered the hardware solution for an anatomically accurate fluid pump system, satisfying pressure and flow rate criteria with simulated "heart beats": periodic modulations in flow pressure and velocity (pulsatile flow). </Paragraph>
                <BubbleDiv>
                  <KeywordBubble>3D Printing</KeywordBubble>
                  <KeywordBubble>C++</KeywordBubble>
                  <KeywordBubble>Arduino</KeywordBubble>
                  <KeywordBubble>Fluid Dynamics</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={cardiacImg}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            <Row onClick={() => navigate('/projects/orthoticprosthetic')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Moldable, Algorithmically Generated Prosthetic and Orthotic Devices</ProjectTitle>
                <Paragraph>Developed a novel moldable workflow for open-source orthotic and prosthetic solutions with superior functionality and comfort. Wrote software to generate medical device size and shape from only multi-axial pictures of patient appendages. Collaborated with nonprofit 2ft Prosthetics on prototyping and deployment.</Paragraph>
                <BubbleDiv>
                  <KeywordBubble>Material Dynamics</KeywordBubble>
                  <KeywordBubble>3D Printing</KeywordBubble>
                  <KeywordBubble>Procedural Modeling</KeywordBubble>
                  <KeywordBubble>Python</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={orthoticImg}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            <Row onClick={() => navigate('/projects/electromagnetic3dprinting')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Enhancing FDM 3D Printing with Electromagnetic Control</ProjectTitle>
                <Paragraph>Developed a software and hardware system to actively predict and cancel system vibrations, eliminating print artifacts using rapid electromagnetic actuation to produce inverse vibrations in the extruder. Created workflow employing high-frequency electromagnetic pulses to create fine surface patterns on printed objects, achieving an aesthetic texture that hides print layer lines without sacrificing dimensional accuracy, material overuse, or print time.</Paragraph>
                <BubbleDiv>
                  <KeywordBubble>3D Printing</KeywordBubble>
                  <KeywordBubble>Electronics and Microcontrollers</KeywordBubble>
                  <KeywordBubble>Procedural Modeling</KeywordBubble>
                  <KeywordBubble>C++</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={img3d}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            <Row onClick={() => navigate('/projects/chinrest')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Novel Moldable, Ventilated Violin Chinrest</ProjectTitle>
                <Paragraph>Invented a novel moldable, ventilated violin chinrest. Dramatically improves comfort from "one-size-fits-all" wood or plastic solutions. Ventilated by design, prevents sweat buildup under jaw. Infinitely remoldable.  </Paragraph>
                <BubbleDiv>
                  <KeywordBubble>Material Dynamics</KeywordBubble>
                  <KeywordBubble>3D Printing</KeywordBubble>
                  <KeywordBubble>Procedural Modeling</KeywordBubble>
                  <KeywordBubble>Python</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={chinrestImg}/>
                </ImageWrapper>
              </RightCol>
            </Row>
          </ContentSection>
        </MainGrid>
      </Main>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
    --light-gray: #b7b7b7;
    --dividing-line: #303f4d;
    --background: #f5f5f5;
  }

  h1, h2, h3, a, p, span {
    font-family: "Lexend Exa", sans-serif;
    font-weight: 400;
    color: var(--light-gray);
  }

  a {
    font-size: 10pt;
    text-decoration: none;
    text-transform: uppercase;
  }

  strong {
    font-weight: 400;
  }

`;
const Main = styled.div`
  flex-grow: 1;
  height: calc(100vh - 200px);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  scrollbar-color: var(--dividing-line) var(--background); /* Firefox */
  overflow-x: hidden;
  @media (max-width: 800px) {
    height: calc(100vh - 120px);
  }

  @media (max-width: 576px) {
    height: calc(100vh - 75px);
  }

`;

const MainGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 10% 90%;
`;

const ProjectsSection = styled.div`
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  border-left: 0.5px solid var(--dividing-line);
  border-bottom: 0.5px solid var(--dividing-line);
  overflow-y: auto;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; /* Push items to the top */
  border-left: 0.5px solid var(--dividing-line);
  border-bottom: 0.5px solid var(--dividing-line);

  @media (max-width: 576px) {
    padding-bottom: 100px;
  }
`;

const LeftCol = styled.div`
  flex-basis: 30%;
  padding: 70px;

  @media (max-width: 1000px) {
    padding: 25px;
  }
  @media (max-width: 800px) {
    padding: 30px;
    flex: none;
  }
`;

const RightCol = styled.div`
  flex-basis: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  padding-top: 70px;
  position: relative;
  border-left: 0.5px solid var(--dividing-line);

  @media (max-width: 800px) {
    padding: 30px;
    flex-basis: auto;
    height: 200px;  
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  overflow: hidden;
  display: flex;

  @media (max-width: 800px) {
    height: 100%;
    padding-left: 1rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 50%;

  @media (max-width: 800px) {
    height: auto;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding-bottom: 35px;
`;

const Paragraph = styled.p`
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.5;
  margin: 0px;

  @media (max-width: 1000px) {
    font-size: 14px;
    padding-bottom: 15px;
    padding-left: 10px;
  }

  @media (max-width: 800px) {
    padding-left: 10px;
    font-size: 14px;
  }
`;

const BoldTitle = styled.a`
  font-size: 40px;
  font-weight: bolder;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  transition: color 1s ease;
  padding-bottom: 40px;

  @media (max-width: 800px) {
    font-size: 20px;
    padding-bottom: 20px;
  }
  
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const PlusSign = styled.div`
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 30px;
  color: var(--light-gray);
  pointer-events: none;

  @media (max-width: 768px) {
    display: none; /* Hide the plus sign on mobile devices */
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 0.5px solid var(--dividing-line);
  transition: transform 0.3s ease;
  letter-spacing: 0.5px;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateX(30px);
  }

  &:hover ${PlusSign} {
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    &:hover {
      transform: none;
    }

    &:hover ${PlusSign} {
      opacity: 0;
    }
  }
`;