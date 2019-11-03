import React, { Component } from 'react'

import { connect } from 'react-redux';

import ModalBill from '../account/payBill/ModalBill';

import contact from '../../assets/images/contact.png';
import greenlight from '../../assets/images/greenlight.png';
import './dashboard.css';
import '../account/payBill/ModalBill';;


const Modal = ({ handleClose, showModal, children }) => {
	const showHideClassName = showModal ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<button className="close-modal" onClick={handleClose}> <i className="fas fa-times"></i></button>
				{children}
			</section>
		</div>
	);
};

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			balancedDue: "235.65"
		};
	}

	showModal = () => {
		this.setState({ showModal: true });
	};

	hideModal = () => {
		this.setState({ showModal: false });
	};

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
						<h1> ${localStorage.getItem('balance')}</h1>
						<h4> balanced due on <span>November 20</span></h4>
						<button type="button" onClick={this.showModal}> <i className="fas fa-money-bill-alt"></i> Pay This Bill</button>
						<button> <i className="fas fa-file-invoice-dollar"></i> View Current Bill</button>
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
							<label>Zip Code: <span>23923</span> </label>
						</div>
						<div className="meter-read">
							<label>Next meter read: <span> November 22</span></label>
						</div>
						<div>
							<button className="stopServ">Stop Service <i className="fas fa-times"></i></button>
							<button className="transferServ">Transfer Service <i className="fas fa-angle-double-right"></i></button>
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

				<Modal showModal={this.state.showModal} handleClose={this.hideModal}>
					<ModalBill handleClose={this.hideModal} />
				</Modal>
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


