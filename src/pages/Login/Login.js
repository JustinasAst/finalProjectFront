import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/Auth';

import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [userImput, setUserInput] = useState();
	const authContex = useContext(AuthContext);
	let history = useNavigate();

	return (
		<div>
			<h1>Login</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					fetch(`http://localhost:8080/v1/auth/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(userImput),
					})
						.then((res) => res.json())
						.then((data) => {
							if (!data) {
								return alert('no data');
							}
							authContex.setToken(data.token);
							
							console.log(data);
							history('/');
						})
						.catch((err) => alert(err.message))
						.finally(() => e.target.reset());
				}}
			>
				<div>
					<label>Email</label>
					<input
						type='email'
						placeholder='@gmail.com'
						required
						onChange={(e) => setUserInput({ ...userImput, email: e.target.value.trim().toLowerCase() })}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type='password'
						placeholder='password'
						required
						onChange={(e) => setUserInput({ ...userImput, password: e.target.value })}
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Login;
