import React from 'react';
import * as S from './StyleNotification';

const Notification = ({ children, style, type }) => {
	let background, text, border;
	switch (style) {
		case 'ok':
			background = '#88a2d1';
			text = 'white';
			border = 'green';
			break;

		case 'error':
			background = '#9c9ba3';
			border = 'red';
			text = 'red';
			break;
		default:
			background = 'transparent';
			border = '#cad3e3';
			text = 'black';
	}

	return (
		<S.Notification background={background} border={border} text={text} type={type}>
			{children}
		</S.Notification>
	);
};

export default Notification;
