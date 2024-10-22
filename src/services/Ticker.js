/* eslint-disable indent */

import context from '../core/context';

const Ticker = () => {
	const start = () => {
		const { actions: { addTask }, config: { tickerDelay, words }} = context;

		const getRandomWord = () =>
		words[Math.floor(Math.random() * words.length)];

		setInterval(() => {
			const randomWord = getRandomWord();

   addTask(randomWord);
		}, tickerDelay);
	};

	return start;
};

export default Ticker;
