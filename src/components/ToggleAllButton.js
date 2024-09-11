/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent-props */
import { React } from 'react';
import TodoManager from '../services/TodoManager';
const ToggleAllButton = (context) => {
	const {
		state: { todos },
		actions: { toggleTodos },
	} = context;
	const isChecked = TodoManager.getActiveCount(todos) === 0 ;
	const noTodos = TodoManager.hasNoTodos(todos) ;

	return noTodos
		? null
		: <input
			type="checkbox"
			checked={	isChecked	}
			onChange={ () => toggleTodos(!isChecked) }
		  />;
};

export default ToggleAllButton;
