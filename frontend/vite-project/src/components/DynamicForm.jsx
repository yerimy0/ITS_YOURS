import React from 'react';
import { Form, Input, Button } from '../pages/Login/LoginStyles.jsx';

const DynamicForm = ({ inputPlaceholder1, inputPlaceholder2, buttonText, onSubmit, setUserId, setPassword }) => (
  <Form onSubmit={onSubmit}>
    <Input type="text" placeholder={inputPlaceholder1}/>
    <Input type="password" placeholder={inputPlaceholder2}} />
    <Button type="submit">{buttonText}</Button>
  </Form>
);

export default DynamicForm;
