import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Header, Button } from '../index';
import './Register.css';

const Register = () => {
	const [userInputs, setUserInputs] = useState();

	return (
		<div>
			<Header>
				<h1>Automobilių atsiliepimai</h1>
				<div className='navigation'>
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
						fetch(`${process.env.REACT_APP_API_URL}/v1/auth/register`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(userInputs),
						})
							.then((res) => res.json())
							.then((data) => {
								setUserInputs('');
								if (data.affectedRows !== 1) {
									console.log(data);
									return toast.error('Something went wrong, please try again');
								}
								toast.success('Succsess registered!');
							})
							.catch((err) => toast.error('Šitas adresas yra užimtas'));
					}}
				>
					<div>
						<label>Vardas</label>
						<input
							type='text'
							placeholder='Vardas'
							required
							name='name'
							onChange={(e) =>
								setUserInputs({
									...userInputs,
									name: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							type='email'
							placeholder='@gmail.com'
							required
							name='email'
							onChange={(e) => {
								setUserInputs({
									...userInputs,
									email: e.target.value.trim().toLocaleLowerCase(),
								});
							}}
						/>
					</div>
					<div>
						<label>Slaptažodis</label>
						<input
							type='password'
							placeholder='Password'
							required
							name='password'
							onChange={(e) =>
								setUserInputs({
									...userInputs,
									password: e.target.value,
								})
							}
						/>
					</div>
					<Button type='submit'>Submit</Button>
				</form>
			</div>
		</div>
	);
};

export default Register;
