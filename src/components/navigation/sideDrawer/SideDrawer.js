import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sideDrawer.css";


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
	}

	toggleNavbar() {
		console.log("this.state.success in sideDrawer is ", this.state.success);
		let loginStat = this.state.success;

		if (loginStat === true) {
			return <ul>
				<li><a href='/'>Account/Billing</a></li>
				<li><a href='/'>Payments</a></li>
				<li><a href="/">Services</a></li>
				<li><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>
				{/* <Link> Log out</Link> */}

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
				{this.toggleNavbar()}
			</nav>

		);

	}

};








export default SideDrawer;
