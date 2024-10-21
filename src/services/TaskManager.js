import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import { peek } from '@laufire/utils/debug';

const { idLength } = config;

const getTask = (text) => ({
	id: rndString(idLength),
	text: text,
	completed: false,
});

const addTask = (context) => {
	const { state: { tasks }, data } = context;

	peek(getTask);
	return data.text === '' ? tasks : [...tasks, getTask(data)];
};

const deleteTask = (context) => {
	const { state: { tasks }, data: { id }} = context;

	return tasks.filter((select) => select.id !== id);
};

const TodoManager = {
	addTask,
	deleteTask,
};

export default TodoManager;
