import React from 'react';
import ToggleAllButton from './ToggleAllButton';
import InputTodo from './InputTodo';
import ActionButton from './ActionButton';
import ClearButton from './ClearButton';
import FilterBar from './FilterBar';
import TodoList from './TodoList';

const TodoPane = (context) =>
	<div className="todoPane">
		<h1>Todo App</h1>
		<div className="todoControls">
			<ToggleAllButton { ...context }/>
			<InputTodo { ...context }/>
			{ ActionButton() }
		</div>
		<div className="todoList">
			<TodoList/>
		</div>
		<div>
			<ClearButton { ...context }/>
		</div>
		<div>{ FilterBar() }</div>
	</div>;

export default TodoPane;
