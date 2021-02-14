const getDueDate = (setDueDate, DUEDATE) => {
	var now = new Date();
	var current;

	if (now.getDate() <= DUEDATE) {
		let date = new Date(now.getFullYear(), now.getMonth(), DUEDATE);
		current = date.toLocaleString('default', { month: 'long' });
		setDueDate(current + " " + DUEDATE);

	} else {
		let date_ = new Date(now.getFullYear(), now.getMonth() + 1, DUEDATE);
		current = date_.toLocaleString('default', { month: 'long' });
		setDueDate(current + " " + DUEDATE);
	}
}

const getPreviousDate = (setPrevDueDate, DUEDATE) => {
	var now = new Date();
	let previous;

	if (now.getDate() >= DUEDATE) {
		let date = new Date(now.getFullYear(), now.getMonth(), DUEDATE);
		previous = date.toLocaleString('default', { month: 'long' });
		setPrevDueDate(previous + " " + DUEDATE);
	} else {
		let date_ = new Date(now.getFullYear(), now.getMonth() - 1, DUEDATE);
		previous = date_.toLocaleString('default', { month: 'long' });
		setPrevDueDate(previous + " " + DUEDATE);
	}
}

const getMeterReadDate = (setMeterRead, meterDate) => {
	var now = new Date();
	var current;


	if (now.getDate() <= meterDate) {
		console.log('meter read', meterDate)
		let date = new Date(now.getFullYear(), now.getMonth(), meterDate);
		current = date.toLocaleString('default', { month: 'long' });
		setMeterRead(current + " " + meterDate);

	} else {
		let date_ = new Date(now.getFullYear(), now.getMonth() + 1, meterDate);
		current = date_.toLocaleString('default', { month: 'long' });
		setMeterRead(current + " " + meterDate);
	}

}

export { getPreviousDate, getDueDate, getMeterReadDate }

