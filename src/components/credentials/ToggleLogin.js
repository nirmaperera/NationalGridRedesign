import React, { useState } from 'react';
import Login from './login/Login';
import Register from './register/Register';
import ReactCardFlip from 'react-card-flip';

import top_grid from '../../assets/images/topGrid.png';
import bottom_grid from '../../assets/images/bottomGrid.png';
import '../credentials/login/login.scss';

const ToggleLogin = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isHover, setIsHover] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped)
	}

	return (
		<div className="App">
			<img alt="topGrid" className="topGrid" width="350px" src={top_grid} />
			<img alt="topGridRight" className="topGridRight" width="350px" src={top_grid} />

			<div className="login">
				<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
					<div className="glassContainer">
						<button className="flipbtn register" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={handleClick}>Register</button>
						<Login />
					</div>

					<div className="glassContainer">
						<button className="flipbtn" id="login" onClick={handleClick}>Login</button>
						<Register />
					</div>
				</ReactCardFlip>
			</div>

			<img alt="bottomGrid" className="bottomGrid" width="400px" src={bottom_grid} />
		</div>
	)
}

export default ToggleLogin;
