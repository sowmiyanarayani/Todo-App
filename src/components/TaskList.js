/* eslint-disable function-paren-newline */
/* eslint-disable indent */
import React from 'react';
import Task from './Task';

const TaskList = (context) => {
	const { state: { tasks }} = context;

	return (
		<div>
			{ tasks.map((task) =>
				<Task key={ task.id } task={ task }/>
   ) }
		</div>
	);
};

export default TaskList;
