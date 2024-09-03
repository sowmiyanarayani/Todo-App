import config from './config';
import { rndString } from '@laufire/utils/random';

const { refreshIDLength } = config;

const seed = {
	refreshID: rndString(refreshIDLength),
	input: '',
	todos: [],
	editing: false,
};

export default seed;