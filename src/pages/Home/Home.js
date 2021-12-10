/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { getUser } from '../../context/user';
import { Link, generatePath, useNavigate } from 'react-router-dom';
import { NewStar, Header, FilterField, Button } from '../index';
import { SiBmw, SiAudi, SiVolkswagen, SiSkoda, SiCitroen, SiHonda, SiHyundai, SiJeep, SiMazda } from 'react-icons/si';
import { SiMercedes, SiNissan, SiOpel, SiToyota, SiVolvo, SiPorsche } from 'react-icons/si';
import './Home.css';

const Home = () => {
	const [name, setName] = useState('audi');
	const [data, setData] = useState([]);

	let navigate = useNavigate();

	const logout = () => {
		window.localStorage.clear();
		navigate('/login');
	};

	// Get cars by name. Map data and create link to comments section
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/v1/company/filter/${name}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, [name]);

	return (
		<div>
			<Header>
				<h1>Automobilių atsiliepimai</h1>
				<div className='navigation'>
					{getUser() && getUser().id === 6 ? (
						<Link className='link' to='/addcars'>
							Add Car
						</Link>
					) : (
						''
					)}
					<Link className='link' to='/'>
						Home
					</Link>

					<Link className='link' to='/login'>
						Login
					</Link>
					{getUser() ? (
						<Button style='logout' handleClick={logout}>
							<h3>LogOut</h3>
						</Button>
					) : (
						''
					)}
				</div>
			</Header>

			<div className='bodyBox'>
				<FilterField>
					<div className='HomeButton'>
						<button onClick={() => setName('audi')}>
							<SiAudi size='2em' />
						</button>
						<button onClick={() => setName('bmw')}>
							<SiBmw size='2em' />
						</button>

						<button onClick={() => setName('volkswagen')}>
							<SiVolkswagen size='2em' />
						</button>
						<button onClick={() => setName('skoda')}>
							<SiSkoda size='2em' />
						</button>
						<button onClick={() => setName('citroen')}>
							<SiCitroen size='2em' />
						</button>
						<button onClick={() => setName('porsche')}>
							<SiPorsche size='2em' />
						</button>
						<button onClick={() => setName('honda')}>
							<SiHonda size='2em' />
						</button>
						<button onClick={() => setName('jeep')}>
							<SiJeep size='2em' />
						</button>
						<button onClick={() => setName('hyundai')}>
							<SiHyundai size='2em' />
						</button>

						<button onClick={() => setName('mazda')}>
							<SiMazda size='2em' />
						</button>
						<button onClick={() => setName('mercedes')}>
							<SiMercedes size='2em' />
						</button>
						<button onClick={() => setName('nissan')}>
							<SiNissan size='2em' />
						</button>
						<button onClick={() => setName('opel')}>
							<SiOpel size='2em' />
						</button>
						<button onClick={() => setName('toyota')}>
							<SiToyota size='2em' />
						</button>
						<button onClick={() => setName('volvo')}>
							<SiVolvo size='2em' />
						</button>
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
							<NewStar value={Math.floor(item.rating)} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
