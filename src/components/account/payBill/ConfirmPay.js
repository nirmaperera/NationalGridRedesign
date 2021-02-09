import React from 'react';
import './confirmPay.scss';

const ConfirmPay = ({ remainingBalance, setremainingBalance, closePopup, handleClose, text }) => {
	const handleClosePopUp = () => {
		setremainingBalance(remainingBalance);
		localStorage.setItem('balance', remainingBalance);
		closePopup();
		handleClose();
	}

	return (
		<div className='popup animated bounceInUp'>
			<div className="popup-content">
				<h1>{text}</h1>
				<h4 style={{ color: '#505dbd' }}>The remaining balance is <b style={{ color: '#00148c', fontSize: '2em' }}>${remainingBalance}</b></h4>
			</div>

			<div className="popup-btns">
				<button onClick={handleClosePopUp}> Confirm <i className="fas fa-money-bill-alt"></i></button>
				<button onClick={closePopup}>  Cancel <i className="fas fa-times"></i></button>
			</div>
		</div>
	);
}

export default ConfirmPay;
