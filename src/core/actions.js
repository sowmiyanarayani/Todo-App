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

const actions = {
	setInput, addTodo, deleteTodo, setEditing, editTodo,
	toggleCompletion,
};

export default actions;
