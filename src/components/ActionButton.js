import context from '../core/context';
import AddTodo from './AddTodo.js';
import EditButton from './EditButton.js';

const ActionButton = () => {
	const { state: { editing }} = context;

	return editing ? EditButton() : AddTodo();
};

export default ActionButton;
