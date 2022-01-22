import React from "react";
import styled from "styled-components";

import quoteIcon from "./assets/quoteIcon.svg";

// .sidekick {
//   position: relative;
//   padding-left: 1em;
//   border-left: 0.2em solid #039be5;
//   font-family: 'Roboto', serif;
//   font-size: 2.4em;
//   line-height: 1.5em;
//   font-weight: 100;
// }
// .sidekick:before, .sidekick:after {
//   font-family: Calibri;
//     color: #039be5;
//     font-size: 34px;
// }
// .sidekick:before {content: '\201e'}
// .sidekick:after {content: '\201c';}
// .sidekick cite {font-size: 50%; text-align:center; top:50%}
// .sidekick cite:before {content: ' \2015 '}

const QuoteContainer = styled.div`
  position: relative;
  padding: 50px 20px;
  background-color: #bee7f8;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  width: 60%;
  margin: 5% 20%;

  @media (max-width: 700px) {
    width: 80%;
    margin: 10% 10%;
  }
`;

const QuoteIconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  position: absolute;
  top: -30px;
  left: 40px;
`;

const QuoteText = styled.p`
  font-size: 1.8vw;
  font-style: italic;
  font-family: "Poppins", sans-serif;
  color: #1f1e1e;

  @media (max-width: 700px) {
    font-size: 4vw;
  }
`;

const CiteText = styled.p`
  display: block;
  font-size: 1vw;
  color: #6c757d;
  font-family: "Poppins", sans-serif;

  @media (max-width: 700px) {
    font-size: 3vw;
  }
`;

function QuoteCard() {
  return (
    <>
      <QuoteContainer>
        <QuoteIconContainer>
          <img height="17px" width="17px" src={quoteIcon} alt="Quote Icon" />
        </QuoteIconContainer>
        <QuoteText>
          "Coming together is a beginning, staying together is progress, and
          working together is success ."
        </QuoteText>
        <CiteText>- Henry Ford</CiteText>

        {/* <Cite> Thor in Endgame</Cite> */}
      </QuoteContainer>
    </>
  );
}

export default QuoteCard;
