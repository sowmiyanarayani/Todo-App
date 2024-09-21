import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import { peek } from '@laufire/utils/debug';
const { idLength } = config;
const filters = {
	all: () => true,
	active: (todo) => !todo.completed,
	completed: (todo) => todo.completed,
};

const getTodo = (text) => {
	peek(text);
	return {
		id: rndString(idLength),
		text: text,
		completed: false,
	};
};

const addText = (todos, text) =>
	(text === '' ? todos : [...todos, getTodo(text)]);

const deleteTodo = (context) => {
	const { state: { todos }, data } = context;

	peek(todos);
	return todos.filter((select) => select.id !== data);
};

const editTodo = (
	todos, editing, text
) =>
	todos.map((todo) => (todo.id !== editing?.id
		? todo
		: {
			...todo,
			text,
		}));

const toggleCompletion = (context) => {
	const { state: { todos }, data: id } = context;

	return todos.map((todo) => (todo.id !== id
		? todo
		: {
			...todo,
			completed: !todo.completed,
		}));
};

const toggleTodos = (todos, isComplete) => todos.map((todo) => ({
	...todo,
	completed: isComplete,
}));

const getActiveCount = (todos) =>
	todos.filter(filters.active).length;

const getAllCount = (todos) => todos.length;

const clearCompleted = (todos) => todos.filter(filters.active);

const getClearCount = (todos) => todos.filter(filters.completed).length;

const getTodoCount = (todos) => todos.length;

const filterTodo = (todos, filter) => {
	peek(filter);
	return todos.filter(filters[filter]);
};

const hasNoTodos = (todos) => getTodoCount(todos) === 0;

const TodoManager = {
	addText,
	deleteTodo,
	editTodo,
	toggleCompletion,
	toggleTodos,
	getTodoCount,
	hasNoTodos,
	getActiveCount,
	clearCompleted,
	getAllCount,
	getClearCount,
	filterTodo,
};

export default TodoManager;
