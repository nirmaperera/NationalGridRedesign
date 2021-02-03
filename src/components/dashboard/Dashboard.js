import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import ModalBill from '../account/payBill/ModalBill';
import Chart from '../chart/Chart';

import contact from '../../assets/images/contact.png';
import greenlight from '../../assets/images/greenlight.png';
import './dashboard.scss';
import '../account/payBill/ModalBill';


const Modal = ({ handleClose, showModal, children }) => {
	const showHideClassName = showModal ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<section className="modal-main animated bounceInDown">
				<button className="close-modal" onClick={handleClose}> <i className="fas fa-times"></i></button>
				{children}
			</section>
		</div>
	);
};

const DUEDATE = '23';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			balancedDue: 250.52,
			dueDate: "",
			prevdueDate: '',
			paperless: true,
			directPay: false,
			balanced: false,
			confirm: false

		};
	}


	showModal = () => {
		this.setState({ showModal: true });
	};

	hideModal = () => {
		this.setState({ showModal: false });
	};

	setremainingBalance = (val) => {
		this.setState({
			balancedDue: val
		})
	}

	getDueDate = () => {
		var now = new Date();
		var current;

		if (now.getDate() <= 23) {
			var date = new Date(now.getFullYear(), now.getMonth(), 23);
			current = date.toLocaleString('default', { month: 'long' });
			this.setState({ dueDate: current + " " + DUEDATE })
		} else {
			var date = new Date(now.getFullYear(), now.getMonth() + 1, 23);
			current = date.toLocaleString('default', { month: 'long' });
			this.setState({ dueDate: current + " " + DUEDATE })

		}
	}

	getPreviousDate = () => {
		var now = new Date();
		let previous;

		if (now.getDate() >= 23) {
			var date = new Date(now.getFullYear(), now.getMonth(), 23);
			previous = date.toLocaleString('default', { month: 'long' });
			this.setState({ prevdueDate: previous + " " + DUEDATE })
		} else {
			let date = new Date(now.getFullYear(), now.getMonth() - 1, 23);
			previous = date.toLocaleString('default', { month: 'long' });
			this.setState({ prevdueDate: previous + " " + DUEDATE })

		}
	}

	componentDidMount() {
		document.title = 'Dashboard | National Grid';
		window.scrollTo(0, 0)
		console.log('this login state in dashboard', this.props.isLogged);
		localStorage.setItem('balance', this.state.balancedDue);
		this.getDueDate();
		this.getPreviousDate();

	}

	render() {

		const { showModal, balancedDue, dueDate, prevdueDate, paperless, directPay, balanced } = this.state;

		return (
			<div className="containerDashboard" style={{ height: '100%' }}>
				<div className="first-dash">
					<div className="account-info">
						<h4> Account Status: <img src={greenlight} width="20" height="20" alt="greenlight" /></h4>
						<h4> Account Number: <span> 3423446491</span></h4>
					</div>

					<div className="info">
						<h1 className="animated zoomIn"> ${this.state.balancedDue}</h1>
						<h4 className="animated slideInDown"> balanced due on <span>{dueDate}</span></h4>
						<button className="animated slideInUp" type="button" onClick={this.showModal}> Pay This Bill <i className="fas fa-money-bill-alt"></i></button>
						<button className="animated slideInUp"> View Your Bill <i className="fas fa-file-invoice-dollar"></i></button>
						<p className="animated pulse"> Your previous bill on {prevdueDate} was <span>$226.97</span> </p>
					</div>

					<div className="billing">
						<h4>Billing Program Status</h4>
						<div className="billing__row">
							<p> Paperless Billing </p>
							<span onClick={() => this.setState({ paperless: !this.state.paperless, confirm: true })}>
								{paperless ? <i class="fas fa-check" style={{ color: "white" }}></i> :
									<span><i class="fas fa-times" ></i> </span>
								}

							</span>
						</div>

						<div className="billing__row">
							<p> Balanced Billing </p>
							<span onClick={() => this.setState({ balanced: !this.state.balanced })}>
								{balanced ? <i class="fas fa-check" style={{ color: "white" }}></i> :
									<span><i class="fas fa-times"></i> </span>
								}
							</span>
						</div>
						<div className="billing__row">
							<p> Direct Billing </p>
							<span onClick={() => this.setState({ directPay: !this.state.directPay })}>
								{directPay ? <i class="fas fa-check" style={{ color: "white" }}></i> :
									<span><i class="fas fa-times"></i> </span>
								}
							</span>
						</div>
					</div>
				</div>

				<div className="second-dash">
					<div className="second-dash-a animated pulse">
						<Chart />

					</div>
					<div className="second-dash-a_sub" style={{ display: "flex" }}>
						<div className="second-dash-b">
							<h3 className="dash-title">Service Address</h3>
							<div className="info">
								<label><b>Street: </b><span> 232 Eli Street</span> </label><br />
								<label><b>City: </b><span>New York</span> </label><br />
								<label><b>State:</b><span>New York</span></label><br />
								<label><b>Zip Code:</b><span>23923</span> </label><br />
							</div>

							<div style={{ display: 'flex', marginTop: '10px' }}>
								<button className="stopServ">Stop Service <i className="fas fa-times"></i></button>
								<button className="transferServ">Transfer Service <i className="fas fa-angle-double-right"></i></button>
							</div>
						</div>


						<div className="second-dash-b">
							<h3 className="dash-title">Has your contact info changed?</h3>
							<div className="info">
								<img src={contact} width="200" height="100" alt="houses-bg" />
								<Link style={{ textDecoration: 'none' }} to="/profile"> <button>Update Info <i class="far fa-edit"></i></button></Link>
							</div>
						</div>
					</div>
				</div>

				<Modal showModal={showModal} handleClose={this.hideModal}>
					<ModalBill balancedDue={balancedDue} setremainingBalance={this.setremainingBalance} handleClose={this.hideModal} />
				</Modal>




			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default connect(mapStateToProps)(Dashboard);
