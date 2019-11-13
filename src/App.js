import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Navigation from './components/navigation/Navigation';
import PrivateRoute from './components/helpers/PrivateRoute';
import Footer from './components/footer/Footer';

import ToggleLogin from "./components/credentials/ToggleLogin";
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';

const App = (props) => {
	return (
		<div>
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Route exact path="/" component={ToggleLogin} />
					<PrivateRoute exact path="/dashboard" component={Dashboard} isLogged={props.isLogged} />
					<PrivateRoute exact path="/profile" component={Profile} isLogged={props.isLogged} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default connect(mapStateToProps)(App);
