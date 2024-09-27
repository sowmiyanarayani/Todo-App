import React from 'react';
import context from '../core/context';
import TodoManager from '../services/TodoManager.js';

const FilterButton = ({ filter }) => {
	const {
		state: { todos },
		actions: { setFilter },
	} = context;

	const noTodos = TodoManager.getTodoCount(todos) === 0;

	return noTodos
		? null
		: <button key={ filter } onClick={ () => setFilter(filter) }>
			{ filter }
		</button>;
};

export default FilterButton;
