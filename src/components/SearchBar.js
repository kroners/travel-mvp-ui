import React, { useState, useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CustomInput from './CustomInput';
// import search_bar from '../style/search_bar.scss';

const SearchBar = ({
	placeholder,
	data,
	wordEntered,
	getWordEntered,
	setdestinationFromSearch,
}) => {
	const [filteredData, setFilteredData] = useState([]);
	const [showReview, setShowReview] = useState(false);
	const [summary, setSummary] = useState([]);
	const [newArray, setNewArray] = useState([]);
	console.log({ newArray });

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		getWordEntered(searchWord);
		const newFilter = data.filter((value) =>
			value.nombre.toLowerCase().includes(searchWord.toLowerCase())
		);

		if (searchWord === '') {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
			setSummary(newFilter);
		}
	};

	const fillInput = (value) => {
		getWordEntered(value.nombre);
		setShowReview(true);

		setNewArray([...newArray, value]);

		setFilteredData([]);
	};

	useEffect(
		(value) => {
			setdestinationFromSearch(newArray.map((x) => x.nombre));
		},
		[newArray]
	);

	return (
		<div className="search">
			<div
				className="searchInputs"
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-start',
				}}
			>
				<TextField
					label={placeholder}
					type="search"
					variant="outlined"
					onChange={handleFilter}
					value={wordEntered}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</div>
			{filteredData.length !== 0 && (
				<div
					className="dataResult"
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
					}}
				>
					{filteredData.map((value, i) => (
						<div
							onClick={() => fillInput(value)}
							key={i}
							id="clearBtn"
							className="dataItem"
						>
							<p>{value.nombre}</p>
						</div>
					))}
				</div>
			)}
			{showReview !== false && (
				<div className="accordion" style={{ marginTop: '2vh', width: '100%' }}>
					{newArray.map((value, i) => (
						<div
							key={i}
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr 1fr',
								gap: '10px',
								justifyContent: 'space-between',
							}}
						>
							{value.pais && (
								<CustomInput
									disabled
									id="duracion-input"
									label="Pais"
									className="general__input_field"
									value={value.pais.nombre}
								/>
							)}

							{value.ciudad && (
								<CustomInput
									disabled
									id="duracion-input"
									label="Ciudad"
									className="general__input_field"
									value={value.ciudad.nombre}
								/>
							)}

							{value.region && (
								<CustomInput
									disabled
									id="duracion-input"
									label="Region"
									className="general__input_field"
									value={value.region.nombre}
								/>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
