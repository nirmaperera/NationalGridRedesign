import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './dashboard.css';

class Dashboard extends Component {

    componentDidMount() {
        document.title = 'Dashboard | National Grid';
    }

    render() {
        return (
            <div className="message"><h2>Hello there! </h2></div>

        )
    }
}


export default withRouter(Dashboard);

