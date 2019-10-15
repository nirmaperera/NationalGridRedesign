import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import Main from './components/content/Main';
import Footer from './components/footer/Footer';

const App = () => (
	<div>
		<BrowserRouter>
			<Navigation />
			<Main />
			<Footer />
		</BrowserRouter>
	</div>

);

export default App;
