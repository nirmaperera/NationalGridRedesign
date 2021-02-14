import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { NotificationManager } from 'react-notifications';

import ModalBill from '../account/payBill/ModalBill';
import Chart from '../chart/Chart';
import '../account/payBill/ModalBill';
import { getPreviousDate, getDueDate } from '../helpers/GetDate';

import contact from '../../assets/images/contact.png';
import greenlight from '../../assets/images/greenlight.png';
import './dashboard.scss';

const DUEDATE = '23';

const Dashboard = ({ isLogged }) => {
	const [showModal, setShowModal] = useState(false);
	const [balancedDue, setBalancedDue] = useState(250.52);
	const [dueDate, setDueDate] = useState("");
	const [prevDueDate, setPrevDueDate] = useState("");
	const [paperless, setPaperLess] = useState(true);
	const [directPay, setDirectPay] = useState(false);
	const [balanced, setBalanced] = useState(false);
	const firstRenderD = useRef(true);
	const firstRenderP = useRef(true);
	const firstRenderB = useRef(true);

	useEffect(() => {
		document.title = 'Dashboard | National Grid';
		window.scrollTo(0, 0)
		localStorage.setItem('balance', balancedDue);
		getDueDate(setDueDate, DUEDATE);
		getPreviousDate(setPrevDueDate, DUEDATE);

	}, [balancedDue, isLogged])

	useEffect(() => {
		if (firstRenderP.current) {
			firstRenderP.current = false;
			return;
		} else {
			if (paperless === false) {
				NotificationManager.warning('You have cancelled Paperless Billing', 'Billing Program Status Update')
			} else {
				NotificationManager.success('You are enrolled in Paperless Billing', 'Billing Program Status Update')
			}
		}

	}, [paperless])

	useEffect(() => {
		if (firstRenderB.current) {
			firstRenderB.current = false;
			return;
		} else {
			if (balanced === false) {
				NotificationManager.warning('You have cancelled Balanced Billing', 'Billing Program Status Update')
			} else {
				NotificationManager.success('You are enrolled in Balanced Billing', 'Billing Program Status Update')
			}
		}

	}, [balanced])

	useEffect(() => {
		if (firstRenderD.current) {
			firstRenderD.current = false;
			return;
		} else {
			if (directPay === false) {
				NotificationManager.warning('You have cancelled Direct Pay Billing', 'Billing Program Status Update')
			} else {
				NotificationManager.success('You are enrolled in Direct Pay Billing', 'Billing Program Status Update')
			}
		}
	}, [directPay])

	const hideModal = () => setShowModal(false);

	const setremainingBalance = (val) => setBalancedDue(val);

	const toggleBillingStatus = (content) => {
		if (content === 'Paperless Billing') {
			setPaperLess(!paperless)
		} else if (content === 'Balanced Billing') {
			setBalanced(!balanced)
		} else {
			setDirectPay(!directPay)
		}
	}

	return (
		<div className="containerDashboard" style={{ height: '100%' }}>
			<div className="first-dash">
				<div className="account-info">
					<h4> Account Status: <img src={greenlight} width="20" height="20" alt="greenlight" /></h4>
					<h4> Account Number: <span> 3423446491</span></h4>
				</div>

				<div className="info">
					<h1 className="animated zoomIn"> ${balancedDue}</h1>
					<h4 className="animated slideInDown"> balanced due on <span>{dueDate}</span></h4>
					<button className="animated slideInUp" type="button" onClick={() => setShowModal(true)}> Pay This Bill <i className="fas fa-money-bill-alt"></i></button>
					<button className="animated slideInUp"> View Your Bill <i className="fas fa-file-invoice-dollar"></i></button>
					<p className="animated pulse"> Your previous bill on {prevDueDate} was <span>$226.97</span> </p>
				</div>

				<div className="billing">
					<h4>Billing Program Status</h4>
					<div className="billing__row">
						<p> Paperless Billing </p>
						<span style={{ cursor: "pointer" }} onClick={() => toggleBillingStatus("Paperless Billing")}>
							{paperless ? <i className="fas fa-check" style={{ color: "white" }}></i> :
								<span><i className="fas fa-times" ></i> </span>
							}

						</span>
					</div>

					<div className="billing__row">
						<p> Balanced Billing </p>
						<span style={{ cursor: "pointer" }} onClick={() => toggleBillingStatus("Balanced Billing")}>
							{balanced ? <i className="fas fa-check" style={{ color: "white" }}></i> :
								<span><i className="fas fa-times"></i> </span>
							}
						</span>
					</div>
					<div className="billing__row">
						<p> Direct Billing </p>
						<span style={{ cursor: "pointer" }} onClick={() => toggleBillingStatus("Direct Billing")}>
							{directPay ? <i className="fas fa-check" style={{ color: "white" }}></i> :
								<span><i className="fas fa-times"></i> </span>
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
							<Link style={{ textDecoration: 'none' }} to="/profile"> <button>Update Info <i className="far fa-edit"></i></button></Link>
						</div>
					</div>
				</div>
			</div>

			<Modal showModal={showModal} handleClose={hideModal}>
				<ModalBill balancedDue={balancedDue} setremainingBalance={setremainingBalance} handleClose={hideModal} />
			</Modal>
		</div>
	)
}

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

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default connect(mapStateToProps)(Dashboard);
