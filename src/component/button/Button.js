import React from 'react';
import * as S from './StyleButton';

const Button = ({ children, style, type }) => {
	let background, text, border;
	switch (style) {
		case 'simple':
			background = '#88a2d1';
			text = 'white';
			break;

		case 'brand-outline':
			background = 'transparent';
			border = 'blue';
			text = 'blue';
			break;
		default:
			background = 'transparent';
			border = '#cad3e3';
			text = 'blue';
	}

	return (
		<S.Button background={background} border={border} text={text} type={type}>
			{children}
		</S.Button>
	);
};

export default Button;
