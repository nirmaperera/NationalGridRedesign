import React, { Component } from "react";

import './toolbar.css';
import ToggleBtn from '../sideDrawer/ToggleBtn';
import logo from '../../../assets/images/logo.jpg';


class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false
        }
    }

    toggleNavbar() {
        switch (this.state.success) {
            case false:
                return <ul>
                    <li><a href='https://online.nationalgridus.com/signup/KSE_feedback_pop.html'>Leave Feedback</a></li>
                    <li><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>
                </ul>
            case true:
                return <ul>

                    <li><a href='/'>Account/Billing</a></li>
                    <li><a href='/'>Payments</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>

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
