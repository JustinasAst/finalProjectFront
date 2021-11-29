/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { useResource } from '../../hooks/useResource';
import Header from '../../component/Header';
import FilterField from '../../component/FilterField/FilterField';

import './Home.css';

const Home = () => {
	const [name, setName] = useState('audi');
	const [data, setData] = useState([]);

	//useResource(`company/filter/${name} `);

	useEffect(() => {
		fetch(`http://localhost:8080/v1/company/filter/${name}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (!data) {
					return alert('error');
				}
				setData(data);
			});
	}, [name]);

	//const { data: company } = useResource(`company/filter/${name} `);

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
					<div className='HomeButton'>
						<button onClick={() => setName('bmw')}> BMW </button>
						<button onClick={() => setName('audi')}> AUDI</button>
						<button className='vw' onClick={() => setName('volkswagen')}>
							Volkswagen
						</button>
						<button onClick={() => setName('skoda')}> Skoda</button>
						<button onClick={() => setName('citroen')}>Citroen</button>
						<button onClick={() => setName('dodge')}>Dodge </button>
						<button onClick={() => setName('honda')}>Honda</button>
						<button onClick={() => setName('hyundai')}>Hyundai</button>
						<button onClick={() => setName('jeep')}>Jeep</button>
						<button onClick={() => setName('lexus')}>Lexus</button>
						<button onClick={() => setName('mazda')}>Mazda</button>
						<button className='mb' onClick={() => setName('mercedes Benz')}>
							Mercedes Benz
						</button>
						<button onClick={() => setName('nissan')}>Nissan</button>
						<button onClick={() => setName('opel')}>Opel</button>
						<button onClick={() => setName('toyota')}>Toyota</button>
					</div>
				</FilterField>
				<div className='carsBox'>
					{data.map((item) => (
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
