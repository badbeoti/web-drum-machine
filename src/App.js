import React from "react";
import TrackStep from "./components/TrackStep";
import styled from "styled-components";
import "./App.css";
// import * as Tone from "tone";

const Track = styled.div`
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
		<Track>
			{/* <StebButton note={"b4"}></StebButton>
			<StebButton note={"c5"}></StebButton>
			<StebButton note={"b4"}></StebButton>
			<StebButton note={"c5"}></StebButton> */}
			<TrackStep></TrackStep>
		</Track>
	);
}

export default App;
