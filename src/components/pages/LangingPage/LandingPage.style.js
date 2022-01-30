import styled from "styled-components";
import { motion } from "framer-motion";

// export const LandingPageContainer = styled.div`
//   padding: 20px 10%;

//   @media (max-width: 950px) {
//     padding: 20px 10%;
//   }
// `;

// export const Title = styled.h1`
//   color: ${({ theme }) => theme.secondaryFontColor};

//   @media (max-width: 950px) {
//     font-size: 1rem;
//   }
// `;

// export const MainContainer = styled.div`
//   position: relative;
//   /* scroll-snap-type: y proximity;
//   overflow-y: scroll;
//   height: 100vh; */
// `;

// export const Name = styled.h1`
//   color: white;
//   font-size: 6vw;
//   font-weight: 300;
//   font-family: "Poppins", sans-serif;
//   margin-bottom: 20px;
// `;

// export const Location = styled.h1`
//   color: white;
//   font-size: 2vw;
//   font-family: "Poppins", sans-serif;
// `;

// export const HeadingContainer = styled.div`
//   /* position: absolute; */
//   width: 100%;
//   height: 40vw;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// export const AboutSectionContainer = styled.div`
//   background-color: #77bce5;
//   padding: 5% 10%;
//   position: relative;

//   @media (max-width: 700px) {
//     padding: 15% 10%;
//   }
// `;

// export const AboutHeading = styled.h1`
//   font-size: 3rem;
//   font-family: "Poppins", sans-serif;
//   color: white;
//   font-weight: bold;
//   text-transform: uppercase;

//   @media (max-width: 700px) {
//     font-size: 2rem;
//   }
// `;

// export const AboutContent = styled.p`
//   font-size: 1.5rem;
//   font-family: "Poppins", sans-serif;
//   color: white;
//   width: 55%;
//   display: inline-block;
//   height: 20vw;

//   @media (max-width: 700px) {
//     font-size: 1rem;
//     width: 100%;
//   }
// `;

// export const AboutImage = styled.img`
//   float: right;
//   left: 0;
//   height: 20vw;

//   @media (max-width: 700px) {
//     float: none;
//     width: 100%;
//     height: auto;
//     margin-top: 20px;
//   }
// `;

// Scroll stuff

// export const ScrollSection = styled.section`
//   height: 100vh;
//   scroll-snap-align: start;
// `;

//////////////////////////// Horizontal Scrolling ////////////////////////////

export const ScrollOuterContainer = styled.div`
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
`;

export const ScrollScreen = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
`;

//////////////////////////// Framer Motion Scrolling ////////////////////////////

export const MainContainer = styled.div`
  height: 2000px;
  overflow: hidden;
  position: relative;
`;

export const BackgroundImage = styled(motion.img)`
  position: fixed;
  height: 100vh;
  z-index: -1;
`;

export const TestStickyContainer = styled.span`
  position: fixed;
  top: 10vh;
  left: 10vh;
  background-color: #77bce5;
`;
