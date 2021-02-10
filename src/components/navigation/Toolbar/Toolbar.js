import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sign_out } from "../../../actions/authAction";
import ToggleBtn from '../sideDrawer/ToggleBtn';

import logo from '../../../assets/images/logo.jpg';
import './toolbar.scss';

const Toolbar = (props) => {
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		setIsLogged(props.isLogged);

	}, [])

	const handleClick = () => {
		setIsLogged(false);
		props.sign_out();
	}

	const toggleNavbar = () => {
		let loginStat = props.isLogged;
		const fName = localStorage.getItem('firstName');
		const lName = localStorage.getItem('lastName');

		if (loginStat === true) {
			return <ul>
				<li><a href='/'>Account/Billing </a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown">
						<li><Link to="/dashboard">Dashboard</Link></li>
						<li><a href='/dashboard'>View My Bills</a></li>
						<li><a href='/dashboard'>Request Copy of Current Bill</a></li>
						<li><a href='/dashboard'>Running Balance</a></li>
						<li><a href='/dashboard'>Add a Account</a></li>
						<li><a href='/dashboard'>Choose a Different Account</a></li>
					</ul>
				</li>
				<li><a href='/'>Payments</a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown">
						<li><a href='/dashboard'>Make a credit or debit payment</a></li>
						<li><a href='/dashboard'>E@sy Bill</a></li>
						<li><a href='/dashboard'>Direct Pay</a></li>
						<li><a href='/dashboard'>Balanced Bill</a></li>
					</ul>
				</li>
				<li><a href="/">Services</a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown">
						<li><a href='/dashboard'>Enter Meter</a></li>
						<li><a href='/dashboard'>Start or Stop Service</a></li>
						<li><a href='/dashboard'>Manage Orders</a></li>
						<li><a href='/dashboard'>Usage History</a></li>
						<li><a href='https://www.nationalgridus.com/MA-Home/Billing-Payments/Go-Paperless'>Enroll in National Grid Paperless</a></li>
					</ul>
				</li>
				<li><a href='/'>Contact</a></li>

				<li>Hello, {fName} {lName}<i className="fas fa-user-circle"></i>
					<ul className="dropdown">
						<li><Link to="/Profile">Profile</Link></li>
						<li onClick={handleClick}><Link to="/">Log Out <i className="fas fa-sign-out-alt"></i></Link></li>
					</ul>
				</li>
			</ul >
		}
		else {
			return <ul>
				<li className="home-links"><a href='/'>Leave Feedback</a></li>
				<li className="home-links"><a href='/'>Contact</a></li>
			</ul>
		}
	}
	return (
		<header className="navbar">
			<nav className="navbar-navigation">
				<div className="navbar-logo">
					<a href="https://www.nationalgridus.com/NY-Home/Default.aspx"><img className="animated slideInDown" src={logo} width="170" height="50" alt="logo" /></a>
				</div>
				<div className="spacer"></div>
				<div className="navbartoggle-btn">
					<ToggleBtn click={props.drawerClickHandler} />
				</div>
				<div className="navbar-items">
					<ul>
						{toggleNavbar()}
					</ul>
				</div>
			</nav>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default connect(mapStateToProps, { sign_out })(Toolbar);
