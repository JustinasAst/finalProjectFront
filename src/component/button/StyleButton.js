import styled from 'styled-components';

export const Button = styled.button`
	background: ${(props) => props.background || 'transparent'};
	border: ${(props) => (props.border ? `0.5 rem solid ${props.border}` : 'none')};
	color: ${(props) => props.text || 'solid blue'};
	border-radius: 5px;
	padding: 0.5rem 2rem;
	cursor: pointer;
`;
