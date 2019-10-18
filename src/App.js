import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

import ToggleLogin from "./components/credentials/ToggleLogin";
import Dashboard from './components/dashboard/Dashboard';


const App = () => (
	<div>
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/" component={ToggleLogin} exact />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
			<Footer />
		</BrowserRouter>
	</div>

);

export default App;
