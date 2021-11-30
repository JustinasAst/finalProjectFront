/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { getUser } from '../../context/user';
import { Link, generatePath, useNavigate } from 'react-router-dom';
import { useResource } from '../../hooks/useResource';
import NewStar from '../../component/star';
import Header from '../../component/Header';
import FilterField from '../../component/FilterField/FilterField';

import './Home.css';

const Home = () => {
	const [name, setName] = useState('audi');
	const [data, setData] = useState([]);

	//useResource(`company/filter/${name} `);
	let navigate = useNavigate();

	const logout = () => {
		window.localStorage.clear();
		navigate('/login');
	};

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/v1/company/filter/${name}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (!data) {
					console.log('nieko nera');
				} else {
					console.log('labas');
				}
				setData(data);
			});
	}, [name]);

	/* const Star = (value) => {
		switch (value) {
			case 0:
				return <p>-</p>;
			case 1:
				return <p>&#11088;</p>;
			case 2:
				return <p>&#11088; &#11088;</p>;
			case 3:
				return <p>&#11088; &#11088;&#11088;</p>;
			case 4:
				return <p>&#11088; &#11088; &#11088; &#11088;</p>;
			case 5:
				return <p>&#11088; &#11088; &#11088; &#11088; &#11088;</p>;
			default:
				<p>No rating</p>;
		}
	};
 */
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
					{getUser() ? <button onClick={logout}>Logout</button> : ''}
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
								<img src={`${process.env.REACT_APP_API_URL}/v1/company/uploads/` + item.foto} alt='logo' />
							</div>

							<p>{item.production_years}</p>
							<p>
								<strong> Bendras vertinimas:</strong>
							</p>
							<NewStar value={item.rating} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
