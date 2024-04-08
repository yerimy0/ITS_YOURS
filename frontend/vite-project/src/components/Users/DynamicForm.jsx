import React from 'react';
import { Form, Input, Button } from './UsersStyles';

const DynamicForm = ({
	inputPlaceholder1,
	inputPlaceholder2,
	buttonText,
	onSubmit,
	setUserId,
	setPassword,
	inputType1 = 'text',
	inputType2 = 'text',
}) => (
	<Form onSubmit={onSubmit}>
		<Input
			type={inputType1}
			placeholder={inputPlaceholder1}
			onChange={e => setUserId(e.target.value)}
		/>
		<Input
			type={inputType2}
			placeholder={inputPlaceholder2}
			onChange={e => setPassword(e.target.value)}
		/>
		<Button type="submit">{buttonText}</Button>
	</Form>
);

export default DynamicForm;
