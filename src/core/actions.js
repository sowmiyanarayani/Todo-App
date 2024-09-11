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

const editTodo = (context) => ({ todos: TodoManager.editTodo(context) });

const toggleCompletion = (context) =>
	({ todos: TodoManager.toggleCompletion(context) });

const toggleTodos = (context, isComplete) =>
	({ todos: TodoManager.toggleTodos(context.state.todos, isComplete) });

const clearCompleted = ({ state }) =>
	({ todos: TodoManager.clearCompleted(state.todos) });

const setFilter = (context, filter) => ({ filter });

const actions = {
	setInput, addTodo, deleteTodo, setEditing, editTodo,
	toggleCompletion, toggleTodos, clearCompleted, setFilter,
};

export default actions;
