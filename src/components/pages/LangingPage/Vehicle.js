import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 5vh;
  width: 10vw;
  background-color: red;
  position: absolute;
  margin: 0;
  z-index: 10;
  top: 57vh;
  left: 50vw;
`;

function Vehicle() {
  return <MainContainer>Vehicle</MainContainer>;
}

export default Vehicle;
