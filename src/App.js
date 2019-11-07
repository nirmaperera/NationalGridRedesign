import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import { PrivateRoute } from './components/helpers/PrivateRoute';
import Footer from './components/footer/Footer';

import ToggleLogin from "./components/credentials/ToggleLogin";
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';

export default class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Navigation />
					<Switch>
						<Route exact path="/" component={ToggleLogin} />
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
						<PrivateRoute exact path="/profile" component={Profile} />

					</Switch>
					<Footer />
				</BrowserRouter>
			</div>
		)
	}

}


