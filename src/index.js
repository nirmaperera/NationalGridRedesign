import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

/* save the state(isloggedIn) to local storage*/
function saveToLocalSotrage(state) {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (e) {
		console.log(e)
	}
}
/* load the local storage to the redux state*/
function loadFromLocalStorage() {
	try {
		const serializedState = localStorage.getItem('state')
		if (serializedState === null) return undefined
		return JSON.parse(serializedState)
	} catch (e) {
		console.log(e)
		return undefined
	}
}
const persistedState = loadFromLocalStorage()

const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*update to saveToLocalstorage */
store.subscribe(() => saveToLocalSotrage(store.getState()))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
