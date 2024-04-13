import React from 'react';
import { Input, TextArea } from './AskSupportWriteStyles';

export function InputField({ type, value, onChange, placeholder }) {
	if (type === 'text') {
		return <Input value={value} onChange={onChange} placeholder={placeholder} />;
	} else if (type === 'textarea') {
		return <TextArea value={value} onChange={onChange} placeholder={placeholder} />;
	}
}
