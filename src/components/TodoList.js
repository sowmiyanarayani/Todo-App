import { React } from 'react';
import Todo from './Todo';
import context from '../core/context';
import TodoManager from '../services/TodoManager.js';

const TodoList = () => {
	const { state: { todos, filter }} = context;
	const filteredTodo = TodoManager.filterTodo(todos, filter);

	return	<div>{ filteredTodo.map(Todo) }</div>;
};

export default TodoList;
