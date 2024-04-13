import React from 'react';
import { TostWrap, Text } from './TostPopUpStyle';

const ToastPopup = ({ message }) => {
	return (
		<TostWrap>
			<Text>{message}</Text>
		</TostWrap>
	);
};

export default ToastPopup;
