import styled from 'styled-components';

export const Form = styled.form`
	text-align: center;
	background: #c3ccdb;
	border: 1px solid black;
	border-radius: 10px;
	width: 60%;
	margin: 0 auto;
	padding: 2rem;
	border: none;
	input {
		padding: 0.5rem;
		width: 95%;
		border-radius: 5px;
		border: none;
		margin: 1rem auto;
	}

	textarea {
		padding: 0.5rem;
		width: 95%;
		border-radius: 5px;
		border: none;
		margin: 1rem auto;
		height: 10rem;
	}

	label {
		font-size: large;
		font-weight: 600;
	}
`;
