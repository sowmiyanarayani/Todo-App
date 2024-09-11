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
	const { state: { todos }, data: id } = context;

	return todos.filter((filtered) => filtered.id !== id);
};

const editTodo = (context) => {
	const { state: { todos, editing, input }, state } = context;

	peek(state,);
	return todos.map((todo) => (todo.id !== editing?.id
		? todo
		: {
			...todo,
			text: input,
		}));
};

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

const getTodoCount = (todos) => todos.length;

const hasNoTodos = (todos) => getTodoCount(todos) === 0;

const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length;
const clearCompleted = (todos) => todos.filter(filters.active);

const TodoManager = {
	addText, deleteTodo, editTodo,
	toggleCompletion, toggleTodos, hasNoTodos, getActiveCount, clearCompleted,
};

export default TodoManager;
