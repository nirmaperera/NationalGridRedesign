import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Navigation from './components/navigation/Navigation';
import PrivateRoute from './components/helpers/PrivateRoute';

import ToggleLogin from "./components/credentials/ToggleLogin";
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import { NotificationContainer } from 'react-notifications';


const App = (props) => {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>

				<Route exact path="/" component={ToggleLogin} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} isLogged={props.isLogged} />
				<PrivateRoute exact path="/profile" component={Profile} isLogged={props.isLogged} />
			</Switch>
			<NotificationContainer />

		</BrowserRouter>

	)
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default connect(mapStateToProps)(App);
