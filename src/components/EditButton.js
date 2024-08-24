/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
const EditButton = (context) => {
	const {
		state: { input },
		actions: { EditTodo },
	} = context;

	return <button
		disabled={ input === '' }
		onClick={ EditTodo }
	       >
		Edit</button>;
};

export default EditButton;
