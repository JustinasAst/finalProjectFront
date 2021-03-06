import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { Header, Button } from '../index';
import { setUser } from '../../context/user';
import './Login.css';

const Login = () => {
	const [userImput, setUserInput] = useState();
	let navigate = useNavigate();

	return (
		<div>
			<Header>
				<h1>Automobilių atsiliepimai</h1>
				<div className='navigation'>
					<Link className='link' to='/'>
						Home
					</Link>

					<Link className='link' to='/register'>
						Register
					</Link>
				</div>
			</Header>

			<h1>Login</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					fetch(`${process.env.REACT_APP_API_URL}/v1/auth/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(userImput),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.err) {
								navigate('/login');
								toast.error('Patikrinkite prisijungimo duomenis');
								return;
							} else {
								toast.success('Prisijungėte sėkmingai');
							}

							setUser(data);
						})
						.catch((err) => alert(err.message))
						.finally(() => e.target.reset(), navigate('/'));
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
				<Button type='submit'>Submit</Button>
			</form>
		</div>
	);
};

export default Login;
