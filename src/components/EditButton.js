/* eslint-disable react/jsx-closing-bracket-location */
import { React } from 'react';

const EditButton = (context) => {
	const { state: { input }, actions: { editTodo }} = context;

	return <button
		disabled={ input === '' }
		onClick={ editTodo }
	>
		Edit</button>;
};

export default EditButton;
