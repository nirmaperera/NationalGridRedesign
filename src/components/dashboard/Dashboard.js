import React, { Component } from 'react'
import { connect } from 'react-redux';

import contact from '../../assets/images/contact.png';
import greenlight from '../../assets/images/greenlight.png';
import './dashboard.css';

class Dashboard extends Component {

	componentDidMount() {
		document.title = 'Dashboard | National Grid';
		console.log('this login state in dashboard', this.props.isLogged);
	}

	render() {
		return (
			<div className="containerDashboard" style={{ height: '100%' }}>
				<div className="first-dash">
					<div className="account-info">
						<h4> Account Status: <img src={greenlight} width="20" height="20" alt="greenlight" /></h4>
						<h4> Account Number: <span>34234464</span></h4>
					</div>
					<div className="info">
						<h1> $235.65</h1>
						<h4> balanced due on <span>November 20</span></h4>
						<button> <i class="fas fa-money-bill-alt"></i> Pay this Bill</button>
						<button> <i class="fas fa-file-invoice-dollar"></i> View Current Bill</button>
						<p> Your previous bill on<span> October 20</span> was <span> $130.52</span> </p>
					</div>
				</div>

				<div className="second-dash">
					<div className="second-dash-a">
						<h3 className="dash-title">Service Address</h3>
						<div className="info">
							<label>Street: <span> 232 Eli Street</span> </label>
							<label>City: <span>New York</span> </label>
							<label>State:  <span>New York</span></label>
							<label>zipcode: <span>23923</span> </label>
						</div>
					</div>
					<div className="second-dash-b">
						<h3 className="dash-title">Has your contact info changed?</h3>
						<div className="info">
							<img src={contact} width="200" height="100" alt="houses-bg" />
							<button>Update Info</button>
						</div>
					</div>
				</div>
			</div >
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default connect(mapStateToProps)(Dashboard);


