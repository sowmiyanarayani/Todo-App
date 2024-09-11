import FilterButton from './FilterButton';
import { React } from 'react';

const filters = ['all', 'active', 'completed'];
const FilterBar = () =>
	<div> { filters.map(FilterButton) }</div>;

export default FilterBar;
