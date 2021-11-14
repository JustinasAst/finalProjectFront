/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import Navigation from '../../component/navigation/Navigation';
import './Home.css';
import { InfoBox, Notification } from '../index';

const Home = () => {
	const authContext = useContext(AuthContext);
	const [info, setInfo] = useState([]);

	//Check if we get token and if we get show data whith this token
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/v1/content/skills`, {
			headers: {
				authorization: `Bearer ${authContext.token || 'none'}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (!data) {
					return alert('error');
				}

				setInfo(data);
			})
			.catch((err) => alert(err.message));
	}, []);

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
			{info.length === 0 ? (
				<Notification style='error'>No data</Notification>
			) : (
				<div className='dataBox'>
					{!info && <h1 className='title'>Loading...</h1>}
					{info.map((item, index) => (
						<InfoBox key={index}>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
						</InfoBox>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
