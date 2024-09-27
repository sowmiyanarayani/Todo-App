import { React } from 'react';
import context from '../core/context';

const AddTodo = () => {
	const {
		state: { input },
		actions: { addTodo },
	} = context;

	return <span>
		<button
			disabled={ input === '' }
			onClick={ addTodo }
		>+</button>
	</span>;
};

export default AddTodo;
