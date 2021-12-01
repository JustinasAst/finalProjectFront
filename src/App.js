import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';

const LazyHome = React.lazy(() => import('./pages/Home/Home'));
const LazyComments = React.lazy(() => import('./pages/Comments/Comments'));
const LazyRegister = React.lazy(() => import('./pages/Register/Register'));
const LazyLogin = React.lazy(() => import('./pages/Login/Login'));
const LazyAddCars = React.lazy(() => import('./pages/AddCars/AddCars'));

function App() {
	return (
		<div className='App'>
			<Router>
				<Suspense fallback={() => <h1>Loading...</h1>}>
					<Routes>
						<Route exact path='/register' element={<LazyRegister />} />
						<Route exact path='/login' element={<LazyLogin />} />
						<Route path='/company/:companyId' element={<LazyComments />} />
						<Route exact path='/addcars' element={<PrivateRoute>{<LazyAddCars />}</PrivateRoute>} />
						<Route exact path='/' element={<LazyHome />} />
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
