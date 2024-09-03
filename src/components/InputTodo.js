import { React } from 'react';
const InputTodo = (context) => {
	const { state: { input }, actions: { setInput }} = context;

	return <span>

		<input
			type="text"
			placeholder="Add a New Task"
			value={ input }
			onChange={ (event) => setInput(event.target.value) }
		/>
	</span>;
};

export default InputTodo;
