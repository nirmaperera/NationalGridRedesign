import React, { useState } from 'react'
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './sideDrawer/SideDrawer'
import Backdrop from '../backdrop/Backdrop';

const Navigation = () => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => {
		setSideDrawerOpen(!sideDrawerOpen);
	};

	let backdrop;

	if (sideDrawerOpen) {
		backdrop = <Backdrop click={() => setSideDrawerOpen(false)} />
	}

	return (
		<div className="navigation">
			<Toolbar drawerClickHandler={drawerToggleClickHandler} />
			<SideDrawer show={sideDrawerOpen} />
			{backdrop}
		</div>
	)
}

export default Navigation;
