import { React } from 'react';
import TodoManager from '../services/TodoManager';

const ClearButton = (context) => {
	const { state: { todos }, actions: { clearCompleted }} = context;

	const hasNOTodos = TodoManager.hasNoTodos(todos);

	return hasNOTodos
		? null
		: <button	onClick={ clearCompleted }>Clear Completed</button>;
};

export default ClearButton;
