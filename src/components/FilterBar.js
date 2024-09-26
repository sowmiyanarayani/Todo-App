import React from 'react';
import FilterButton from './FilterButton';

const filters = ['all', 'active', 'completed'];

const FilterBar = () =>
	<div>
		{ filters.map((filter) =>
			<FilterButton key={ filter } filter={ filter }/>) }
	</div>
;

export default FilterBar;
