// https://www.npmjs.com/package/react-intersection-observer
// https://tympanus.net/codrops/2019/12/16/scroll-refraction-and-shader-effects-in-three-js-and-react/
// https://www.framer.com/tutorials/

import React, { useContext } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  MainContainer,
  MotionMainContainer,
  MotionMovingContainer,
  //   Name,
  //   Location,
  //   HeadingContainer,
  //   AboutSectionContainer,
  //   AboutHeading,
  //   AboutContent,
  //   AboutImage,
  //   ScrollOuterContainer,
  //   ScrollInnerContainer,
  //   ScrollScreen,
} from "./LandingPage.style";
import Footer from "../../custom/Footer/Footer";
import NavBar from "../../custom/NavBar/NavBar";

import { ThemeContext } from "../../../theme/ThemeContext";

import ThemeToggleButton from "../../custom/ThemeToggleButton";
import QuoteCard from "./QuoteCard";
import AboutPicture from "./assets/about.jpg";
import UseWindowDimensions from "../../../services/UseWindowDimentions.service";

function LandingPage() {
  const { height, width } = UseWindowDimensions();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { scrollX, scrollY } = useViewportScroll();
  const leftMovement = useTransform(
    scrollY,
    [0, 500, 1000, 2000 - height],
    [0, 0, width - 100, width - 100]
  );

  return (
    <MainContainer>
      {/* <MainContainer>
      <NavBar />
      <HeadingContainer>
        <Name>ACM PES UNIVERSITY</Name>
        <Location>- Electronic City Campus</Location>
      </HeadingContainer>
      <QuoteCard />
      <AboutSectionContainer>
        <AboutHeading>About us</AboutHeading>
        <AboutContent>
          The ACM Student Chapter here at PES University Electronic City Campus
          brings you a world of opportunities, events and contains a wide range
          of activities to keep ACM moving including organizing conferences,
          improving Technical skills, Networking, and we strive to provide a
          professional experience to our members.
        </AboutContent>
        <AboutImage src={AboutPicture} alt="" />
      </AboutSectionContainer>

      <Footer />
    </MainContainer> */}
      {/* <ScrollOuterContainer>
        <ScrollInnerContainer>
          <ScrollScreen>1</ScrollScreen>
          <ScrollScreen>2</ScrollScreen>
          <ScrollScreen>3</ScrollScreen>
          <ScrollScreen>4</ScrollScreen>
        </ScrollInnerContainer>
      </ScrollOuterContainer> */}

      <MotionMainContainer>
        <MotionMovingContainer
          style={{
            left: leftMovement,
            top: scrollY,
          }}
        >
          ACM Website
        </MotionMovingContainer>
      </MotionMainContainer>
    </MainContainer>
  );
}

export default LandingPage;
