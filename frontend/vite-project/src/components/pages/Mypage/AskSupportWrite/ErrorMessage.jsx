import React from 'react';
import { ErrorText } from './AskSupportWriteStyles';

export function ErrorMessage({ message }) {
	return <ErrorText>{message}</ErrorText>;
}
