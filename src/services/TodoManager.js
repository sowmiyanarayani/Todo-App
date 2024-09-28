import { rndString } from '@laufire/utils/random';
import config from '../core/config';
const { idLength } = config;

const getTodo = (text) => ({
	id: rndString(idLength),
	text: text,
	completed: false,
});

const addText = (todos, text) =>
	(text === '' ? todos : [...todos, getTodo(text)]);

const deleteTodo = (context) => {
	const { state: { todos }, data } = context;

	return todos.filter((select) => select.id !== data.id);
};

const editTodo = (
	todos, editingTodo, text
) =>

	todos.map((todo) => (todo.id !== editingTodo?.id
		? todo
		: { ...todo, text }));

const toggleCompletion = (context) => {
	const { state: { todos }, data } = context;

	return todos.map((todo) => (todo.id !== data.id
		? todo
		: { ...todo, completed: !todo.completed }));
};

const toggleTodos = (context) => {
	const { state: { todos }, data } = context;

	return todos.map((todo) => ({ ...todo, completed: data }));
};

const getActiveCount = (context) => {
	const { state: { todos }} = context;

	return todos.filter((todo) => !todo.completed).length;
};

const getTodoCount = (todos) => todos.length;

const hasNoTodos = (todos) => getTodoCount(todos) === 0;

const clearCompleted = (context) => {
	const { state: { todos }} = context;

	return todos.filter((todo) => !todo.completed);
};

const filterTodo = (context) => {
	const { state: { todos, filter }} = context;
	const filters = {
		all: () => true,
		active: (todo) => !todo.completed,
		completed: (todo) => todo.completed,
	};

	return todos.filter(filters[filter]);
};

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
	filterTodo,
};

export default TodoManager;
