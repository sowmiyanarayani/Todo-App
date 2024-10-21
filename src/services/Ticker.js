/* eslint-disable padding-line-between-statements */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
import context from '../core/context';

const Ticker = () => {
	const start = () => {
		const { actions, config: { tickerDelay, words }} = context;

		const getRandomWord = () => {
						return words[Math.floor(Math.random() * words.length)];
		};

		setInterval(() => {
			const randomWord = getRandomWord();
		actions.addTask(randomWord);
		}, tickerDelay);
	};

	return start;
};

export default Ticker;
