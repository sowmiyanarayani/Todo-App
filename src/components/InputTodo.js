import { React } from 'react';
const InputTodo = (context) => {
	const { state: { input }, actions: { setInput }} = context;

	return <div className="input-todo">
		<input
			type="text"
			placeholder="Add a New Task"
			value={ input }
			onChange={ (event) => setInput(event.target.value) }
		/>
	</div>;
};

export default InputTodo;
