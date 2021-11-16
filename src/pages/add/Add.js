import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import { Button, Navigation, Notification } from '../index';
import { toast } from 'react-toastify';
import './Add.css';

const Add = () => {
	const authContext = useContext(AuthContext);
	const [data, setData] = useState();

	return (
		<div>
			<Navigation>
				<img src='https://purepng.com/public/uploads/thumbnail/google-stadia-logo-hd4.png' alt='logo' />
				<Link className='link' to='/'>
					Home
				</Link>
				<Link className='link' to='/add'>
					Add
				</Link>
			</Navigation>
			<h1>Add page</h1>
			<form
				className='form'
				onSubmit={(e) => {
					e.preventDefault();
					fetch(`${process.env.REACT_APP_API_URL}/v1/content/skills`, {
						method: 'POST',
						headers: {
							authorization: `Bearer ${authContext.token || 'none'}`,
							'Content-Type': 'application/json',
						},

						body: JSON.stringify(data),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data) {
								<Notification style='ok'>Added</Notification>;
								toast.success('Added');
							}
							if (!data) {
								<Notification style='error'>Something is wrong</Notification>;
								toast.error('something wrong, try again');
							}
						})
						.catch((err) => alert(err.message))
						.finally(() => e.target.reset());
				}}
			>
				<div>
					<label>Title</label>
					<input
						type='text'
						placeholder='Title'
						required
						onChange={(e) => setData({ ...data, title: e.target.value })}
					/>
				</div>
				<div>
					<label>Description</label>
					<textarea
						type='text'
						placeholder='Description'
						required
						onChange={(e) => setData({ ...data, description: e.target.value })}
					/>
				</div>
				<Button type='submit' style='simple'>
					Add
				</Button>
			</form>
		</div>
	);
};

export default Add;
