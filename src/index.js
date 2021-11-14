import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<ToastContainer />
			<App />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
