import styled from "styled-components";

export const LandingPageContainer = styled.div`
  padding: 20px 10%;

  @media (max-width: 950px) {
    padding: 20px 10%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.secondaryFontColor};

  @media (max-width: 950px) {
    font-size: 1rem;
  }
`;
