import React from 'react'
import './modal.css';

function ModalBill() {
	return (
		<div>
			<h2 className="modal-title">How would You like to Pay?</h2>
			<div className="containerPay">
				<div className="paymentMethod">
					<select className="paymentSelect">
						<label>Payment methods</label>
						<option value="m1">Payment Method</option>
						<option value="m2">Last Bank Account used ending in <span>3432</span></option>
						<option value="m3">Bank Account (Checking)</option>
						<option value="m4">Bank Account(Savings)</option>
						<option value="m5">Credit or Debit Card (fees may apply)</option>
					</select>
					<i className="fas fa-arrow-down"></i>
				</div>

				<div className="enrollDirectPay">
					<label class="enrollDirect">
						<div className="itemsDirect">
							Enroll<input type="checkbox" />
							<span class="checkmark"></span>
						</div>
					</label>

					<div className="enrollDirect"> I would like to enroll this account in the Direct Payment Program. I understand that starting next month, the full amount I owe will be deducted automatically from this account</div>
				</div>
			</div>

			<div className="containerPay">
				<div className="paymentDate">
					<input type="date"></input>
					<i class="fas fa-calendar-alt"></i>
				</div>

				<div className="paymentAmount">
					<select className="payAmount">
						<label>Payment Amount</label>
						<option value="m1">Balanced Due</option>
						<option value="m2">Other Amount</option>
					</select>

					<div className="payAmount">
						<label>Payment Amount</label>
						<input type="number" placeholder="$235.65"></input>
					</div>
				</div>

			</div>



			<div className="paymentSummary">
				<div>Payment Amount: <span> $235.65</span></div>
				<div className="paymentSubmit">
					<button type="submit"><i className="fas fa-money-bill-alt"></i>Pay Bill</button>
				</div>
			</div>
		</div>

	);
}

export default ModalBill;
