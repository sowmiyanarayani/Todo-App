import config from './config';
import { rndString } from '@laufire/utils/random';

const { refreshIDLength } = config;

const seed = {
	refreshID: rndString(refreshIDLength),
	input: '',
	todos: [
		{ id: 1, text: 'a', completed: false },
		{ id: 2, text: 'c', completed: false },
		{ id: 3, text: 'b', completed: false },
	],
	editing: null,
	filter: 'all',
	tasks: [
		{ id: 1, text: 'Task1', completed: false },
		{ id: 2, text: 'Task2', completed: false },
		{ id: 3, text: 'Task3', completed: false },
	],
	sorted: false,
};

export default seed;
