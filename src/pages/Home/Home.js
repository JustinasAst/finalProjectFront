/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { useResource } from '../../hooks/useResource';
/* import { Link } from 'react-router-dom'; */
/* import { AuthContext } from '../../context/Auth'; */
import './Home.css';

const Home = () => {
	const { data: company } = useResource('company');

	return (
		<div>
			{company.map((item) => (
				<div key={item.id}>
					<Link to={generatePath('/company/:companyId', { companyId: item.id })}>
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
