import React from 'react';
import './confirmPay.css';

class ConfirmPay extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className="popup-btns">
                    <h1>{this.props.text}</h1>
                </div>
                <div className="popup-btns">
                    <button onClick={this.props.closePopup}> <i className="fas fa-money-bill-alt"></i> Pay Bill</button>
                    <button onClick={this.props.closePopup}> <i className="fas fa-times"></i>  Cancel</button>
                </div>
            </div>
        );
    }
}

export default ConfirmPay;
