import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import {
	Button,
	ButtonGroup,
	Checkbox,
	FormControlLabel,
	Radio,
	RadioGroup,
} from '@material-ui/core';
import TravelContext from '../context/Travel/TravelContext';

require('../style/services.scss');

export const Services = () => {
	const [state, dispatch] = useContext(TravelContext);
	const {
		adultos,
		ninos,
		bebes,
		servicios,
		tipo_servicio: tipoServicioState,
	} = state;

	const [tipoServicio, setTipoServicio] = useState(tipoServicioState);
	const [traslados, setTraslados] = useState(false);
	const [shows, setShows] = useState(false);
	const [excursiones, setExcursiones] = useState(false);

	const handleTipoServiciosChange = (event) => {
		setTipoServicio(event.target.value);
		dispatch({ type: 'SAVE_TIPO_SERVICIO', payload: event.target.value });
	};

	const handleCantidadUpdate = ({ operation, personType }) => {
		let newCounter;
		let payload;

		/* eslint-disable no-nested-ternary */
		switch (personType) {
			case 'adultos':
				newCounter =
					operation === 'increment'
						? adultos + 1
						: adultos <= 0
						? 0
						: adultos - 1;
				payload = { adultos: newCounter };
				break;
			case 'ninos':
				newCounter =
					operation === 'increment' ? ninos + 1 : ninos <= 0 ? 0 : ninos - 1;
				payload = { ninos: newCounter };
				break;
			case 'bebes':
				newCounter =
					operation === 'increment' ? bebes + 1 : bebes <= 0 ? 0 : bebes - 1;
				payload = { bebes: newCounter };
				break;
			default:
				break;
		}
		/* eslint-enable */

		dispatch({
			type: 'SAVE_CANTIDAD_PERSONAS',
			payload,
		});
	};

	const handleTraslados = (e) => {
		setTraslados(e.target.checked);
	};

	const handleShows = (e) => {
		setShows(e.target.checked);
	};

	const handleExcursiones = (e) => {
		setExcursiones(e.target.checked);
	};

	useEffect(() => {
		let selectedServices = servicios ? servicios.split(',') : [];
		if (traslados && selectedServices.indexOf(1) < 0) {
			selectedServices.push(1);
		}
		if (shows && selectedServices.indexOf(2) < 0) {
			selectedServices.push(2);
		}
		if (excursiones && selectedServices.indexOf(3) < 0) {
			selectedServices.push(3);
		}

		if (selectedServices.length > 0) {
			selectedServices = selectedServices.join(',');
			dispatch({ type: 'SAVE_SERVICIOS', payload: selectedServices });
		}
	}, [traslados, shows, excursiones]);

	return (
		<div className="services">
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<div className="services__wrapper">
						<div className="services__destino">
							<div className="services__cantidad_personas">
								<h3>Cantidad de personas</h3>
								<div
									style={{
										display: 'flex',
									}}
								>
									<span
										style={{
											display: 'flex',
											justifyContent: 'left',
											alignItems: 'center',
											width: '30%',
										}}
									>
										Adultos (12 a más)
									</span>
									<ButtonGroup
										size="small"
										aria-label="small outlined button group"
									>
										<Button
											onClick={() =>
												handleCantidadUpdate({
													operation: 'decrement',
													personType: 'adultos',
												})
											}
										>
											-
										</Button>
										<Button disabled>{adultos}</Button>
										<Button
											onClick={() =>
												handleCantidadUpdate({
													operation: 'increment',
													personType: 'adultos',
												})
											}
										>
											+
										</Button>
									</ButtonGroup>
								</div>
								<div className="services__cantidad_ninos">
									<span
										style={{
											display: 'flex',
											justifyContent: 'left',
											alignItems: 'center',
											width: '30%',
										}}
									>
										Niños (2 - 12)
									</span>
									<ButtonGroup
										size="small"
										aria-label="small outlined button group"
									>
										<Button
											onClick={() =>
												handleCantidadUpdate({
													operation: 'decrement',
													personType: 'ninos',
												})
											}
										>
											-
										</Button>
										<Button disabled>{ninos}</Button>
										<Button
											onClick={() =>
												handleCantidadUpdate({
													operation: 'increment',
													personType: 'ninos',
												})
											}
										>
											+
										</Button>
									</ButtonGroup>
								</div>
								<div className="services__cantidad_bebes">
									<span
										style={{
											display: 'flex',
											justifyContent: 'left',
											alignItems: 'center',
											width: '30%',
										}}
									>
										Bebes (0 - 2)
									</span>
									<ButtonGroup
										size="small"
										aria-label="small outlined button group"
									>
										<Button
											onClick={() =>
												handleCantidadUpdate({
													operation: 'decrement',
													personType: 'bebes',
												})
											}
										>
											-
										</Button>
										<Button disabled>{bebes}</Button>
										<Button
											onClick={() =>
												handleCantidadUpdate({
													operation: 'increment',
													personType: 'bebes',
												})
											}
										>
											+
										</Button>
									</ButtonGroup>
								</div>
							</div>
						</div>
						<div className="services__opciones">
							<h3>Servicios</h3>
							<div className="services__opciones_wrapper">
								<div className="services__opcion_container_traslado">
									<div>
										<FormControlLabel
											labelPlacement="start"
											control={
												<Checkbox
													onChange={handleTraslados}
													color="primary"
													inputProps={{ 'aria-label': 'secondary checkbox' }}
												/>
											}
											label="Traslado"
										/>
									</div>
								</div>
								<div className="services__opcion_container_shows">
									<div>
										<FormControlLabel
											labelPlacement="start"
											control={
												<Checkbox
													onChange={handleShows}
													color="primary"
													inputProps={{ 'aria-label': 'secondary checkbox' }}
												/>
											}
											label="Shows"
										/>
									</div>
								</div>
								<div className="services__opcion_container_excursiones">
									<div>
										<FormControlLabel
											labelPlacement="start"
											control={
												<Checkbox
													onChange={handleExcursiones}
													color="primary"
													inputProps={{ 'aria-label': 'secondary checkbox' }}
												/>
											}
											label="Excursiones"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="services__tipo_servicio">
							<h3>Tipo de servicio</h3>
							<RadioGroup
								aria-label="tipo-servicio"
								name="controlled-radio-buttons-group"
								value={tipoServicio}
								onChange={handleTipoServiciosChange}
							>
								<div className="services__opcion_tipo_servicio">
									<span
										style={{
											display: 'flex',
											justifyContent: 'left',
											alignItems: 'center',
											width: '30%',
										}}
									>
										Privado con guía
									</span>
									<FormControlLabel value="privado-guia" control={<Radio />} />
								</div>
								<div className="services__opcion_tipo_servicio">
									<span
										style={{
											display: 'flex',
											justifyContent: 'left',
											alignItems: 'center',
											width: '30%',
										}}
									>
										Privado sin guía
									</span>
									<FormControlLabel value="privado-solo" control={<Radio />} />
								</div>
								<div className="services__opcion_tipo_servicio">
									<span
										style={{
											display: 'flex',
											justifyContent: 'left',
											alignItems: 'center',
											width: '30%',
										}}
									>
										Regular
									</span>
									<FormControlLabel value="regular" control={<Radio />} />
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
};
Services.propTypes = {};
