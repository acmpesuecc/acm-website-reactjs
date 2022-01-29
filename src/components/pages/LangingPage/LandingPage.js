// https://www.npmjs.com/package/react-intersection-observer
// https://tympanus.net/codrops/2019/12/16/scroll-refraction-and-shader-effects-in-three-js-and-react/
// https://www.framer.com/tutorials/

import React, { useContext } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  MainContainer,
  Name,
  Location,
  HeadingContainer,
  AboutSectionContainer,
  AboutHeading,
  AboutContent,
  AboutImage,
  ScrollOuterContainer,
  ScrollInnerContainer,
  ScrollScreen,
} from "./LandingPage.style";
import Footer from "../../custom/Footer/Footer";
import NavBar from "../../custom/NavBar/NavBar";

import { ThemeContext } from "../../../theme/ThemeContext";

import ThemeToggleButton from "../../custom/ThemeToggleButton";
import QuoteCard from "./QuoteCard";
import AboutPicture from "./assets/about.jpg";

function LandingPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { scrollYProgress, scrollXProgress, scrollX, scrollY } =
    useViewportScroll();
  const scale = useTransform(scrollY, [0, 2000], [0, 2000]);

  return (
    <>
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

      <motion.div
        style={{
          width: "100vw",
          height: "300vh",
        }}
      >
        <motion.span
          style={{
            color: "white",
            position: "sticky",
            top: "0",
            left: scale,
          }}
        >
          hiii
        </motion.span>
      </motion.div>
    </>
  );
}

export default LandingPage;
