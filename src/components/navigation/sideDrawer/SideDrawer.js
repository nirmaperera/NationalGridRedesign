import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sideDrawer.css";

import { connect } from "react-redux";
import { delToken } from "../../../actions/authAction";


class SideDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			success: false
		}
	}

	componentDidMount() {
		this.setState({
			success: this.props.success
		})
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			success: nextProps.success
		})

	}

	handleClick = () => {
		this.setState({
			success: false
		});
		this.props.delToken();
	}

	toggleDropdown() {
		console.log('IN SIDE DRAWER');
		console.log("this.state.success in sideDrawer is ", this.props.success);

		let loginStat = this.props.success;

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
		success: state.success
	}
}
export default connect(mapStateToProps, { delToken })(SideDrawer);
