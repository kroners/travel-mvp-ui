import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import TravelContext from '../context/Travel/TravelContext';

require('../style/accommodation.scss');

function Accommadation() {
	const [state, dispatch] = useContext(TravelContext);
	const {
		alimentacion: alimentacionState,
		tipo_habitacion: tipoHabitacionState,
		tipo_hospedaje: tipoHospedajeState,
	} = state;

	const [tipoHospedaje, setTipoHospedaje] = useState(tipoHospedajeState);
	const [tipoHabitacion, setTipoHabitacion] = useState(tipoHabitacionState);
	const [alimentacion, setAlimentacion] = useState(alimentacionState);

	const handleTipoHospedajeChange = (event) => {
		setTipoHospedaje(event.target.value);
		dispatch({ type: 'SAVE_TIPO_HOSPEDAJE', payload: event.target.value });
	};

	const handleTipoHabitacionChange = (event) => {
		setTipoHabitacion(event.target.value);
		dispatch({ type: 'SAVE_TIPO_HABITACION', payload: event.target.value });
	};

	const handleAlimentacionChange = (event) => {
		setAlimentacion(event.target.value);
		dispatch({ type: 'SAVE_ALIMENTACION', payload: event.target.value });
	};

	return (
		<div className="accommodation">
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<div className="accommodation__wrapper">
						<div className="accommodation__tipo_hospedaje">
							<h3>Tipo de hospedaje</h3>
							<RadioGroup
								aria-label="tipo-servicio"
								name="controlled-radio-buttons-group"
								value={tipoHospedaje}
								onChange={handleTipoHospedajeChange}
							>
								<div className="accommodation__tipo_hospedaje_wrapper">
									<div className="accommodation__opcion_hospedaje">
										<span
											style={{
												display: 'flex',
												justifyContent: 'left',
												alignItems: 'center',
												width: '30%',
											}}
										>
											Estandar
										</span>
										<FormControlLabel value="estandar" control={<Radio />} />
									</div>
									<div className="accommodation__opcion_hospedaje">
										<span
											style={{
												display: 'flex',
												justifyContent: 'left',
												alignItems: 'center',
												width: '30%',
											}}
										>
											Comfort
										</span>
										<FormControlLabel value="comfort" control={<Radio />} />
									</div>
									<div className="accommodation__opcion_hospedaje">
										<span
											style={{
												display: 'flex',
												justifyContent: 'left',
												alignItems: 'center',
												width: '30%',
											}}
										>
											Lujo
										</span>
										<FormControlLabel value="lujo" control={<Radio />} />
									</div>
								</div>
							</RadioGroup>
						</div>
						<div className="accommodation__alimentacion">
							<h3>Alimentación</h3>
							<RadioGroup
								aria-label="tipo-servicio"
								name="controlled-radio-buttons-group"
								value={alimentacion}
								onChange={handleAlimentacionChange}
							>
								<div className="accommodation__alimentacion_wrapper">
									<div className="accommodation__opcion_alimentacion">
										<span
											style={{
												display: 'flex',
												justifyContent: 'left',
												alignItems: 'center',
												width: '30%',
											}}
										>
											Solo desayuno
										</span>
										<FormControlLabel value="desayuno" control={<Radio />} />
									</div>
									<div className="accommodation__opcion_alimentacion">
										<span
											style={{
												display: 'flex',
												justifyContent: 'left',
												alignItems: 'center',
												width: '30%',
											}}
										>
											Media pension
										</span>
										<FormControlLabel
											value="media-pension"
											control={<Radio />}
										/>
									</div>
									<div className="accommodation__opcion_alimentacion">
										<span
											style={{
												display: 'flex',
												justifyContent: 'left',
												alignItems: 'center',
												width: '30%',
											}}
										>
											Pension completa
										</span>
										<FormControlLabel
											value="pension-completa"
											control={<Radio />}
										/>
									</div>
								</div>
							</RadioGroup>
						</div>
						<div className="accommodation__tipo_habitacion">
							<h3>Tipo de habitación</h3>
							<RadioGroup
								aria-label="tipo-servicio"
								name="controlled-radio-buttons-group"
								value={tipoHabitacion}
								onChange={handleTipoHabitacionChange}
							>
								<div className="accommodation__tipo_habitacion_wrapper">
									<div className="accommodation__opcion_habitacion">
										<span
											style={{
												display: 'flex',
												justifyContent: 'left',
												alignItems: 'center',
												width: '30%',
											}}
										>
											Single
										</span>
										<FormControlLabel value="single" control={<Radio />} />
									</div>
									<div className="accommodation__opcion_habitacion">
										<span
											style={{
												display: 'flex',
												justifyContent: 'left',
												alignItems: 'center',
												width: '30%',
											}}
										>
											Doble
										</span>
										<FormControlLabel value="doble" control={<Radio />} />
									</div>
									<div className="accommodation__opcion_habitacion">
										<span
											style={{
												display: 'flex',
												justifyContent: 'left',
												alignItems: 'center',
												width: '30%',
											}}
										>
											Triple
										</span>
										<FormControlLabel value="triple" control={<Radio />} />
									</div>
								</div>
							</RadioGroup>
						</div>
					</div>
				</Grid>
				<Grid item xs={6}>
					<div className="main_info__side_text">
						<img src="../assets/grupal.jpg" alt="" />
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Accommadation;
