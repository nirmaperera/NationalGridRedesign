import React from 'react';

import './DrawerToggle.css';

const ToggleBtn = props => (
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggleBtn-line"></div>
        <div className="toggleBtn-line"></div>
        <div className="toggleBtn-line"></div>
    </button>
);

export default ToggleBtn;
