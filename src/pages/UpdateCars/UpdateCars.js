import React, { useState, useEffect } from 'react';
import { useResource } from '../../hooks/useResource';

import './UpdateCarasTable.css';

const UpdateCars = () => {
	const [newData, setData] = useState([]);
	const [name, setName] = useState('audi');

	//const { data: company } = useResource('company/filter/bmw');

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

	const deleteItem = (id) => {
		fetch(`http://localhost:8080/v1/company/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: null,
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => alert('Automobilis'));
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
			</div>
			<div className='table'>
				<table>
					<thead>
						<tr>
							<th>Brandas</th>
							<th>Modelis</th>
							<th>Gamybos metai</th>
							<th>Ratingas</th>
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
