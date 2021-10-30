import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getDestinations } from '../api';

const AutocompleteInput = ({ index, addDestination }) => {
	const [inputValue, setInputValue] = useState('');
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);
	const [selectedOption, setSelectedOption] = useState([]);
	const loading = open && options.length === 0;

	useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	const handleDestinationChange = async (e) => {
		const { value } = e.target;
		if (value.length >= 3) {
			const response = await getDestinations(value);
			const matchedDestinations = response.map((destino) => destino);
			console.log({ matchedDestinations });
			setOptions(matchedDestinations);
		}
	};

	const onGetOptionSelected = (option, value, optionIndex) => {
		console.log({ option, value, optionIndex });
		if (option.id === value.id) {
			setOptions([]);
			addDestination(option);
		}
	};

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
			getOptionSelected={(option, value) =>
				onGetOptionSelected(option, value, index)
			}
			getOptionLabel={(option) => option.nombre || ''}
			options={options}
			loading={loading}
			onInputChange={(e) => handleDestinationChange(e)}
			value={inputValue}
			onChange={(_event, newTeam) => {
				setInputValue(newTeam);
			}}
			className="general__input_field"
			renderInput={(params) => (
				<TextField
					{...params}
					label="Destino"
					fullWidth
					variant="outlined"
					InputProps={{
						...params.InputProps,
						type: 'search',
						endAdornment: (
							<>
								{loading ? (
									<CircularProgress color="inherit" size={20} />
								) : null}
								{params.InputProps.endAdornment}
							</>
						),
					}}
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
