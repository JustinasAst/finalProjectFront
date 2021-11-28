import React from 'react';
import { useResource } from '../../hooks/useResource';

import './UpdateCarasTable.css';

const UpdateCars = () => {
	const { data: company } = useResource('company');

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
			.then((data) => alert('Automobilis istrintas'));
	};
	return (
		<div>
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
						{company.map((item) => (
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
