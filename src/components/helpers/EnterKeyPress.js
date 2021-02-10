const handleEnter = (e) => {
	if (e.keyCode === 13) {
		const form = e.target.form;
		const index = Array.prototype.indexOf.call(form, e.target);

		form.elements[index + 1].focus();
		e.preventDefault();
	}

}

export default handleEnter;