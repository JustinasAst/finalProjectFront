import styled from 'styled-components';

export const Header = styled.div`
	@media only screen and (max-width: 800px) {
		background: #eb9131;
		padding-top: 1rem;
	}
	.link {
		font-size: large;
		text-decoration: none;
		color: rgb(48, 46, 46);
	}
	h1 {
		text-align: center;
		color: #697a6e;
		margin: 0 auto;
		font-family: Verdana, Arial, Helvetica, sans-serif;
	}
	@media only screen and (min-width: 800px) {
		background: #eb9131;
		height: 6.5rem;
		align-items: center;
		display: flex;
		justify-content: space-between;

		h1 {
			width: 42%;
			font-family: Verdana, Arial, Helvetica, sans-serif;
			text-align: left;
		}
		.link {
			font-size: large;
			text-decoration: none;
			color: rgb(48, 46, 46);
		}
		.navigation {
			margin-right: 1rem;
		}
	}
`;
