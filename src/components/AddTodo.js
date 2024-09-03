/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const AddTodo = (context) => {
	const { state: { input }, actions: { addTodo }} = context;

	return <button
		disabled={ input === '' }
		onClick={ addTodo }
	       >+</button>;
};

export default AddTodo;
