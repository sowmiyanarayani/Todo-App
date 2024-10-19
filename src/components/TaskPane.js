import { React } from 'react';
import TaskList from './TaskList';

const TaskPane = (context) => <div>
	<h1>Task List</h1>
	<TaskList { ...context }/>
</div>;

export default TaskPane;
