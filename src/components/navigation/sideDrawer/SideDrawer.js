import React from 'react';
import "./sideDrawer.css";

const SideDrawer = props => {
	let drawerClasses = ['side-drawer'];
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<ul>
				<li><a href="https://online.nationalgridus.com/signup/KSE_feedback_pop.html">Leave Feedback</a></li>
				<hr />
				<li><a href="https://www.nationalgridus.com/contact-us">Contact</a></li>
			</ul>
		</nav>

	);
};


export default SideDrawer;
