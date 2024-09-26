import React from 'react';
import Todo from './Todo';
import TodoManager from '../services/TodoManager';
const TodoList = (context) => {
	const filteredTodos = TodoManager.filterTodo(context);

	return (
		<div>
			{ filteredTodos.map((todo) =>
				<Todo key={ todo.id } { ...todo }/>) }
		</div>
	);
};

export default TodoList;
