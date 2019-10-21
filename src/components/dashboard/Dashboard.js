import React, { Component } from 'react'
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
            <div className="message"><h2>Hello there! </h2>

                <Toolbar success={this.state.success} />
                <SideDrawer success={this.state.success} />
            </div>


        )
    }
}


export default withRouter(Dashboard);

