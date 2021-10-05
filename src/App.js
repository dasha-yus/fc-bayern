import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					{/* <Route path="**" exact component={Error404} /> */}
				</Switch>
			</div>
		</Router>
	);
};

export default App;
