import React from 'react';
import './confirmPay.scss';


class ConfirmPay extends React.Component {
	handleClose = () => {
		console.log(this.props)
		this.props.setremainingBalance(this.props.remainingBalance);
		localStorage.setItem('balance', this.props.remainingBalance);
		this.props.closePopup();

	}
	render() {
		return (

			<div className='popup animated slideInDown'>
				<div className="popup-content">
					<h1>{this.props.text}</h1>
					<h4 style={{ color: '#808CC6' }}>The remaining balance is <b style={{ color: '#fff' }}>${this.props.remainingBalance}</b></h4>
				</div>

				<div className="popup-btns">
					<button onClick={this.handleClose}>  Confirm <i className="fas fa-money-bill-alt"></i></button>
					<button onClick={this.props.closePopup}>   Cancel <i className="fas fa-times"></i></button>
				</div>
			</div>

		);
	}
}

export default ConfirmPay;
