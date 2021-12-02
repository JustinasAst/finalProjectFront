import React from 'react';
import * as S from './StyleButton';

const Button = ({ children, style, type, handleClick }) => {
	let background, text, border;
	switch (style) {
		case 'simple':
			background = '#88a2d1';
			text = 'white';
			break;

		case 'brand-outline':
			background = 'transparent';
			border = 'blue';
			text = 'Black';
			break;
		case 'logout':
			background = 'transparent';
			text = 'white';
			break;

		default:
			background = 'transparent';
			border = '#cad3e3';
			text = 'blue';
	}

	return (
		<S.Button onClick={handleClick} background={background} border={border} text={text} type={type}>
			{children}
		</S.Button>
	);
};

export default Button;
