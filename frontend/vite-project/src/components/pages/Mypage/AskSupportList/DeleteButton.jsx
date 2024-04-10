import React from 'react';
import { Button } from './AskSupportListStyles';

function DeleteButton({ onClick }) {
	return <Button onClick={onClick}>삭제</Button>;
}

export default DeleteButton;
