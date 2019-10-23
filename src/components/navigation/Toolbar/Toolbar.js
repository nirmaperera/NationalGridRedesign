import React, { Component } from "react";
import { Link } from "react-router-dom";

import './toolbar.css';
import ToggleBtn from '../sideDrawer/ToggleBtn';
import logo from '../../../assets/images/logo.jpg';
import SideDrawer from "../sideDrawer/SideDrawer";


class Toolbar extends Component {
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
        console.log("this.state.success in toolbar is ", this.state.success);
        let loginStat = this.state.success;

        if (loginStat === true) {
            return <ul>
                <li><a href='/'>Account/Billing </a> <i class="fa fa-angle-down"></i>
                    <ul className="dropdown">
                        <li><a href='#'>My Account</a></li>
                        <li><a href='#'>View My Bills</a></li>
                        <li><a href='#'>Request Copy of Current Bill</a></li>
                        <li><a href='#'>Running Balance</a></li>
                        <li><a href='#'>Add a Account</a></li>
                        <li><a href='#'>Choose a Different Account</a></li>
                    </ul>
                </li>
                <li><a href='/'>Payments</a> <i class="fa fa-angle-down"></i>
                    <ul className="dropdown">
                        <li><a href='#'>Make a Payment</a></li>
                        <li><a href='#'>Make a credit or debit payment</a></li>
                        <li><a href='#'>E@sy Bill</a></li>
                        <li><a href='#'>Direct Pay</a></li>
                        <li><a href='#'>Balanced Bill</a></li>
                    </ul>
                </li>
                <li><a href="/">Services</a> <i class="fa fa-angle-down"></i>
                    <ul className="dropdown">
                        <li><a href='#'>Enter Meter</a></li>
                        <li><a href='#'>Start or Stop Service</a></li>
                        <li><a href='#'>Manage Orders</a></li>
                        <li><a href='#'>Usage History</a></li>
                        <li><a href='#'>Enroll in National Grid Paperless</a></li>
                    </ul>
                </li>
                <li><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>
                <li onClick={this.handleClick}><Link to="/">Logout</Link></li>

            </ul>
        }
        else {
            return <ul>
                <li className="home-links"><a href='https://online.nationalgridus.com/signup/KSE_feedback_pop.html'>Leave Feedback</a></li>
                <li className="home-links"><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>
            </ul>
        }
    }
    render() {
        return (
            <header className="navbar">
                <nav className="navbar-navigation">

                    <div className="navbar-logo">
                        <a href="https://www.nationalgridus.com/NY-Home/Default.aspx"><img src={logo} width="170" height="50" alt="logo" /></a>
                    </div>

                    <div className="spacer"></div>
                    <div className="navbartoggle-btn">
                        <ToggleBtn click={this.props.drawerClickHandler} />
                    </div>
                    <div className="navbar-items">
                        <ul>
                            {this.toggleNavbar()}
                        </ul>
                    </div>
                </nav>
            </header>

        );

    }
}

export default Toolbar;
