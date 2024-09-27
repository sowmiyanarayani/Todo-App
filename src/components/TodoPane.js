import React from 'react';
import ToggleAllButton from './ToggleAllButton';
import InputTodo from './InputTodo';
import ActionButton from './ActionButton';
import ClearButton from './ClearButton';
import FilterBar from './FilterBar';
import TodoList from './TodoList';

const TodoPane = (context) =>
	<div className="todoPane">
		<h1>To-Do List</h1>
		<div className="todoControls">
			<ToggleAllButton { ...context }/>
			<InputTodo { ...context }/>
			<ActionButton/>
		</div>
		<div>
			<TodoList { ...context }/>
		</div>
		<div className="filterClear">
			<ClearButton { ...context }/>
			<FilterBar/>
		</div>
	</div>
;

export default TodoPane;
