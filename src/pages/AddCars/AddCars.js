import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Header, UpdateCars, Button } from '../index';
import './AddCars.css';

const AddCars = () => {
	const [name, setName] = useState();
	const [model, setModel] = useState();
	const [description, setDescription] = useState();
	const [production_years, setProduction_years] = useState();
	const [foto, setFoto] = useState();

	let navigate = useNavigate();

	const submitInput = (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append('name', name);
		formData.append('model', model);
		formData.append('description', description);
		formData.append('production_years', production_years);
		formData.append('foto', foto);

		fetch(`${process.env.REACT_APP_API_URL}/v1/company`, {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					navigate('/addcars');
				}
				console.log('Success:', data);
				toast.success('Car is added');
				setName('');
				setModel('');
				setDescription('');
				setProduction_years('');
				setFoto('');
			})
			.catch((error) => {
				console.error('Error:', error);
				toast.error('something wrong, try again');
			});
	};

	return (
		<div>
			<Header>
				<h1>Atsiliepimai.lt</h1>
				<div className='navigation'>
					<Link className='link' to='/'>
						Home
					</Link>

					<Link className='link' to='/register'>
						Register
					</Link>
					<Link className='link' to='/login'>
						Login
					</Link>
				</div>
			</Header>
			<form onSubmit={submitInput}>
				<div className='inputbox'>
					<label>Brandas:</label>
					<select value={name} onChange={(e) => setName(e.target.value)}>
						<option value='0'> </option>
						<option value='Audi'>Audi</option>
						<option value='BMW'>BMW</option>
						<option value='Volkswagen'>Volkswagen</option>
						<option value='Skoda'>Skoda</option>
						<option value='Citroen'>Citroen</option>
						<option value='Dodge'>Dodge</option>
						<option value='Honda'>Honda</option>
						<option value='Hyundai'>Hyundai</option>
						<option value='Jeep'>Jeep</option>
						<option value='Lexus'>Lexus</option>
						<option value='Mazda'>Mazda</option>
						<option value='Mercedes Benz'>Mercedes Benz</option>
						<option value='Nissan'>Nissan</option>
						<option value='Opel'>Opel</option>
						<option value='Toyota'>Toyota</option>
					</select>
				</div>
				<div className='inputbox'>
					<label>Modelis:</label>
					<input
						type='text'
						name='model'
						value={model}
						placeholder='Modelis'
						id='model'
						onChange={(e) => setModel(e.target.value)}
					/>
				</div>

				<div className='inputbox'>
					<label>Gamybos metai:</label>
					<input
						type='text'
						name='production_yers'
						value={production_years}
						id='production_yers'
						placeholder='2008-2012'
						onChange={(e) => setProduction_years(e.target.value)}
					/>
				</div>
				<div className='inputbox'>
					<label>Apie automobilį:</label>
					<textarea
						type='text'
						name='description'
						value={description}
						id='description'
						placeholder='Trumpa informacija apie automobilį'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<label className='uploadLabel'>
					<input
						type='file'
						name='foto'
						id='foto'
						onChange={(e) => setFoto(e.target.files[0])}
						className='uploadButton'
					/>
					Įkelti nuotrauka
				</label>

				<Button type='submit' style='brand-outline'>
					Submit
				</Button>
			</form>
			<UpdateCars />
		</div>
	);
};

export default AddCars;
