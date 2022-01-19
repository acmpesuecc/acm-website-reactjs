import React, { useContext } from "react";
import { LandingPageContainer, Title } from "./LandingPage.style";
import { ThemeContext } from "../../../theme/ThemeContext";
import ThemeToggleButton from "../../custom/ThemeToggleButton";

function LandingPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <LandingPageContainer>
      <Title>Landing page</Title>
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </LandingPageContainer>
  );
}

export default LandingPage;
