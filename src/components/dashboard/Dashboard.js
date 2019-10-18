import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './dashboard.css';

class Dashboard extends Component {

    componentDidMount() {
        document.title = 'Dashboard | National Grid';
    }

    render() {
        return (
            <div className="message"><h2>Hello {this.props.location.state.firstName} {this.props.location.state.lastName} </h2></div>

        )
    }
}


export default withRouter(Dashboard);

