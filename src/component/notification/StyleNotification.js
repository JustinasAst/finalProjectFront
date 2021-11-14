import styled from 'styled-components';

export const Notification = styled.div`
	background: ${(props) => props.background || 'transparent'};
	color: ${(props) => props.text || 'solid blue'};
	padding: 1rem 2rem;
	border-left: ${(props) => (props.border ? `0.8rem solid ${props.border}` : `0.8rem solid black`)};
	font-weight: 900;
	margin-top: 5rem;
`;
