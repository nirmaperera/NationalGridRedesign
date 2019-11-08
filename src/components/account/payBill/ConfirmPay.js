import React from 'react';
import './confirmPay.scss';

class ConfirmPay extends React.Component {

	handleClose = () => {
		console.log('form submitting')
		window.location.reload();

	}
	render() {
		return (
			<div className='popup animated slideInDown'>
				<div className="popup-btns">
					<h1>{this.props.text}</h1>
				</div>
				<div className="popup-btns">
					<button onClick={this.handleClose}> <i className="fas fa-money-bill-alt"></i> Pay Bill</button>
					<button onClick={this.props.closePopup}> <i className="fas fa-times"></i>  Cancel</button>
				</div>
			</div>
		);
	}
}

export default ConfirmPay;
