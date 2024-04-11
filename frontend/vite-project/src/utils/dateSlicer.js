function DateSlicer(t) {
	const date = new Date(t);

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // 두자리를 디폴트로 부족하면 0 넣어주기
	const day = String(date.getDate()).padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
}
export default DateSlicer;
