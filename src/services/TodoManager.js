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

const deleteTodo = ({ state: { todos }, data }) =>
	todos.filter((select) => select.id !== data.id);

const editTodo = (
	todos, editingTodo, text
) =>
	todos.map((todo) => (todo.id !== editingTodo?.id
		? todo
		: { ...todo, text }));

const toggleCompletion = ({ state: { todos }, data }) =>
	todos.map((todo) => (todo.id !== data.id
		? todo
		: { ...todo, completed: !todo.completed }));

const toggleTodos = (todos, isComplete) =>
	todos.map((todo) => ({ ...todo, completed: isComplete }));

const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length;

const getAllCount = (todos) => todos.length;

const getClearCount = (todos) =>
	todos.filter((todo) => todo.completed).length;

const clearCompleted = (todos) =>
	todos.filter((todo) => !todo.completed);

const getTodoCount = (todos) => todos.length;

const filterTodo = (context) => {
	const filters = {
		all: () => true,
		active: (todo) => !todo.completed,
		completed: (todo) => todo.completed,
	};

	return context.state.todos.filter(filters[context.state.filter]);
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
