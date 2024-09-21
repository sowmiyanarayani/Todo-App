import { React } from 'react';
import context from '../core/context';

const EditButton = () =>
	<button
		disabled={ context.state.input === '' }
		onClick={ context.actions.editTodo }
	>Ok</button>;

export default EditButton;
