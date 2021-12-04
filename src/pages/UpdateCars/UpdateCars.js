import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { SiBmw, SiAudi, SiVolkswagen, SiSkoda, SiCitroen, SiHonda, SiHyundai, SiJeep, SiMazda } from 'react-icons/si';
import { SiMercedes, SiNissan, SiOpel, SiToyota, SiVolvo, SiPorsche } from 'react-icons/si';
import { AiFillDelete } from 'react-icons/ai';
import { Button } from '../index';
import './UpdateCarasTable.css';

const UpdateCars = () => {
	let navigate = useNavigate();

	const [newData, setData] = useState([]);
	const [name, setName] = useState('audi');
	const [newProduction, setNewProduction] = useState('');

	const refreshPage = () => {
		window.location.reload(false);
	};

	//Create form to update and delete cars from table
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
			.then((data) => toast.success('Automobilis pridėtas'), refreshPage());
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
				<button onClick={() => setName('hyundai')}>
					<SiHyundai size='2em' />
				</button>

				<button onClick={() => setName('mazda')}>
					<SiMazda size='2em' />
				</button>
				<button onClick={() => setName('jeep')}>
					<SiJeep size='2em' />
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
										<Button style='simple' handleClick={() => handleClick(item.id)}>
											Pakeisti
										</Button>
									</div>
								</td>
								<td>
									<button className='delButton' onClick={() => deleteItem(item.id)}>
										<AiFillDelete size='1.5rem' color='red' />
									</button>
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
