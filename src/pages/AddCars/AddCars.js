import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../component/Header';
import { Link } from 'react-router-dom';
import UpdateCars from '../UpdateCars/UpdateCars';
import './AddCars.css';

const AddCars = () => {
	const [name, setName] = useState();
	const [model, setModel] = useState();
	const [description, setDescription] = useState();
	const [production_years, setProduction_years] = useState();
	const [foto, setFoto] = useState();

	const submitInput = (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append('name', name);
		formData.append('model', model);
		formData.append('description', description);
		formData.append('production_years', production_years);
		formData.append('foto', foto);

		fetch('http://localhost:8080/v1/company', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
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
				<h1 className='headerName'>Atsiliepimai.lt</h1>
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
				<div>
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
					<input type='text' name='model' value={model} id='model' onChange={(e) => setModel(e.target.value)} />
				</div>

				<div className='inputbox'>
					<label>Gamybos metai:</label>
					<input
						type='text'
						name='production_yers'
						value={production_years}
						id='production_yers'
						onChange={(e) => setProduction_years(e.target.value)}
					/>
				</div>
				<div className='inputbox'>
					<label>Komentaras:</label>
					<input
						type='text'
						name='description'
						value={description}
						id='description'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<label class='uploadLabel'>
					<input type='file' name='foto' id='foto' onChange={(e) => setFoto(e.target.files[0])} class='uploadButton' />
					Įkelti nuotrauka
				</label>

				<button type='submit'>Submit</button>
			</form>
			<UpdateCars />
		</div>
	);
};

export default AddCars;