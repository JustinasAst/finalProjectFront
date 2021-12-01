import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateCarasTable.css';

const UpdateCars = () => {
	let navigate = useNavigate();

	const [newData, setData] = useState([]);
	const [name, setName] = useState('audi');
	const [newProduction, setNewProduction] = useState('');

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/v1/company/filter/${name}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (!data) {
					return alert('error');
				}
				setData(data);
			});
	}, [name]);

	const deleteItem = (id) => {
		fetch(`${process.env.REACT_APP_API_URL}/v1/company/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: null,
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => navigate('/addcars'), alert('Automobilis ištrintas'));
	};
	const handleClick = (id) => {
		fetch(`${process.env.REACT_APP_API_URL}/v1/company/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				production_years: newProduction,
				id,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				alert('Data pakeista');
				setNewProduction('');
			});
	};
	return (
		<div className='addCars'>
			<div className='button'>
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
				<button onClick={() => setName('volvo')}>Volvo</button>
			</div>
			<div className='table'>
				<table>
					<thead>
						<tr>
							<th>Brandas</th>
							<th>Modelis</th>
							<th>Gamybos metai</th>
							<th>Ratingas</th>
							<th>Update</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{newData.map((item) => (
							<tr key={item.id}>
								<td>{item.name}</td>
								<td>{item.model}</td>
								<td>{item.production_years}</td>
								<td>{item.rating}</td>
								<td>
									<div className='change'>
										<input
											className='production_years'
											value={newProduction}
											type='text'
											name='production_years'
											id='production_years'
											placeholder='Gamybos metai'
											onChange={(e) => setNewProduction(e.target.value)}
										/>
										<button onClick={() => handleClick(item.id)}>Change</button>
									</div>
								</td>
								<td>
									<button onClick={() => deleteItem(item.id)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UpdateCars;
