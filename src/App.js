/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { React, useEffect } from 'react';
import './App.scss';
import TodoPane from './components/TodoPane';
import TaskPane from './components/TaskPane';
import Ticker from './services/Ticker';

const App = (context) => {
 useEffect(Ticker, []);

return <div>
  <TodoPane { ...context }/>
	<TaskPane { ...context }/>
</div>;
};

export default App;
