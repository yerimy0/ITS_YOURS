import { useEffect, useState, useCallback } from 'react';

function easeOutExpo(t) {
	return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(end, start = 0, duration = 2000) {
	const [count, setCount] = useState(start);
	let startTime = null;
	let requestId = null;

	const updateCount = useCallback(
		timestamp => {
			if (!startTime) startTime = timestamp;
			const elapsedTime = timestamp - startTime;

			if (elapsedTime < duration) {
				const progress = easeOutExpo(elapsedTime / duration);
				setCount(Math.round(start + (end - start) * progress));
				requestId = requestAnimationFrame(updateCount);
			} else {
				setCount(end);
			}
		},
		[start, end, duration],
	);

	const handleScroll = useCallback(() => {
		const scrollY = window.scrollY || window.pageYOffset;
		if (scrollY >= 2000) {
			if (!startTime) startTime = performance.now();
			if (!requestId) {
				requestId = requestAnimationFrame(updateCount);
			}
		} else {
			if (requestId) {
				cancelAnimationFrame(requestId);
				requestId = null;
			}
			startTime = null;
		}
	}, [updateCount]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (requestId) {
				cancelAnimationFrame(requestId);
			}
		};
	}, []);

	return count;
}

export default useCountUp;
