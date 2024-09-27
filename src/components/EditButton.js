import { React } from 'react';
import context from '../core/context';

const EditButton = () => {
	const {
		state: input,
		actions: { editTodo },
	} = context;

	return <span>
		<button
			disabled={ input === '' }
			onClick={ editTodo }
		>Ok</button>
	</span>;
};

export default EditButton;
