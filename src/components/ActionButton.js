import context from '../core/context';
import AddTodo from './AddTodo.js';
import EditButton from './EditButton.js';

const ActionButton = () => (context.state.editing
	? EditButton()
	: AddTodo()
);

export default ActionButton;
