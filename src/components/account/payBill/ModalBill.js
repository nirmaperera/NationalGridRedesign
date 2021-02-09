import React, { useState } from 'react'

import ConfirmPay from './ConfirmPay';
import { NotificationManager } from 'react-notifications';

import 'react-notifications/lib/notifications.css';
import './modal.scss';

const ModalBill = ({ balancedDue, setremainingBalance, handleClose }) => {
	const [paymentMethod, setPaymentMethod] = useState("Last Bank Account used ending in 2312");
	const [enrollDirect, setEnrollDirect] = useState(false);
	const [paymentDate, setPaymentDate] = useState('');
	const [paymentForm, setPaymentForm] = useState("Balanced Due");
	const [totalAmount, setTotalAmount] = useState(0);
	const [finalPayment, setFinalPayment] = useState(balancedDue)
	const [remainingBalance, setRemainingBalance] = useState(0.00);
	const [paidBill, setPaidBill] = useState(false);
	const [showModal, setShowModal] = useState(true);

	const handlePaymentForm = (e) => {
		setPaymentForm(e.target.value);

		if (e.target.value === 'Balanced Due') {
			setFinalPayment(balancedDue);
			setTotalAmount(balancedDue)
		}
	}

	const handlePayAmount = (e) => {
		if (paymentForm === 'Other Amount') {
			setTotalAmount(e.target.value)
			setFinalPayment(e.target.value)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let remainingBalance = Math.round((balancedDue - finalPayment) * 100) / 100;

		setRemainingBalance(remainingBalance);
		setShowModal(false);

		if (totalAmount > balancedDue) {
			NotificationManager.error('Amount cannot be greater than balance due', 'Payment Error',)
		} else if (totalAmount === '0') {
			NotificationManager.warning('payment must be greater 0', 'Payment Warning',)
		} else {
			togglePopup();
		}
	}

	const togglePopup = () => {
		setPaidBill(!paidBill);
		setShowModal(false);
	}

	var today = new Date();
	var dd = today.getDate();
	if (dd < 10) {
		dd = '0' + dd
	}
	var mm = ("0" + (today.getMonth() + 1)).slice(-2)
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h2 className="modal-title">How Would You like to Pay?</h2>

				<div className="paymentMethod">
					<select className="paymentSelect" onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
						<option value="Last Bank Account used ending in 2312">Last Bank Account used ending in 2312</option>
						<option value="Bank Account (Checking)">Bank Account (Checking)</option>
						<option value="Bank Account (Savings) ">Bank Account(Savings)</option>
						<option value="Credit or Debit Card (fees may apply)">Credit or Debit Card (fees may apply)</option>
					</select>
				</div>

				<div className="enrollDirectPay">
					<label className="enrollDirect">
						<div className="itemsDirect"> Enroll
							<input type="checkbox" value={enrollDirect} onClick={() => setEnrollDirect(!enrollDirect)} />
							<span className="checkmark"></span>
						</div>
					</label>
					<div className="enrollDirect"> I would like to enroll this account in the Direct Payment Program. I understand that starting next month, the full amount I owe will be deducted automatically from this account</div>
				</div>

				<div className="paymentDate">
					<input type="date" min={today} value={paymentDate} onChange={e => setPaymentDate(e.target.value)} required></input>
				</div>

				<div className="paymentAmount">
					<select className="payAmount" onChange={handlePaymentForm} value={paymentForm}>
						<option value="Balanced Due">Balanced Due</option>
						<option value="Other Amount">Other Amount</option>
					</select>
					<div className="payAmount">
						<label>Payment Amount:</label>
						{paymentForm === 'Balanced Due' ? <input type="number" step={"any"} readOnly={true} value={balancedDue}></input> :
							<input type="number" value={totalAmount} onChange={handlePayAmount} ></input>
						}

					</div>
				</div>

				<div className="paymentSummary">
					<div><label>Total Payment Amount: $</label>
						{paymentForm === 'Balanced Due' ?
							<input type="number" readOnly={true} value={balancedDue} ></input>
							: <input type="number" readOnly={true} value={finalPayment} ></input>
						}
					</div>
					<div className="paymentSubmit">
						<input type="submit" value="Pay Bill" ></input>
					</div>
				</div>
			</form>

			{paidBill ?
				<ConfirmPay
					text={["The payment of ", <strong style={{ color: '#00148c' }}>{finalPayment}</strong>, " will be paid on ", <strong style={{ color: '#00148c' }}>{paymentDate}</strong>, " from ", <strong style={{ color: '#00148c' }}>{paymentMethod}</strong>]}
					closePopup={togglePopup.bind(this)}
					remainingBalance={remainingBalance}
					setremainingBalance={setremainingBalance}
					handleClose={handleClose}
				/>
				: null
			}
		</>
	)
}


export default ModalBill;
