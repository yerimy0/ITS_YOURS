const detailDate = a => {
	const currentDate = new Date(); // 현재 시간을 구함
	let wrtieDate = new Date(a); // 작성 시간의 형식을 변환
	// 작성 시간의 UTC 시간대를 고려 -> 로컬 시간대로 변환!
	wrtieDate = new Date(wrtieDate.getTime() + wrtieDate.getTimezoneOffset() * 60 * 1000);
	const milliSeconds = currentDate.getTime() - wrtieDate.getTime();
	console.log(a);
	console.log(wrtieDate);
	console.log(currentDate);
	console.log(milliSeconds);

	const seconds = milliSeconds / 1000;
	if (seconds < 60) return `방금 전`;
	const minutes = seconds / 60;
	if (minutes < 60) return `${Math.floor(minutes)}분 전`;
	const hours = minutes / 60;
	if (hours < 24) return `${Math.floor(hours)}시간 전`;
	const days = hours / 24;
	if (days < 7) return `${Math.floor(days)}일 전`;
	const weeks = days / 7;
	if (weeks < 5) return `${Math.floor(weeks)}주 전`;
	const months = days / 30;
	if (months < 12) return `${Math.floor(months)}개월 전`;
	const years = days / 365;
	return `${Math.floor(years)}년 전`;
};

export default detailDate;
