import React from "react";

import './backdrop.scss';

const Backdrop = ({ click }) => (
	<div className="backdrop" onClick={click}></div>
);

export default Backdrop;
