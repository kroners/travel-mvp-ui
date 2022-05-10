import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getDestinations } from '../api';

const AutocompleteInput = ({ index, addDestination }) => {
	// Pending to fix how to clear input in autocomplete
	// const [inputValue, setInputValue] = useState();
	const [searchWord, setSearchWord] = useState('');
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);
	const [selectedOption, setSelectedOption] = useState(null);
	const loading = open && options.length === 0;

	useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	const handleOnInputChange = async (e) => {
		const { value } = e.target;
		if (value && value.length >= 3) {
			setSearchWord(value);
		}
	};

	const handleDestinationChangeOnSelectedOption = (event, value) => {
		setSelectedOption(value);
	};

	useEffect(async () => {
		if (searchWord && searchWord.length >= 3) {
			const response = await getDestinations(searchWord);
			// Pending to fix the matched destinations result.
			// Sometimes getting all posible results
			const matchedDestinations = response.map((destino) => destino);
			setOptions(matchedDestinations);
		}
	}, [searchWord]);

	useEffect(() => {
		if (selectedOption) {
			addDestination(selectedOption);
			// Pending to fix how to clear input in autocomplete
			// setInputValue('');
			setOpen(false);
		}
	}, [selectedOption]);

	return (
		<Autocomplete
			id={`autocomplete-input-${index}`}
			open={open}
			onOpen={() => {
				setOpen(true);
			}}
			onClose={() => {
				setOpen(false);
			}}
			getOptionSelected={(option, value) => option.id === value.id}
			getOptionLabel={(option) => option.nombre || ''}
			options={options}
			loading={loading}
			onInputChange={handleOnInputChange}
			// value={inputValue}
			onChange={handleDestinationChangeOnSelectedOption}
			className="general__input_field"
			renderInput={(params) => (
				<TextField
					{...params}
					label="Destino"
					fullWidth
					variant="outlined"
					// InputProps={{
					// 	...params.InputProps,
					// 	type: 'search',
					// 	endAdornment: (
					// 		<>
					// 			{loading ? (
					// 				<CircularProgress color="inherit" size={20} />
					// 			) : null}
					// 			{params.InputProps.endAdornment}
					// 		</>
					// 	),
					// }}
				/>
			)}
		/>
	);
};

AutocompleteInput.propTypes = {
	index: PropTypes.any,
	addDestination: PropTypes.func,
};

export default AutocompleteInput;
