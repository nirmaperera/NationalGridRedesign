import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sideDrawer.css";

import { connect } from "react-redux";
import { sign_out } from "../../../actions/authAction";

class SideDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogged: false
		}
	}

	componentDidMount() {
		this.setState({
			isLogged: this.props.isLogged
		});
	}

	handleClick = () => {
		this.setState({
			isLogged: false
		}, () => {
			this.props.sign_out();

		})
	}

	toggleDropdown() {
		let loginStat = this.props.isLogged;
		const fName = localStorage.getItem('firstName');
		const lName = localStorage.getItem('lastName');

		if (loginStat === true) {
			return <ul>
				<li><a href='/'>Account/Billing </a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown-side">
						<li><Link to="/dashboard">Dasboard</Link></li>
						<li><a href='/'>View My Bills</a></li>
						<li><a href='/'>Request Copy of Current Bill</a></li>
						<li><a href='/'>Running Balance</a></li>
						<li><a href='/'>Add a Account</a></li>
						<li><a href='/'>Choose a Different Account</a></li>
					</ul>
				</li>
				<li><a href='/'>Payments</a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown-side">
						<li><Link to="/paybill">Make a Payment</Link></li>
						<li><a href='/'>Make a credit or debit payment</a></li>
						<li><a href='/'>E@sy Bill</a></li>
						<li><a href='/'>Direct Pay</a></li>
						<li><a href='/'>Balanced Bill</a></li>
					</ul>
				</li>
				<li><a href="/">Services</a> <i className="fa fa-angle-down"></i>
					<ul className="dropdown-side">
						<li><a href='/'>Enter Meter</a></li>
						<li><a href='/'>Start or Stop Service</a></li>
						<li><a href='/'>Manage Orders</a></li>
						<li><a href='/'>Usage History</a></li>
						<li><a href='/'>Enroll in National Grid Paperless</a></li>
					</ul>
				</li>
				<li><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>
				<li>Hello, {fName} {lName}
					<ul className="dropdown-side">
						<li><Link to="/Profile">Profile</Link></li>
						<li onClick={this.handleClick}><Link to="/">Logout</Link></li>
					</ul>
				</li>
			</ul >
		}
		else {
			return <ul>
				<li><a href='https://online.nationalgridus.com/signup/KSE_feedback_pop.html'>Leave Feedback</a></li>
				<li><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>
			</ul>
		}
	}

	render() {

		let drawerClasses = 'side-drawer';
		if (this.props.show) {
			drawerClasses = 'side-drawer open';
		}
		return (
			<nav className={drawerClasses}>
				{this.toggleDropdown()}
			</nav>
		)
	}

};

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}
export default connect(mapStateToProps, { sign_out })(SideDrawer);
