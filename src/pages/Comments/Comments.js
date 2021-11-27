import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useResource } from '../../hooks/useResource';
import { toast } from 'react-toastify';
import Header from '../../component/Header';
import './Comments.css';
import Button from '../../component/button/Button';
const Comments = () => {
	const authContext = useContext(AuthContext);
	const { companyId } = useParams();
	const { data: company } = useResource(`company/${companyId}`);
	const { data: comments, refresh } = useResource(`company/${companyId}/comments`);

	const [comment, setComment] = useState();

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
					<label>Rating</label>
					<select onChange={(e) => setComment({ ...comment, rating: e.target.value })}>
						<option value='5'> &#11088; &#11088; &#11088; &#11088; &#11088;</option>
						<option value='4'> &#11088; &#11088; &#11088; &#11088;</option>
						<option value='3'> &#11088; &#11088; &#11088;</option>
						<option value='2'> &#11088; &#11088;</option>
						<option value='1'> &#11088; </option>
					</select>
				</div>

				<div className='textarea'>
					<label>Description</label>
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
				<h1 className='headerName'>{company.name}</h1>
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
						<h4>{comment.comment}</h4>
						<p>{comment.rating}</p>
						<p>{comment.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Comments;
