/* eslint-disable no-undef */
import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import { useResource } from '../../hooks/useResource';
import Header from '../../component/Header';
import FilterField from '../../component/FilterField/FilterField';

/* import { AuthContext } from '../../context/Auth'; */
import './Home.css';

const Home = () => {
	const { data: company } = useResource('company/filter/bmw');

	const baseUrl = 'http://localhost:8080/v1/';
	console.log(baseUrl);

	return (
		<div>
			<Header>
				<h1 className='headerName'>Atsiliepimai.lt</h1>
				<div className='navigation'>
					<Link className='link' to='/addcars'>
						Add Cars
					</Link>

					<Link className='link' to='/register'>
						Register
					</Link>
					<Link className='link' to='/login'>
						Login
					</Link>
				</div>
			</Header>
			<div className='bodyBox'>
				<FilterField>
					<h3>Pasirinkite automobilį</h3>
				</FilterField>
				<div className='carsBox'>
					{company.map((item) => (
						<div className='companyBox' key={item.id}>
							<Link className='boxLink' to={generatePath('/company/:companyId', { companyId: item.id })}>
								<h2>
									{item.name} {item.model}
								</h2>
							</Link>
							<div>
								<img src={'http://localhost:8080/v1/company/uploads/' + item.foto} alt='logo' />
							</div>

							<p>{item.product_years}</p>
							<p>{item.description}</p>
							<p>{item.rating}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
