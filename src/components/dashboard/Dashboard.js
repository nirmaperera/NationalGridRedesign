import React, { Component } from 'react'
import contact from '../../assets/images/contact.png';
import { withRouter } from 'react-router-dom';

import './dashboard.css';
import Toolbar from '../navigation/Toolbar/Toolbar';
import SideDrawer from '../navigation/sideDrawer/SideDrawer';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: true
        }
    }

    componentDidMount() {
        document.title = 'Dashboard | National Grid';
        console.log('success in dashboard is ', this.state.success);

    }

    render() {
        return (
            <div className="containerDashboard" style={{ height: '100%' }}>
                <Toolbar success={this.state.success} />
                <div className="first-dash">
                    <h4> Account status</h4>
                    <h4> Account Number</h4>
                    <h2> $235.65</h2>
                    <h3> balanced due on <span>Date</span></h3>
                    <button> Pay this Bill</button>
                    <button> View this Bill</button>
                    <p> Your previous bill<span> Date</span> was <span> Amount</span> </p>

                </div>

                <div className="second-dash">
                    <div className="second-dash-a">
                        <h3 className="dash-title">Service Address</h3>

                    </div>

                    <div className="second-dash-b">
                        <h3 className="dash-title">Has your contact info changed?</h3>
                        <img src={contact} width="200" height="100" alt="logo" />
                        <button>Update Now</button>

                    </div>

                </div>

            </div >


        )
    }
}


export default withRouter(Dashboard);

