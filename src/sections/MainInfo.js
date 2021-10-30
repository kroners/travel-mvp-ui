import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
	DateRangePicker,
} from '@material-ui/pickers';
import CustomInput from '../components/CustomInput';
import SearchBar from '../components/SearchBar';

import TravelContext from '../context/Travel/TravelContext';
import { SAVE_DESTINATIONS } from '../context/types';
import AutocompleteInput from '../components/AutocompleteInput';

require('../style/main_info.scss');

function MainInfo() {
	// Group useContext together
	// deberian estar en el mismo destructure?
	const [state, dispatch] = useContext(TravelContext);
	const {
		destinos,
		fecha_inicio: fechaInicio,
		fecha_fin: fechaFin,
		precio_min: precioMin,
		precio_max: precioMax,
	} = state;
	console.log({ destinos });

	const [budgetRangeValue, setBudgetRangeValue] = useState([
		precioMin,
		precioMax,
	]);
	// donde se aplicaria el loading
	const [loading, setLoading] = useState(false);

	useEffect(() => {}, []);

	// handle click to add destination
	const handleAddDestination = (value) => {
		const newDestinos = [...destinos];
		newDestinos.push(value);
		dispatch({
			type: SAVE_DESTINATIONS,
			payload: newDestinos,
		});
	};

	// handle click to add destination
	const handleRemoveDestination = (id) => {
		console.log({ id });
		const updatedDestinos = destinos.filter((destino) => destino.id !== id);
		dispatch({
			type: 'REMOVE_DESTINATION',
			payload: {
				destinos: updatedDestinos,
			},
		});
	};

	const handleBudgetChange = (event, budget) => {
		console.log({ budget });
		setBudgetRangeValue(budget);
		dispatch({
			type: 'SAVE_BUDGET',
			payload: {
				precioMin: budget[0],
				precioMax: budget[1],
			},
		});
	};

	const handleDateChangeStart = (inicio) => {
		dispatch({
			type: 'SAVE_START_DATE',
			payload: {
				fechaInicio: inicio,
			},
		});
	};

	const handleDateChangeEnd = (fin) => {
		dispatch({
			type: 'SAVE_END_DATE',
			payload: {
				fechaFin: fin,
			},
		});
	};

	return (
		<div className="main_info">
			<Grid container spacing={2} className="main_info__content">
				<Grid item xs={6} className="main_info__side_content">
					<div className="main_info__wrapper">
						<div className="main_info__destino">
							<div className="main_info__destino_header">
								<h3>Destino</h3>
							</div>
							<div className="main_info__destino_body">
								<AutocompleteInput
									index={0}
									addDestination={handleAddDestination}
									destinationLength={destinos.length}
								/>
								{destinos.length >= 1 &&
									destinos.map((destino, i) => (
										<div className="main_info__destino_body_element" key={i}>
											<CustomInput id={destino.id} value={destino.nombre} />
											<RemoveCircleIcon
												className="fill_circle_primary"
												onClick={() => handleRemoveDestination(destino.id)}
											/>
										</div>
									))}
								{/* <SearchBar
									wordEntered={wordEntered}
									getWordEntered={setWordEntered}
									placeholder="Buscar destino(s)"
									data={destinationList}
									setdestinationFromSearch={setdestinationFromSearch}
								/> */}
							</div>
						</div>
						{/* Porque se creo este div si solo contiene a un div */}
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
							}}
						>
							<div className="main_info__fecha_tentaiva">
								<h3>Fecha tentativa</h3>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<KeyboardDatePicker
										margin="normal"
										label="Fecha de inicio"
										format="MM/dd/yyyy"
										value={fechaInicio}
										onChange={handleDateChangeStart}
										KeyboardButtonProps={{
											'aria-label': 'change date',
										}}
									/>
								</MuiPickersUtilsProvider>

								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<KeyboardDatePicker
										margin="normal"
										label="Fecha de finalizacion"
										format="MM/dd/yyyy"
										value={fechaFin}
										onChange={handleDateChangeEnd}
										KeyboardButtonProps={{
											'aria-label': 'change date',
										}}
									/>
								</MuiPickersUtilsProvider>

								<CustomInput
									disabled
									id="duracion-input"
									label="Duracion"
									className="general__input_field"
									value={Math.round(
										(fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)
									)}
								/>
							</div>
						</div>
						<div className="main_info__presupuesto">
							<h3>Presupuesto</h3>
							<Slider
								value={budgetRangeValue}
								onChange={handleBudgetChange}
								aria-labelledby="range-slider"
								valueLabelDisplay="on"
								getAriaValueText={(value) => `$${value}`}
								min={0}
								max={5000}
							/>
						</div>
					</div>
				</Grid>
				<Grid item xs={6}>
					<div className="main_info__side_text">
						<img src="../assets/aviones.jpg" alt="" />
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

MainInfo.propTypes = {};

export default MainInfo;
