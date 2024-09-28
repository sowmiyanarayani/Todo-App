import TodoManager from '../services/TodoManager';

const setInput = ({ data }) => ({ input: data });

const addTodo = ({ state }) => ({
	input: '',
	todos: TodoManager.addText(state.todos, state.input),
});

const deleteTodo = (context) =>
	({ todos: TodoManager.deleteTodo(context) });

const setEditing = (context) => ({
	editing: context.data,
	input: context.data.text,
});

const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
});

const toggleCompletion = (context) =>
	({ todos: TodoManager.toggleCompletion(context) });

const toggleTodos = (context) =>
	({ todos: TodoManager.toggleTodos(context) });

const clearCompleted = (context) =>
	({ todos: TodoManager.clearCompleted(context) });

const setFilter = (context) => ({ filter: context.data });

const actions = {
	setInput,
	addTodo,
	deleteTodo,
	setEditing,
	editTodo,
	toggleCompletion,
	toggleTodos,
	clearCompleted,
	setFilter,
};

export default actions;
