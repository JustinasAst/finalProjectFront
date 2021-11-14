import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Button } from '../index';
import { toast } from 'react-toastify';

const Register = () => {
	const [user, setUser] = useState();

	console.log(user);
	return (
		<div>
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

				<h1>Register</h1>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						fetch(`${process.env.REACT_APP_API_URL}/v1/auth/register`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(user),
						})
							.then((res) => res.json())
							.then((data) => {
								if (data) {
									toast.success('Succsess');
								}
								if (!data) {
									toast.error('Succsess');
								}
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
							onChange={(e) => setUser({ ...user, email: e.target.value })}
						/>
					</div>
					<div>
						<label>Password</label>
						<input
							type='password'
							placeholder='Password'
							required
							onChange={(e) => setUser({ ...user, password: e.target.value })}
						/>
					</div>
					<Button type='submit' style='simple'>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Register;
