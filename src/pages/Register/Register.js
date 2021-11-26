import React from 'react';
import { toast } from 'react-toastify';

const Register = () => {
	return (
		<div>
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
						<label>Email</label>
						<input type='email' placeholder='@gmail.com' required name='email' />
					</div>
					<div>
						<label>Password</label>
						<input type='password' placeholder='Password' required name='password' />
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
