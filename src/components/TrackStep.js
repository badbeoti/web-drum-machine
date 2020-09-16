import React, { useRef } from "react";
import styled from "styled-components";
import * as Tone from "tone";
import Kick from "../audio/kick.wav";

const StepBtn = styled.button`
	width: 5rem;
	height: 5rem;
	margin-bottom: 1rem;
`;

function TrackStep() {
	// const stepRef = useRef();

	const toggleStep = () => {
		// console.log(stepBar);
	};

	const kick = new Tone.Player(Kick).toDestination();
	// 사운드 연결 import 부분에서 url을 가져와야 편함.

	const kickSeq = new Tone.Sequence(
		(time, note) => {
			kickRef.current.start();
		},
		[0],
		"8n"
	).start();
	// 루핑 제작 부분 Sequencd, Part, scheduleRepeat 중 하나 골라야 할듯

	const kickRef = useRef(kick);

	const play = () => {
		kickRef.current.start();
	};
	// 누르면 재생

	const testPlay = () => {
		Tone.Transport.start();
	};
	// 루프 재생

	const testStop = () => {
		Tone.Transport.stop();
	};
	// 루프 정지

	return (
		<>
			<StepBtn onClick={play}>kick</StepBtn>
			<StepBtn onClick={play}>kick</StepBtn>
			<StepBtn onClick={play}>kick</StepBtn>
			<StepBtn onClick={play}>kick</StepBtn>
			<StepBtn onClick={play}>kick</StepBtn>
			<StepBtn onClick={play}>kick</StepBtn>
			<StepBtn onClick={testPlay}>loopStart</StepBtn>
			<StepBtn onClick={testStop}>loopStop</StepBtn>
		</>
	);
}

export default TrackStep;
