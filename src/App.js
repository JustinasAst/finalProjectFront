import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* import { Home, Register, Login, Add } from './pages'; */
import PrivateRoute from './components/PrivateRoute';

const LazyHome = React.lazy(() => import('./pages/Home/Home'));
const LazyRegister = React.lazy(() => import('./pages/Register/Register'));
const LazyLogin = React.lazy(() => import('./pages/Login/Login'));
const LazyAdd = React.lazy(() => import('./pages/add/Add'));

function App() {
	return (
		<div className='App'>
			<Router>
				<Suspense fallback={() => <h1>Loading...</h1>}>
					<Routes>
						<Route exact path='/register' element={<LazyRegister />} />
						<Route exact path='/login' element={<LazyLogin />} />
						<Route exact path='/' element={<PrivateRoute>{<LazyHome />}</PrivateRoute>} />
						<Route exact path='/add' element={<PrivateRoute>{<LazyAdd />}</PrivateRoute>} />
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
