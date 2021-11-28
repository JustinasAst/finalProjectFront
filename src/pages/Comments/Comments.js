import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useResource } from '../../hooks/useResource';
import { toast } from 'react-toastify';
import Header from '../../component/Header';
import './Comments.css';
import Button from '../../component/button/Button';
import { computeHeadingLevel } from '@testing-library/dom';

const Comments = () => {
	const authContext = useContext(AuthContext);
	const { companyId } = useParams();
	const { data: company } = useResource(`company/${companyId}`);
	console.log(company);
	const { data: comments, refresh } = useResource(`company/${companyId}/comments`);

	const [comment, setComment] = useState();

	const deleteItem = (id) => {
		fetch(`http://localhost:8080/v1/company/${companyId}/comments/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${authContext.user.token || 'none'}`,
			},
			body: null,
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => alert('Automobilis istrintas'));
	};

	/* console.log(authContext); */
	let form = null;
	if (authContext.user) {
		form = (
			<form
				className='comment'
				onSubmit={(e) => {
					e.preventDefault();
					fetch(`http://localhost:8080/v1/company/${companyId}/comments`, {
						method: 'POST',
						headers: {
							authorization: `Bearer ${authContext.user.token || 'none'}`,
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
				<div className='rating'>
					<label>Emocija</label>
					<select onChange={(e) => setComment({ ...comment, rating: e.target.value })}>
						<option value='5'> &#11088; &#11088; &#11088; &#11088; &#11088;</option>
						<option value='4'> &#11088; &#11088; &#11088; &#11088;</option>
						<option value='3'> &#11088; &#11088; &#11088;</option>
						<option value='2'> &#11088; &#11088;</option>
						<option value='1'> &#11088; </option>
					</select>
				</div>
				<div className='rating'>
					<label>Išlaikymas</label>
					<select onChange={(e) => setComment({ ...comment, expenses: e.target.value })}>
						<option value='5'> &#11088; &#11088; &#11088; &#11088; &#11088;</option>
						<option value='4'> &#11088; &#11088; &#11088; &#11088;</option>
						<option value='3'> &#11088; &#11088; &#11088;</option>
						<option value='2'> &#11088; &#11088;</option>
						<option value='1'> &#11088; </option>
					</select>
				</div>
				<div className='rating'>
					<label>Ekonomija</label>
					<select onChange={(e) => setComment({ ...comment, economy: e.target.value })}>
						<option value='5'> &#11088; &#11088; &#11088; &#11088; &#11088;</option>
						<option value='4'> &#11088; &#11088; &#11088; &#11088;</option>
						<option value='3'> &#11088; &#11088; &#11088;</option>
						<option value='2'> &#11088; &#11088;</option>
						<option value='1'> &#11088; </option>
					</select>
				</div>
				<div className='rating'>
					<label>Nuvertėjimas</label>
					<select onChange={(e) => setComment({ ...comment, price_drop: e.target.value })}>
						<option value='5'> &#11088; &#11088; &#11088; &#11088; &#11088;</option>
						<option value='4'> &#11088; &#11088; &#11088; &#11088;</option>
						<option value='3'> &#11088; &#11088; &#11088;</option>
						<option value='2'> &#11088; &#11088;</option>
						<option value='1'> &#11088; </option>
					</select>
				</div>

				<div className='textarea'>
					<label>Komentaras</label>
					<textarea
						type='text'
						placeholder='Palikite komentarą čia'
						required
						onChange={(e) => setComment({ ...comment, comment: e.target.value })}
					/>
				</div>
				<Button type='submit'>Palikti komentarą</Button>
			</form>
		);
	}

	return (
		<div>
			<Header>
				<h1 className='headerName'>
					{company.name} {company.model}
				</h1>
				<div className='navigation'>
					<Link className='link' to='/'>
						Home
					</Link>
					<Link className='link' to='/register'>
						Register
					</Link>
					<Link className='link' to='/login'>
						Login
					</Link>
				</div>
			</Header>
			{form}

			<div className='allComments'>
				{(comments || []).map((comment) => (
					<div className='commentBox' key={comment.id}>
						<p>{comment.name}</p>
						<p>{comment.comment}</p>
						<p>Emocija: {comment.rating}</p>
						<p>Išlaikymas: {comment.expenses}</p>
						<p>Ekonomija: {comment.economy}</p>
						<p>Nuvertėjimas: {comment.price_drop}</p>

						{authContext.user && comment.users_id === authContext.user.id ? (
							<button onClick={() => deleteItem(comment.id)}> delete</button>
						) : (
							''
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Comments;
