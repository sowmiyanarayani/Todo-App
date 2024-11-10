/* eslint-disable max-len */
import React from 'react';
import Todo from './Todo';
import TodoManager from '../services/TodoManager';

const TodoList = (context) => {
	const { state: { sorted }, actions: { setSorted }} = context;

	const sortTodos = (todos) => [...todos].sort((a, b) => a.text.localeCompare(b.text));

	const filteredTodos = TodoManager.filterTodo(context);

	const todosToDisplay = sorted ? sortTodos(filteredTodos) : filteredTodos;

	return (
		<div>
			<button onClick={ () => setSorted(context) }>
				{ sorted ? 'UnSort' : 'Sort' }
			</button>
			{ todosToDisplay.map((todo) =>
				<Todo key={ todo.id } { ...todo }/>) }
		</div>
	);
};

export default TodoList;
