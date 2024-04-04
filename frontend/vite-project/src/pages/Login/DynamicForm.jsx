import React from 'react';
import { Form, Input, Button } from './LoginStyles.jsx';

const DynamicForm = ({ inputPlaceholder1, inputPlaceholder2, buttonText }) => (
  <Form>
    <Input type="text" placeholder={inputPlaceholder1} />
    {inputPlaceholder2 && <Input type="password" placeholder={inputPlaceholder2} />}
    <Button type="submit">{buttonText}</Button>
  </Form>
);

export default DynamicForm;
