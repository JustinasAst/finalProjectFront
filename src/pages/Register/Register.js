import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './Register.css';
import Header from '../../component/Header';
import Button from '../../component/button/Button';

const Register = () => {
	return (
		<div>
			<Header>
				<div>
					<Link className='link' to='/'>
						Home
					</Link>
					<Link className='link' to='/login'>
						Login
					</Link>
				</div>
			</Header>
			<div>
				<h1>Register</h1>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						fetch(`http://localhost:8080/v1/auth/register`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								name: e.target.elements.name.value,
								email: e.target.elements.email.value,
								password: e.target.elements.password.value,
							}),
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
						<label>Vardas</label>
						<input type='email' placeholder='Vardas' required name='text' />
					</div>
					<div>
						<label>Email</label>
						<input type='email' placeholder='@gmail.com' required name='email' />
					</div>
					<div>
						<label>Slaptažodis</label>
						<input type='password' placeholder='Password' required name='password' />
					</div>
					<Button type='submit'>Submit</Button>
				</form>
			</div>
		</div>
	);
};

export default Register;
