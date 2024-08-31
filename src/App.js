import { React } from 'react';
import './App.scss';
import OutputTodo from './components/OutputTodo';

const App = (context) =>
	<div className="todoContainer">
		<OutputTodo { ...context }/>
	</div>;

export default App;
