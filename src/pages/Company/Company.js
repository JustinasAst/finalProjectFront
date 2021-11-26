import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth';
import { useParams } from 'react-router';
import { useResource } from '../../hooks/useResource';
import { toast } from 'react-toastify';

const Company = () => {
	const authContext = useContext(AuthContext);
	const { companyId } = useParams();
	const { data: company } = useResource(`company/${companyId}`);
	const { data: comments, refresh } = useResource(`company/${companyId}/comments`);

	const [comment, setComment] = useState();

	/* console.log(authContext); */
	let form = null;
	if (authContext.token) {
		form = (
			<form
				className='form'
				onSubmit={(e) => {
					e.preventDefault();
					fetch(`http://localhost:8080/v1/company/${companyId}/comments`, {
						method: 'POST',
						headers: {
							authorization: `Bearer ${authContext.token || 'none'}`,
							'Content-Type': 'application/json',
						},

						body: JSON.stringify(comment),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data) {
								toast.success('Added');
								refresh();
							}
							if (!data) {
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
						type='number'
						placeholder='Title'
						required
						onChange={(e) => setComment({ ...comment, rating: e.target.value })}
					/>
				</div>
				<div>
					<label>Description</label>
					<textarea
						type='text'
						placeholder='Description'
						required
						onChange={(e) => setComment({ ...comment, comment: e.target.value })}
					/>
				</div>
				<button type='submit'>Add</button>
			</form>
		);
	}

	return (
		<div>
			<h1>{company.name}</h1>
			<div>
				{(comments || []).map((comment) => (
					<div key={comment.id}>
						<h3>{comment.comment}</h3>
						<p>{comment.rating}</p>
						<p>{comment.name}</p>
					</div>
				))}
			</div>
			{form}
		</div>
	);
};

export default Company;
