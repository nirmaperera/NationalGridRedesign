const getDueDate = (setDueDate, DUEDATE) => {
	var now = new Date();
	var current;

	if (now.getDate() <= 23) {
		let date = new Date(now.getFullYear(), now.getMonth(), 23);
		current = date.toLocaleString('default', { month: 'long' });
		setDueDate(current + " " + DUEDATE);

	} else {
		let date_ = new Date(now.getFullYear(), now.getMonth() + 1, 23);
		current = date_.toLocaleString('default', { month: 'long' });
		setDueDate(current + " " + DUEDATE);
	}
}

const getPreviousDate = (setPrevDueDate, DUEDATE) => {
	var now = new Date();
	let previous;

	if (now.getDate() >= 23) {
		let date = new Date(now.getFullYear(), now.getMonth(), 23);
		previous = date.toLocaleString('default', { month: 'long' });
		setPrevDueDate(previous + " " + DUEDATE);
	} else {
		let date_ = new Date(now.getFullYear(), now.getMonth() - 1, 23);
		previous = date_.toLocaleString('default', { month: 'long' });
		setPrevDueDate(previous + " " + DUEDATE);
	}
}

export { getPreviousDate, getDueDate }

