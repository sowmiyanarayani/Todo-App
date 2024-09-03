import { React } from 'react';
import './App.scss';
import TodoPane from './components/TodoPane';

const App = (context) =>
	<div>
		<TodoPane { ...context }/>
	</div>;

export default App;
