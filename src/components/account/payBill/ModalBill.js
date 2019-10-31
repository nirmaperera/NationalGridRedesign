import React from 'react'
import './modal.css';

function ModalBill() {
	return (
		<div>
			<h2>How would You like to Pay?</h2>
			<div className="paymentMethod">
				<select  >
					<label>Payment methods</label>
					<option value="m1">Payment Method</option>
					<option value="m2">Last Bank Account used ending in <span>3432</span></option>
					<option value="m3">Bank Account (Checking)</option>
					<option value="m4">Bank Account(Savings)</option>
					<option value="m5">Credit or Debit Card (fees may apply)</option>
				</select>
			</div>

			<div className="enrollDirect">
				<input type="checkbox"></input>Enroll
				<div> I would like to enroll this account in the Direct Payment Program. I understand that starting next month, the full amount I owe will be deducted automatically from this account</div>
			</div>

			<div className="paymentDate">
				<input type="date"></input>
			</div>

			<div className="paymentAmount">
				<select  >
					<label>Payment Amount</label>
					<option value="m1">Balanced Due</option>
					<option value="m2">Other Amount</option>
				</select>

				<label>Payment Amount</label>
				<input type="number" placeholder="$239.23"></input>
			</div>

			<div className="paymentSummary">
				<div>Payment Amount: <span> $231.23</span></div>
				<button type="submit"><i className="fas fa-money-bill-alt"></i>Pay Bill</button>
			</div>
		</div>

	);
}

export default ModalBill;
