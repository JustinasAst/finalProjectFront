import React from 'react';

const Select = ({ handleChange }) => {
	return (
		<select onChange={handleChange}>
			<option value='0'> </option>
			<option value='5'> &#11088; &#11088; &#11088; &#11088; &#11088;</option>
			<option value='4'> &#11088; &#11088; &#11088; &#11088;</option>
			<option value='3'> &#11088; &#11088; &#11088;</option>
			<option value='2'> &#11088; &#11088;</option>
			<option value='1'> &#11088; </option>
		</select>
	);
};

export default Select;
