import { React } from 'react';
import InputTodo from './InputTodo';
import Todo from './Todo';
import AddTodo from './AddTodo';
import ToggleAllButton from './ToggleAllButton';
import ClearButton from './ClearButton';

const TodoPane = (context) => <div>
	<h1>Todo App</h1>
	<div>
		<ToggleAllButton { ...context }/>
		<InputTodo { ...context }/>
		<AddTodo { ...context }/>
	</div>
	<Todo { ...context }/>
	{ ClearButton() }
</div>;

export default TodoPane;
