import React from "react";
import StebButton from "./components/stebButton.js";
import styled from "styled-components";
import "./App.css";

const DrumMachine = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <DrumMachine>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
      <StebButton></StebButton>
    </DrumMachine>
  );
}

export default App;
