import React from 'react';
import { Button } from './FaqStyles';

function InquiryButton({ children, onClick }) {
	return <Button onClick={onClick}>{children}</Button>;
}

export default InquiryButton;
