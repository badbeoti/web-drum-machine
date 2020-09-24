import React from "react";
import styled from "styled-components";

const StepBtn = styled.button`
	width: 5rem;
	height: 5rem;
	margin-bottom: 1rem;
	background-color: ${(props) => (props.play ? "red" : "white")};
`;

function Step({ step, onToggle }) {
	console.log(step);
	return (
		<StepBtn onClick={() => onToggle(step.stepBar)} play={step.play}>
			{step.stepBar}
		</StepBtn>
	);
}

function StepBars({ steps, onToggle }) {
	return steps.map((step) => <Step step={step} key={step.stepBar} onToggle={onToggle}></Step>);
}

export default StepBars;
