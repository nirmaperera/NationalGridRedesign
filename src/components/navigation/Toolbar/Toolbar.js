import React from 'react';

import './toolbar.css';
import ToggleBtn from '../sideDrawer/ToggleBtn';
import logo from '../../../assets/images/logo.jpg';




const Toolbar = (props) => (
    <header className="navbar">
        <nav className="navbar-navigation">

            <div className="navbar-logo">
                <a href="https://www.nationalgridus.com/NY-Home/Default.aspx"><img src={logo} width="170" height="50" alt="logo" /></a>
            </div>

            <div className="spacer"></div>
            <div className="navbartoggle-btn">
                <ToggleBtn click={props.drawerClickHandler} />
            </div>
            <div className="navbar-items">
                <ul>
                    <li><a href='https://online.nationalgridus.com/signup/KSE_feedback_pop.html'>Leave Feedback</a></li>
                    <li><a href='https://www.nationalgridus.com/contact-us'>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

);

export default Toolbar;
