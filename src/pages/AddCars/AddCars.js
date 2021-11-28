import React, { useState } from 'react';
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
		console.log(foto);

		fetch('http://localhost:8080/v1/company', {
			method: 'POST',

			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
				setName('');
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<div>
			<form onSubmit={submitInput}>
				<div className='inputbox'>
					<label>Brandas:</label>
					<input type='text' name='name' value={name} id='name' onChange={(e) => setName(e.target.value)} />
				</div>
				<div className='inputbox'>
					<label>Modelis:</label>
					<input type='text' name='model' id='model' onChange={(e) => setModel(e.target.value)} />
				</div>

				<div className='inputbox'>
					<label>Gamybos metai:</label>
					<input
						type='text'
						name='production_yers'
						id='production_yers'
						onChange={(e) => setProduction_years(e.target.value)}
					/>
				</div>
				<div className='inputbox'>
					<label>Komentaras:</label>
					<input type='text' name='description' id='description' onChange={(e) => setDescription(e.target.value)} />
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
