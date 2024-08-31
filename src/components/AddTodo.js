import React from 'react';

const AddTodo = (context) => {
	const { state: { input }, actions: { addTodo }} = context;

	return (
		<div className="add-todo">
			<button
				disabled={ input === '' }
				onClick={ addTodo }
			>+</button>
		</div>
	);
};

export default AddTodo;
