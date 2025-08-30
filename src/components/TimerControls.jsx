import { useEffect, useRef } from 'react';

const TimerControls = ({ toggleTimer, resetTimer, isRunning }) => {
	const startButtonRef = useRef(null);

	// auto focus the start button
	useEffect(function () {
		if (startButtonRef.current) {
			startButtonRef.current.focus();
		}
	}, []);

	return (
		<>
			<button
				ref={startButtonRef}
				onClick={toggleTimer}
				className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover: bg-green-600 mr-3"
			>
				{isRunning ? 'Pause' : 'Start'}
			</button>
			<button
				onClick={resetTimer}
				className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover: bg-red-600"
			>
				Reset
			</button>
		</>
	);
};

export default TimerControls;
