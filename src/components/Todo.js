/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

import { React } from 'react';
import context from '../core/context';

const Todo = ({ id, text, completed }) =>
	<div key={ id }>
		<span>
			<input
				type="checkbox"
				checked={ completed }
				onChange={ () => { context.actions.toggleCompletion({ id, text, completed }); } }
			/>
		</span>
		<span
			onClick={ () => context.actions.setEditing({ id, text, completed }) }
		>
			{ text }</span>
		<span>
			<button onClick={ () => context.actions.deleteTodo({ id, text, completed }) }> X
			</button>
		</span>
	</div>;

export default Todo;
