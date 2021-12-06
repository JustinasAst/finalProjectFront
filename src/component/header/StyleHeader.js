import styled from 'styled-components';

export const Header = styled.div`
	@media only screen and (max-width: 520px) {
		background: #eb9131;
		height: 150px;
		align-items: center;
		text-align: left;
	}
	.link {
		margin-left: 0.5rem;
		font-size: large;
		text-decoration: none;
		color: rgb(48, 46, 46);
	}
	h1 {
		text-align: center;
		margin: 0 auto;
		padding-top: 1rem;
		width: 70%;
		font-family: Verdana, Arial, Helvetica, sans-serif;
	}
	@media only screen and (min-width: 520px) {
		background: #eb9131;
		height: 100px;
		align-items: center;
		display: flex;
		text-align: left;
		justify-content: space-between;

		h1 {
			text-align: center;
			margin-left: 1rem;
			width: 70%;
			font-family: Verdana, Arial, Helvetica, sans-serif;
		}
		.link {
			margin-left: 1rem;
			font-size: large;
			text-decoration: none;
			color: rgb(48, 46, 46);
		}
	}
`;
