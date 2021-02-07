import React, { Component } from 'react'
import './modal.scss';
import ConfirmPay from './ConfirmPay';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class ModalBill extends Component {
	constructor(props) {
		super(props);

		this.state = {
			paymentMethod: "Last Bank Account used ending in 2312",
			enrollDirect: false,
			paymentDate: '',
			paymentForm: "Balanced Due",
			totalAmount: 0, // amount paid by user
			finalPayment: this.props.balancedDue, //difference BalanceDue - totalPayment
			remainingBalance: 0.00,
			paidBill: false,
			showModal: true

		}
	}

	handleMethod = (event) => {
		this.setState({
			paymentMethod: event.target.value
		});
	}

	handlePaymentForm = (event) => {
		this.setState({
			paymentForm: event.target.value
		});

		if (event.target.value === 'Balanced Due') {
			this.setState({
				finalPayment: this.props.balancedDue,
				totalAmount: this.props.balancedDue
			})
		}
	}

	handleInput = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleDate = (event) => {
		this.setState({ paymentDate: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let remainingBalance = Math.round((this.props.balancedDue - this.state.finalPayment) * 100) / 100;

		this.setState({
			remainingBalance: remainingBalance,
			showModal: false
		})
		if (this.state.totalAmount > this.props.balancedDue) {
			NotificationManager.error('Amount cannot be greater than balance due', 'Payment Error',)
		} else if (this.state.totalAmount === '0') {
			NotificationManager.warning('payment must be greater 0', 'Payment Warning',)
		} else {
			this.togglePopup();
		}


	}

	togglePopup() {
		this.setState({
			paidBill: !this.state.paidBill,
			showModal: false
		});
	}

	handlePayAmount = (event) => {
		if (this.state.paymentForm === 'Other Amount') {
			this.setState({
				totalAmount: event.target.value,
				finalPayment: event.target.value
			})
		}
	}
	render() {
		const { enrollDirect } = this.state; /*Toggle enroll direct */

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
				<form onSubmit={this.handleSubmit}>
					<h2 className="modal-title">How Would You like to Pay?</h2>

					<div className="paymentMethod">
						<select className="paymentSelect" onChange={this.handleMethod} value={this.state.paymentMethod}>
							<option value="Last Bank Account used ending in 2312">Last Bank Account used ending in 2312</option>
							<option value="Bank Account (Checking)">Bank Account (Checking)</option>
							<option value="Bank Account (Savings) ">Bank Account(Savings)</option>
							<option value="Credit or Debit Card (fees may apply)">Credit or Debit Card (fees may apply)</option>
						</select>
					</div>

					<div className="enrollDirectPay">
						<label className="enrollDirect">
							<div className="itemsDirect"> Enroll
							<input type="checkbox" value={this.state.enrollDirect} onClick={() => this.setState({ enrollDirect: !enrollDirect })} />
								<span className="checkmark"></span>
							</div>
						</label>

						<div className="enrollDirect"> I would like to enroll this account in the Direct Payment Program. I understand that starting next month, the full amount I owe will be deducted automatically from this account</div>
					</div>

					<div className="paymentDate">
						<input type="date" min={today} value={this.state.paymentDate} onChange={this.handleDate} required></input>
					</div>

					<div className="paymentAmount">
						<select className="payAmount" onChange={this.handlePaymentForm} value={this.state.paymentForm}>
							<option value="Balanced Due">Balanced Due</option>
							<option value="Other Amount">Other Amount</option>
						</select>
						<div className="payAmount">
							<label>Payment Amount:</label>
							{this.state.paymentForm === 'Balanced Due' ? <input type="number" step={"any"} readOnly={true} value={this.props.balancedDue}></input> :
								<input type="number" value={this.state.totalAmount} onChange={this.handlePayAmount} ></input>
							}

						</div>
					</div>

					<div className="paymentSummary">
						<div><label>Total Payment Amount: $</label>
							{this.state.paymentForm === 'Balanced Due' ?
								<input type="number" readOnly={true} value={this.props.balancedDue} ></input>
								: <input type="number" readOnly={true} value={this.state.finalPayment} ></input>
							}
						</div>
						<div className="paymentSubmit">
							<input type="submit" value="Pay Bill" ></input>
						</div>
					</div>
				</form>
				{this.state.paidBill ?
					<ConfirmPay
						text={["The payment of ", <strong style={{ color: '#00148c' }}>{this.state.finalPayment}</strong>, " will be paid on ", <strong style={{ color: '#00148c' }}>{this.state.paymentDate}</strong>, " from ", <strong style={{ color: '#00148c' }}>{this.state.paymentMethod}</strong>]}
						closePopup={this.togglePopup.bind(this)}
						remainingBalance={this.state.remainingBalance}
						setremainingBalance={this.props.setremainingBalance}
						handleClose={this.props.handleClose}

					/>

					: null
				}
				<NotificationContainer />
			</>




		);
	}
}

export default ModalBill;
