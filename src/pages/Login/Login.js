import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../component/navigation/form/StyleForm';
import { Navigation, Button } from '../index';

const Login = () => {
	const [userImput, setUserInput] = useState();
	const authContex = useContext(AuthContext);
	let history = useNavigate();

	return (
		<div>
			<Navigation>
				<img src='https://purepng.com/public/uploads/thumbnail/google-stadia-logo-hd4.png' alt='logo' />
				<Link className='link' to='/login'>
					Login
				</Link>
				<Link className='link' to='/register'>
					Register
				</Link>
			</Navigation>

			<h1>Login</h1>
			<Form
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
							if (!data) {
								return alert('no data');
							}
							authContex.setToken(data.token);
							console.log(data.token);
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
				<Button type='submit' style='simple'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Login;
