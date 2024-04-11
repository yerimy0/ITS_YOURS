import React from 'react';
import { Button } from './AskSupportWriteStyles';

export function SubmitButton({ children }) {
	return <Button type="submit">{children}</Button>;
}
