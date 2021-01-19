import React from 'react';
import Login from './login/Login';
import Register from './register/Register';
import ReactCardFlip from 'react-card-flip';


import top_grid from '../../assets/images/topGrid.png';
import bottom_grid from '../../assets/images/bottomGrid.png';

import '../credentials/login/login.scss';

class ToggleLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: false
		};
	}



	handleClick = (e) => {
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}


	render() {
		return (
			<div className="App">
				<img className="topGrid" width="300px" src={top_grid} />
				<div className="login">
					<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
						<div className="glassContainer">
							<button className="flipbtn" onClick={this.handleClick}>Register</button>
							<Login />
						</div>

						<div className="glassContainer">
							<button className="flipbtn" onClick={this.handleClick}>Login</button>
							<Register />
						</div>
					</ReactCardFlip>
				</div>
				<img className="bottomGrid" width="300px" src={bottom_grid} />
			</div>
		);
	}
}


export default ToggleLogin;
