import styled from "styled-components";

import { Card, Modal, Button } from "react-bootstrap";

export const EventPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3vw;
  justify-content: center;
`;
export const CardContainer = styled(Card)`
  width: 18rem;
  padding: 1vw;
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
`;

export const CardTotal = styled.div`
  padding: 2vw;
`;
export const Heading = styled.h1`
  text-align: center;
  padding: 1vw;
  color: ${({ theme }) => theme.secondaryFontColor};
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.secondaryFontColor};
`;

export const CardButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryBackgroundColor};
`;
