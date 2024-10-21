/* eslint-disable indent */
import context from '../core/context';
const Ticker = () => {
	const start = () => {
		const { actions, config: { tickerDelay }} = context;

		setInterval(() => {
			actions.addTask('New task');
		}, tickerDelay);
	};

 return start;
};

export default Ticker;
