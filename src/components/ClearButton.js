import { React } from 'react';
import TodoManager from '../services/TodoManager';
import context from '../core/context';
const ClearButton = () => {
	const { state: { todos }, actions: { clearCompleted }} = context;
	const hasNOTodos = TodoManager.hasNoTodos(todos);

	return hasNOTodos
		? null
		: <button	onClick={ clearCompleted }>Clear Completed</button>;
};

export default ClearButton;
