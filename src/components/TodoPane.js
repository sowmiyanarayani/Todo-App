import { React } from 'react';
import InputTodo from './InputTodo';
import Todo from './Todo';
import AddTodo from './AddTodo';

const TodoPane = (context) => <div>
	<h1>Todo App</h1>
	<div>
		<InputTodo { ...context }/>
		<AddTodo { ...context }/>

	</div>
	<Todo { ...context }/>
</div>;

export default TodoPane;
