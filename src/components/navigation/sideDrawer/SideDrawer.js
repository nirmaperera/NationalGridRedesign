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

		if (loginStat === true) {
			return <ul>
				<li><a href='/'>Account/Billing</a></li>
				<li><a href='/'>Payments</a></li>
				<li><a href="/">Services</a></li>
				<li><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>
				<li onClick={this.handleClick}><Link to="/">Logout</Link></li>

			</ul>
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
