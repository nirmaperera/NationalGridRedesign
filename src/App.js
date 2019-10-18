import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import ToggleLogin from "./components/credentials/ToggleLogin";


const App = () => (
	<div>
		<BrowserRouter>
			<Navigation />
			<ToggleLogin />
			<Footer />
		</BrowserRouter>
	</div>

);

export default App;
