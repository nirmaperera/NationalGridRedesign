import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sign_out } from "../../../actions/authAction";

import "./sideDrawer.scss";

const SideDrawer = (props) => {
	const handleClick = () => props.sign_out();

	const toggleDropdown = () => {
		let loginStat = props.isLogged;
		const fName = localStorage.getItem('firstName');
		const lName = localStorage.getItem('lastName');

		if (loginStat === true) {
			return <ul>
				<li><a href='/dashboard'>Account/Billing </a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown-side">
						<li><Link to="/dashboard">Dashboard</Link></li>
						<li><a href='/dashboard'>View My Bills</a></li>
						<li><a href='/dashboard'>Request Copy of Current Bill</a></li>
						<li><a href='/dashboard'>Running Balance</a></li>
						<li><a href='/dashboard'>Add a Account</a></li>
						<li><a href='/dashboard'>Choose a Different Account</a></li>
					</ul>
				</li>
				<li><a href='/dashboard'>Payments</a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown-side">
						<li><a href='/dashboard'>Make a credit or debit payment</a></li>
						<li><a href='/dashboard'>E@sy Bill</a></li>
						<li><a href='/dashboard'>Direct Pay</a></li>
						<li><a href='/dashboard'>Balanced Bill</a></li>
					</ul>
				</li>
				<li><a href="/dashboard">Services</a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown-side">
						<li><a href='/dashboard'>Enter Meter</a></li>
						<li><a href='/dashboard'>Start or Stop Service</a></li>
						<li><a href='/dashboard'>Manage Orders</a></li>
						<li><a href='/dashboard'>Usage History</a></li>
						<li><a href='/dashboard'>Enroll in National Grid Paperless</a></li>
					</ul>
				</li>
				<li><a href='/'>Contact</a></li>
				<li>Hello, <span>{fName} {lName}</span>
					<ul className="dropdown-side">
						<li><Link to="/Profile">Profile</Link></li>
						<li onClick={handleClick}><Link to="/">Log Out <i className="fas fa-sign-out-alt"></i></Link></li>
					</ul>
				</li>
			</ul >
		}
		else {
			return <ul>
				<li><a href='/'>Leave Feedback</a></li>
				<li><a href='/'>Contact</a></li>
			</ul>
		}
	}

	let drawerClasses = 'side-drawer';

	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses}>
			{toggleDropdown()}
		</nav>
	)
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default connect(mapStateToProps, { sign_out })(SideDrawer);
