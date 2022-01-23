import React, { useContext } from "react";
import {
  MainContainer,
  Name,
  Location,
  HeadingContainer,
  AboutSectionContainer,
  AboutHeading,
  AboutContent,
  AboutImage,
} from "./LandingPage.style";
import Footer from "../../custom/Footer/Footer";
import NavBar from "../../custom/NavBar/NavBar";

import { ThemeContext } from "../../../theme/ThemeContext";

import ThemeToggleButton from "../../custom/ThemeToggleButton";
import QuoteCard from "./QuoteCard";
import AboutPicture from "./assets/about.jpg";

function LandingPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
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
  );
}

export default LandingPage;
