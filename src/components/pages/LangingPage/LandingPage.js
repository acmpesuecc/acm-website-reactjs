// https://www.npmjs.com/package/react-intersection-observer
// https://tympanus.net/codrops/2019/12/16/scroll-refraction-and-shader-effects-in-three-js-and-react/
// https://www.framer.com/tutorials/

import React, { useContext, useState } from "react";
import { motion, useTransform } from "framer-motion";
import {
  MainContainer,
  TestStickyContainer,
  BackgroundImage,
} from "./LandingPage.style";
// import Footer from "../../custom/Footer/Footer";
// import NavBar from "../../custom/NavBar/NavBar";

// import { ThemeContext } from "../../../theme/ThemeContext";

// import QuoteCard from "./QuoteCard";
// import AboutPicture from "./assets/about.jpg";
import UseWindowDimensions from "../../../services/UseWindowDimentions.service";
import background from "./assets/background.svg";
import NavBar from "../../custom/NavBar/NavBar";
import Vehicle from "./Vehicle";

function LandingPage() {
  const navbarTabs = 6;
  const backgroundImageWidth = 3342;
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const [backgroundIsScrolling, setBackgroundIsScrolling] = useState({
    from: 0,
    inMotion: false,
  });
  const { height, width } = UseWindowDimensions();

  const onNavClick = (index) => {
    setBackgroundIsScrolling((prev) => ({
      ...prev,
      from: index,
    }));

    if (index === 0) {
      setBackgroundPosition(0);
    } else if (index === 1) {
      setBackgroundPosition(-200);
    } else if (index === 2) {
      setBackgroundPosition(-400);
    } else if (index === 3) {
      setBackgroundPosition(-600);
    } else if (index === 4) {
      setBackgroundPosition(-800);
    } else if (index === 5) {
      setBackgroundPosition(-900);
    }
  };

  const onScroll = (event) => {
    const scrollingUp = event.nativeEvent.wheelDelta > 0;
    let nextStop = backgroundIsScrolling["from"];
    if (scrollingUp) {
      if (nextStop == navbarTabs) {
        return;
      } else {
        nextStop = Math.min(nextStop + 1, navbarTabs);
      }
    } else {
      if (nextStop == 0) {
        return;
      } else {
        nextStop = Math.max(nextStop - 1, 0);
      }
    }

    if (!backgroundIsScrolling["inMotion"]) {
      onNavClick(nextStop);
      setBackgroundIsScrolling((prev) => ({
        ...prev,
        inMotion: true,
      }));

      setTimeout(() => {
        setBackgroundIsScrolling((prev) => ({
          ...prev,
          inMotion: false,
        }));
      }, 1000);
    }
  };

  return (
    <>
      <Vehicle />
      <MainContainer onWheel={onScroll}>
        <NavBar onNavClick={onNavClick} />
        <BackgroundImage
          animate={{
            x: backgroundPosition,
          }}
          transition={{
            duration: 1,
            type: "tween",
          }}
          src={background}
          alt="hills background"
        />
      </MainContainer>
    </>
  );
}

export default LandingPage;

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

// const { height, width } = UseWindowDimensions();
// const { theme, toggleTheme } = useContext(ThemeContext);
// const { scrollX, scrollY } = useViewportScroll();
// const leftMovement = useTransform(
//   scrollY,
//   [0, 500, 1000, 2000 - height],
//   [0, 200, width - 300, width - 100]
// );

// const backGroundMovement = useTransform(
//   scrollY,
//   [0, 2000 - height],
//   [0, width - (3342 / 982) * height]
// );

// const visibility = useTransform(
//   scrollY,
//   [0, 500, 1000, 2000 - height],
//   [0, 1, 1, 0]
// );

{
  /* <MainContainer>
<MainContainer>
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
</MainContainer>
<ScrollOuterContainer>
  <ScrollInnerContainer>
    <ScrollScreen>1</ScrollScreen>
    <ScrollScreen>2</ScrollScreen>
    <ScrollScreen>3</ScrollScreen>
    <ScrollScreen>4</ScrollScreen>
  </ScrollInnerContainer>
</ScrollOuterContainer> */
}
