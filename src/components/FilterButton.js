/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/TodoManager.js';

const FilterButton = (filter) => {
	const { todos } = context.state;
	const noTodos = TodoManager.getTodoCount(todos) === 0;

	return noTodos
		? null
		: <button
			key={ filter }
			onClick={ () => context.actions.setFilter(filter) }
		>{ filter }</button>;
};

export default FilterButton;
