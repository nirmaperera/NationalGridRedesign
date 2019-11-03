import React, { Component } from 'react'
import './modal.css';
import ConfirmPay from './ConfirmPay';

class ModalBill extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paymentMethod: "Last Bank Account used ending in 2312",
			enrollDirect: false,
			paymentDate: "",
			paymentAmount: "Balanced Due",
			totalAmount: "235.65",
			finalPayment: "",
			BalancedDue: "235.65",
			paidBill: false,
			showModal: false
		}
	}

	componentDidMount() {
		let amount = this.state.totalAmount;
		localStorage.setItem('balance', amount);
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
			paymentAmount: event.target.value
		});

		console.log('this.state.paymentAmount', this.state.paymentAmount);

	}
	handleInput = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(event.target.value);

		this.setState({ finalPayment: this.state.totalAmount });

	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('total payment:', this.state.totalAmount);
		console.log('payment method:', this.state.paymentMethod);
		console.log('enroll direct?:', this.state.enrollDirect);
		console.log('payment date:', this.state.paymentDate);
		console.log('balanced or other:', this.state.paymentAmount);
		console.log('final Payment:', this.state.finalPayment);

		this.togglePopup();
	}

	togglePopup() {
		this.setState({
			paidBill: !this.state.paidBill
		});
	}

	render() {
		const { enrollDirect } = this.state; /*Toggle enroll direct */
		return (
			<form onSubmit={this.handleSubmit}>
				<h2 className="modal-title">How Would You like to Pay?</h2>

				<div className="paymentMethod">
					<select className="paymentSelect" onChange={this.handleMethod} value={this.state.paymentMethod}>
						<label>Payment methods</label>
						<option value="Last Bank Account used ending in 2312">Last Bank Account used ending in 2312</option>
						<option value="Bank Account (Checking)">Bank Account (Checking)</option>
						<option value="Bank Account(Savings)">Bank Account(Savings)</option>
						<option value="Credit or Debit Card (fees may apply)">Credit or Debit Card (fees may apply)</option>
					</select>
				</div>

				<div className="enrollDirectPay">
					<label class="enrollDirect">
						<div className="itemsDirect"> Enroll
							<input type="checkbox" value={this.state.enrollDirect} onClick={() => this.setState({ enrollDirect: !enrollDirect })} />
							<span class="checkmark"></span>
						</div>
					</label>
					<div className="enrollDirect"> I would like to enroll this account in the Direct Payment Program. I understand that starting next month, the full amount I owe will be deducted automatically from this account</div>
				</div>

				<div className="paymentDate">
					<input type="date" name="paymentDate" onChange={this.handleInput} required></input>
					<i className="fas fa-calendar-alt" ></i>
				</div>

				<div className="paymentAmount">
					<select className="payAmount" onChange={this.handleAmount} value={this.state.paymentAmount}>
						<label>Payment Amount</label>
						<option value="Balanced Due">Balanced Due</option>
						<option value="Other Amount">Other Amount</option>
					</select>
					<div className="payAmount">
						<label>Payment Amount:</label>
						<input type="number" step={0.1} name="totalAmount" defaultValue={this.state.BalancedDue} onChange={this.handleInput} ref={el => this.totalAmount = el} ></input>
					</div>
				</div>

				<div className="paymentSummary">
					<div>Payment Amount:$ <input type="number" readOnly={true} value={this.state.totalAmount} ref={el => this.finalPayment = el}></input></div>
					<div className="paymentSubmit">
						<input type="submit" value="Pay Bill" ></input>
					</div>
				</div>


				{this.state.paidBill ?
					<ConfirmPay
						text={["The payment of ", <strong>{this.state.totalAmount}</strong>, " will be paid on ", <strong>{this.state.paymentDate}</strong>, " from ", <strong>{this.state.paymentMethod}</strong>]}
						closePopup={this.togglePopup.bind(this)}
						BalancedDue={this.state.BalancedDue}
						finalPayment={this.state.finalPayment}
					/>

					: null
				}

			</form>

		);
	}
}

export default ModalBill;
