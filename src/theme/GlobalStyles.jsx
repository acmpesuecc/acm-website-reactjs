import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    ${"" /* transition: color 0.5s linear; */}
    transition: background-color 0.5s linear;
    transition: background-image 0.5s linear;
  }
`;

// #38AEE6
// #1B99D4
// #0d1017 org #0a0d12
const colors = {
  myDarkColour: "#0a0d12",
  myBlue: "#1B99D4",
  myWhite: "white",
  myBlack: "black",
  myOrangishYellow: "#ffae42",
};

export const lightTheme = {
  body: colors.myWhite,
  primaryFontColor: colors.myDarkColour,
  secondaryFontColor: colors.myBlue,
  fontColorOnSecondary: colors.myWhite,
  fontColorOnPrimary: colors.myWhite,
  iconColor: colors.myBlack,
  highEmFc: "#fff",
  mediumEmFc: `rgba(255, 255, 255, 0.9)`,
  lowEmFc: "#fff",
  scrollBar: `rgba(255, 255, 255, 0.4)`,
  scrollBarHover: `rgba(255, 255, 255, 0.8)`,
};

export const darkTheme = {
  body: colors.myDarkColour,
  primaryFontColor: colors.myWhite,
  secondaryFontColor: colors.myOrangishYellow,
  fontColorOnSecondary: colors.myBlack,
  fontColorOnPrimary: colors.myBlack,
  iconColor: colors.myWhite,
  highEmFc: `rgba(255, 255, 255, 0.9)`,
  mediumEmFc: `rgba(255, 255, 255, 0.75)`,
  lowEmFc: `rgba(255, 255, 255, 0.1)`,
  scrollBar: `rgba(255, 255, 255, 0.4)`,
  scrollBarHover: `rgba(255, 255, 255, 0.8)`,
};
