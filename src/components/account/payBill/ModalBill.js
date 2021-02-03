import React, { Component } from 'react'
import './modal.scss';
import ConfirmPay from './ConfirmPay';

class ModalBill extends Component {
	constructor(props) {
		super(props);

		this.state = {
			paymentMethod: "Last Bank Account used ending in 2312",
			enrollDirect: false,
			paymentDate: '',
			paymentForm: "Balanced Due",
			totalAmount: this.props.balancedDue, // amount paid by user
			finalPayment: this.props.balancedDue, //difference BalanceDue - totalPayment
			remainingBalance: 0,
			paidBill: false,
			showModal: true

		}
	}

	handleMethod = (event) => {
		this.setState({
			paymentMethod: event.target.value
		});

		console.log('this.state.paymentMethod', this.state.paymentMethod);

	}
	handleAmount = (event) => {
		if (event.target.value === 'Other Amount') {
			this.totalAmount.value = "";
			this.finalPayment.value = "";
		}
		this.setState({
			paymentForm: event.target.value
		}, () => {
			console.log('this.state.paymentForm', this.state.paymentForm);
		});



	}
	handleInput = (event) => {
		console.log(event.target.value);

		this.setState({
			[event.target.name]: event.target.value
		}, () => {
			console.log(this.state.totalAmount);
		});


		this.setState({ finalPayment: this.state.totalAmount });
	}

	handleDate = (event) => {
		this.setState({ paymentDate: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault();


		let remainingBalance = Math.round((this.props.balancedDue - this.state.finalPayment) * 100) / 100;
		console.log('remaing balance', remainingBalance);
		this.setState({
			remainingBalance: remainingBalance,
			balancedDue: remainingBalance,
			showModal: false
		})

		this.togglePopup();
	}

	togglePopup() {
		this.setState({
			paidBill: !this.state.paidBill,
			showModal: false
		});
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
						<select className="payAmount" onChange={this.handleAmount} value={this.state.paymentForm}>
							<option value="Balanced Due">Balanced Due</option>
							<option value="Other Amount">Other Amount</option>
						</select>
						<div className="payAmount">
							<label>Payment Amount:</label>
							{this.state.paymentForm === 'Balanced Due' ? <input type="number" step={"any"} name="totalAmount" readOnly={true} value={this.props.balancedDue} onChange={this.handleInput} ref={el => this.totalAmount = el} ></input> :
								<input type="number" step={"any"} name="totalAmount"
									onChange={this.handleInput} ref={el => this.totalAmount = el} ></input>
							}

						</div>
					</div>

					<div className="paymentSummary">
						<div><label>Total Payment Amount: $</label>
							{this.state.paymentForm === 'Balanced Due' ?
								<input type="number" readOnly={true} value={this.props.balancedDue} ref={el => this.finalPayment = el}></input>
								: <input type="number" readOnly={true} value={this.state.totalAmount} ref={el => this.finalPayment = el}></input>
							}
						</div>
						<div className="paymentSubmit">
							<input type="submit" value="Pay Bill" ></input>
						</div>
					</div>
				</form>
				{this.state.paidBill ?
					<ConfirmPay
						text={["The payment of ", <strong>{this.state.finalPayment}</strong>, " will be paid on ", <strong>{this.state.paymentDate}</strong>, " from ", <strong>{this.state.paymentMethod}</strong>]}
						closePopup={this.togglePopup.bind(this)}
						remainingBalance={this.state.remainingBalance}
						setremainingBalance={this.props.setremainingBalance}
						handleClose={this.props.handleClose}

					/>

					: null
				}
			</>




		);
	}
}

function getDate() {
	var today = new Date();

	if (today.getDate() <= 9) {
		let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + 0 + today.getDate();
		return date;
	}
	else {
		let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		return date;

	}
}

export default ModalBill;
