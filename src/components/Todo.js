/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';

const Todo = (context) => {
	const {
		state: { todos },
		actions: {
			setEditing, editTodo,
			deleteTodo, toggleCompletion,
		},
	} = context;

	return (
		<div>
			{ todos.map((todo) =>
				<span key={ todo.id }>
					<input
						type="checkbox"
						checked={ todo.completed }
						onChange={ () => toggleCompletion(todo.id) }
					/>
					<span onClick={ () => setEditing(todo) }>
						{ todo.text }
					</span>
					<button onClick={ () => deleteTodo(todo.id) }>
						Delete
					</button>
					<button onClick={ () => editTodo(todo.id) }>
						Edit
					</button>

				</span>) }
		</div>
	);
};

export default Todo;
