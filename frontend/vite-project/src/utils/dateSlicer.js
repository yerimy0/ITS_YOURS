function DateSlicer(t) {
	const date = new Date(t);
	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, '0');
	const day = String(date.getUTCDate()).padStart(2, '0');
	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
}
export default DateSlicer;
