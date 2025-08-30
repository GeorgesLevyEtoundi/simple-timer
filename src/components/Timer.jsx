import { useRef, useState } from 'react';

// components
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';

const Timer = () => {
	const timerRef = useRef(null);
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	function toggleTimer() {
		if (isRunning) {
			// clear interval to stop the timer
			clearInterval(timerRef.current);

			timerRef.current = null;
		} else {
			// start the timer
			timerRef.current = setInterval(() => {
				setTime(function (prevTime) {
					return prevTime + 1;
				});
			}, 1000);
		}

		setIsRunning(!isRunning);
	}

	function resetTimer() {
		clearInterval(timerRef.current);
		setIsRunning(false);
		timerRef.current = null;
		setTime(0);
	}

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
			<TimerDisplay time={time} />
			<TimerControls
				toggleTimer={toggleTimer}
				resetTimer={resetTimer}
				isRunning={isRunning}
			/>
		</div>
	);
};

export default Timer;
