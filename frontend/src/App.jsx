import React from 'react';
import HomePage from './pages/Home';
import SingleProductPage from './pages/Product';
import SalesDashboard from './pages/SalesDashboard';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/product/:productId' component={SingleProductPage} />
				<Route exact path='/dashboard' component={SalesDashboard} />
			</Switch>
		</div>
	);
}

export default App;
