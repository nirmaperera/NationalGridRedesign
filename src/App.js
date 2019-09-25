import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import Main from './components/content/Main';

const App = () => (
	<div>
		<BrowserRouter>
			<Navigation />
			<Main />
		</BrowserRouter>
	</div>

);

export default App;
