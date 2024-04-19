function chatTime(timeString) {
	let date = new Date(timeString);

	date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let meridiem = '오전';

	if (hours >= 12) {
		meridiem = '오후';
		if (hours > 12) {
			hours -= 12;
		}
	}

	if (hours === 0) {
		hours = 12;
	}

	hours = String(hours).padStart(2, '0');
	minutes = String(minutes).padStart(2, '0');

	let time = `${meridiem} ${hours}:${minutes}`;

	return time;
}

export default chatTime;
