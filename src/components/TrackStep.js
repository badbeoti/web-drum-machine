import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import * as Tone from "tone";
import Kick from "../audio/kick.wav";

const StepBtn = styled.button`
	width: 5rem;
	height: 5rem;
	margin-bottom: 1rem;
`;

function TrackStep({ steps }) {
	const [start, isStart] = useState(false);

	useEffect(() => {
		console.log(steps);
		console.log(start);
		if (start) {
			steps.forEach((i) => {
				if (i.play) {
					play();
				}
			});
		}
		return () => {};
	}, [steps, start]);

	const currentSteps = () => {};
	// const kicks = [
	// 	{ time: "0:0:0" },
	// 	// { time: "0:1:0" },
	// 	// { time: "0:2:0" },
	// 	// { time: "0:3:0" },
	// 	{ time: "1:0:0" },
	// 	// { time: "1:1:0" },
	// 	// { time: "1:2:0" },
	// 	// { time: "1:3:0" },
	// ];

	const kick = new Tone.Player(Kick).toDestination();
	// 사운드 연결 import 부분에서 url을 가져와야 편함.

	// const kickSeq = new Tone.Sequence(
	// 	(time, note) => {
	// 		kickRef.current.start();
	// 	},
	// 	kicks,
	// 	"1n"
	// ).start();
	// 루핑 제작 부분 Sequencd, Part, scheduleRepeat 중 하나 골라야 할듯

	const kickRef = useRef(kick);

	const play = () => {
		kickRef.current.start();
		console.log(currentSteps);
	};
	// 누르면 재생

	const testPlay = () => {
		Tone.Transport.bpm.value = 120;
		Tone.Transport.scheduleRepeat(currentSteps, "8n");
		isStart(true);
		Tone.Transport.start();
	};
	// 루프 재생

	const testStop = () => {
		isStart(false);
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
			<StepBtn onClick={testPlay}>loopStartloopStop</StepBtn>
			<StepBtn onClick={testStop}>loopStop</StepBtn>
		</>
	);
}

export default TrackStep;
