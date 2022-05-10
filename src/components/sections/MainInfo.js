import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import CustomInput from '../CustomInput';

import TravelContext from '../../context/Travel/TravelContext';
import { SAVE_DESTINATIONS } from '../../context/types';
import AutocompleteInput from '../AutocompleteInput';

require('../../style/main_info.scss');

function MainInfo() {
	const [state, dispatch] = useContext(TravelContext);
	const {
		destinos,
		fecha_inicio: fechaInicio,
		fecha_fin: fechaFin,
		precio_min: precioMin,
		precio_max: precioMax,
	} = state;

	const [budgetRangeValue, setBudgetRangeValue] = useState([
		precioMin,
		precioMax,
	]);

	// handle function to add destination
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
		const updatedDestinos = destinos.filter((destino) => destino.id !== id);
		dispatch({
			type: 'REMOVE_DESTINATION',
			payload: {
				destinos: updatedDestinos,
			},
		});
	};

	const handleBudgetChange = (event, budget) => {
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
								{destinos.length >= 1 && (
									<div className="main_info__destino_body_elements">
										{destinos.map((destino, i) => (
											<div className="main_info__destino_body_element" key={i}>
												<CustomInput
													id={destino.id}
													value={destino.nombre}
													disabled
													className="main_info__destino_selected"
												/>
												<RemoveCircleIcon
													className="destino_selected--remove"
													onClick={() => handleRemoveDestination(destino.id)}
												/>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
						<div className="main_info__fechas">
							<div className="main_info__fechas_rangos">
								<h3>Fecha tentativa</h3>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<KeyboardDatePicker
										margin="normal"
										label="Fecha de inicio"
										format="dd/MM/yyyy"
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
										format="dd/MM/yyyy"
										value={fechaFin}
										onChange={handleDateChangeEnd}
										KeyboardButtonProps={{
											'aria-label': 'change date',
										}}
									/>
								</MuiPickersUtilsProvider>
							</div>

							<div className="main_info__fechas_duracion">
								<h3>Duracion</h3>
								<CustomInput
									disabled
									id="duracion-input"
									className="general__input_field"
									value={Math.round(
										(fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)
									)}
								/>
							</div>
						</div>
						<div className="main_info__presupuesto">
							<h3>Presupuesto</h3>
							<div className="main_info__presupuesto_slider">
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

export default MainInfo;
