import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

import ToggleLogin from "./components/credentials/ToggleLogin";
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import ModalBill from './components/account/payBill/ModalBill';
// import ModalBill from './components/account/payBill/ModalBill';




const App = () => (
	<div>
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/" component={ToggleLogin} exact />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/profile" component={Profile} />
				<Route path="/paybill" component={ModalBill} />
				{/* <Route path="/paybill" component={ModalBill} /> */}
			</Switch>
			<Footer />
		</BrowserRouter>
	</div>

);

export default App;
