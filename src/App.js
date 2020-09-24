import React, { useState, useRef } from "react";
import TrackStep from "./components/TrackStep";
import TestSteps from "./components/TestSteps";
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

const StepBtn = styled.button`
	width: 5rem;
	height: 5rem;
	margin-bottom: 1rem;
`;

function App() {
	const [steps, setSteps] = useState([
		{ stepBar: 1, play: false },
		{ stepBar: 2, play: false },
		{ stepBar: 3, play: false },
		{ stepBar: 4, play: false },
		{ stepBar: 5, play: false },
		{ stepBar: 6, play: false },
		{ stepBar: 7, play: false },
		{ stepBar: 8, play: false },
	]);

	const stepRef = useRef(steps);

	const onToggle = (stepBar) => {
		setSteps(
			steps.map((step) => (step.stepBar === stepBar ? { ...step, play: !step.play } : step))
		);
	};

	return (
		<Track>
			<TrackStep steps={steps}></TrackStep>
			<TestSteps steps={steps} onToggle={onToggle} ref={stepRef}></TestSteps>
			<>
				{steps.map((steps) => (
					<StepBtn>{steps.play ? "on" : "off"}</StepBtn>
				))}
			</>
		</Track>
	);
}

export default App;
