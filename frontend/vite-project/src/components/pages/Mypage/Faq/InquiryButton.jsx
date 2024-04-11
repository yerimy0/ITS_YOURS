// InquiryButton.jsx
import React from 'react';
import { Button } from './FaqStyles';

const InquiryButton = ({ children, onClick }) => {
	return <Button onClick={onClick}>{children}</Button>;
};

export default InquiryButton;
