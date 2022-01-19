import React from "react";
import styled from "styled-components";
import UseWindowDimensions from "../../services/UseWindowDimentions.service";

let Sun, Moon;

const ToggleButtonContainer = styled.div`
  /* position: absolute;
  top: 3rem;
  right: 4rem; */

  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 950px) {
    /* top: 1.3rem;
    right: 1.3rem; */
    width: 30px;
    height: 30px;
  }
`;

Sun = Moon = styled.svg`
  transition: all 0.5s linear;
`;

// <i class="far fa-sun"></i>
// <i class="far fa-moon"></i>

function ThemeToggleButton({ theme, toggleTheme }) {
  const windowWidth = UseWindowDimensions().width;

  return (
    <ToggleButtonContainer onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon
          xmlns="http://www.w3.org/2000/svg"
          width={windowWidth > 950 ? "40" : "30"}
          height={windowWidth > 950 ? "40" : "30"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-moon"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </Moon>
      ) : (
        <Sun
          xmlns="http://www.w3.org/2000/svg"
          width={windowWidth > 950 ? "40" : "30"}
          height={windowWidth > 950 ? "40" : "30"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-sun"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </Sun>
      )}
    </ToggleButtonContainer>
  );
}

export default ThemeToggleButton;
