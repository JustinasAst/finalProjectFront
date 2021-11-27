/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { useResource } from '../../hooks/useResource';
import Header from '../../component/Header';

/* import { AuthContext } from '../../context/Auth'; */
import './Home.css';

const Home = () => {
	const { data: company } = useResource('company');

	return (
		<div>
			<Header>
				<h1 className='headerName'>Atsiliepimai.lt</h1>
				<div className='navigation'>
					<Link className='link' to='/register'>
						Register
					</Link>
					<Link className='link' to='/login'>
						Login
					</Link>
				</div>
			</Header>
			{company.map((item) => (
				<div className='companyBox' key={item.id}>
					<Link className='boxLink' to={generatePath('/company/:companyId', { companyId: item.id })}>
						<h2>{item.name}</h2>
					</Link>
					<p>{item.description}</p>
					<p>{item.place}</p>
					<p>{item.rating}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
