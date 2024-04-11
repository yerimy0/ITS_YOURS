import React from 'react';
import { Form, Input, Button } from './UsersStyles';

const DynamicForm = ({
	inputPlaceholder1,
	inputPlaceholder2,
	buttonText,
	onSubmit,
	setInput1,
	setInput2,
	inputType1 = 'text',
	inputType2 = 'text',
}) => (
	<Form onSubmit={onSubmit}>
		<Input
			type={inputType1}
			placeholder={inputPlaceholder1}
			onChange={e => setInput1(e.target.value)}
		/>
		<Input
			type={inputType2}
			placeholder={inputPlaceholder2}
			onChange={e => setInput2(e.target.value)}
		/>
		<Button type="submit">{buttonText}</Button>
	</Form>
);

export default DynamicForm;
