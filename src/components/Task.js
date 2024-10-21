/* eslint-disable no-trailing-spaces */
/* eslint-disable max-lines-per-function */
import React from 'react';
import context from '../core/context';

const Task = ({ task }) => {
	const { text } = task;

	return (
		<div>
			<span>{ text }</span>
			<span>
				<button onClick={ () => {
					context.actions.addTaskTodo(task);
					context.actions.deleteTask(task);
				} }
				> + </button>
			</span>
			<span>
				<button onClick={ () => context.actions.deleteTask(task) }>
					X
				</button>
			</span>
		</div>
	);
};

export default Task;
