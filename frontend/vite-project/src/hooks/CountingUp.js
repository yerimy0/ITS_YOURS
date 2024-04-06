import { useEffect, useState } from 'react';

function easeOutExpo(t) {
	return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}
function useCountUp(end, start = 0, duration = 2000) {
	const [count, setCount] = useState(start);
	const frameRate = 1000 / 60;
	const totalFrame = Math.round(duration / frameRate);

	useEffect(() => {
		let currentNumber = start;
		let startTime = null;
		let requestId = null;

		const updateCount = timestamp => {
			if (!startTime) startTime = timestamp;
			const elapsedTime = timestamp - startTime;

			if (elapsedTime < duration) {
				const progress = easeOutExpo(elapsedTime / duration);
				setCount(Math.round(start + (end - start) * progress));
				requestId = requestAnimationFrame(updateCount);
			} else {
				setCount(end);
			}
		};

		const handleScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;
			if (scrollY >= 2900) {
				startTime = null;
				if (!requestId) {
					requestId = requestAnimationFrame(updateCount);
				}
			} else {
				if (requestId) {
					cancelAnimationFrame(requestId);
					requestId = null;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (requestId) {
				cancelAnimationFrame(requestId);
			}
		};
	}, [end, duration, start]);

	return count;
}

export default useCountUp;
