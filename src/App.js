import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Register, Login, Add } from './pages';
import PrivateRoute from './components/PrivateRoute';

/* const LazyHome = lazy(() => import('./pages/Home/Home'));
const LazyRegister = lazy(() => import('./pages/Register/Register'));
const LazyLogin = lazy(() => import('./pages/Login/Login'));
const lazyAdd = lazy(() => import('./pages/add/Add'));
 */
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/register' element={<Register />} />
					<Route exact path='/login' element={<Login />} />
					<Route
						exact
						path='/'
						element={
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						}
					/>
					<Route
						exact
						path='/add'
						element={
							<PrivateRoute>
								<Add />
							</PrivateRoute>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
