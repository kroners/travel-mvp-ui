import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Checkbox } from '@material-ui/core';
import TravelContext from '../context/Travel/TravelContext';
import { SAVE_DESTINATIONS } from '../context/types';

require('../style/accommodation.scss');

function Accommadation() {
	const { dispatch, state } = useContext(TravelContext);

	const [estandar, setEstandar] = useState(false);
	const [confort, setConfort] = useState(false);
	const [lujo, setLujo] = useState(false);
	const [disableEstandar, setDisableEstandar] = useState(false);
	const [disableConfort, setDisableConfort] = useState(false);
	const [disableLujo, setDisableLujo] = useState(false);

	const [soloDesayuno, setSoloDesayuno] = useState(false);
	const [mediaPension, setMediaPension] = useState(false);
	const [pensionCompleta, setPensionCompleta] = useState(false);
	const [disableSoloDesayuno, setDisableSoloDesayuno] = useState(false);
	const [disableMediaPension, setDisableMediaPension] = useState(false);
	const [disablePensionCompleta, setDisablePensionCompleta] = useState(false);

	const [single, setSingle] = useState(false);
	const [doble, setDoble] = useState(false);
	const [triple, setTriple] = useState(false);
	const [disableSingle, setDisableSingle] = useState(false);
	const [disableDoble, setDisableDoble] = useState(false);
	const [disableTriple, setDisableTriple] = useState(false);

	const handleEstandar = (e) => {
		setEstandar(e.target.checked);
		if (estandar !== true) {
			setDisableConfort(true);
			setDisableLujo(true);
		} else {
			setDisableConfort(false);
			setDisableLujo(false);
		}
	};

	const handleConfort = (e) => {
		setConfort(e.target.checked);
		if (confort !== true) {
			setDisableEstandar(true);
			setDisableLujo(true);
		} else {
			setDisableEstandar(false);
			setDisableLujo(false);
		}
	};
	const handleLujo = (e) => {
		setLujo(e.target.checked);
		if (lujo !== true) {
			setDisableConfort(true);
			setDisableEstandar(true);
		} else {
			setDisableConfort(false);
			setDisableEstandar(false);
		}
	};

	const handleSoloDesayuno = (e) => {
		setSoloDesayuno(e.target.checked);
		if (soloDesayuno !== true) {
			setDisableMediaPension(true);
			setDisablePensionCompleta(true);
		} else {
			setDisableMediaPension(false);
			setDisablePensionCompleta(false);
		}
	};

	const handleMediaPension = (e) => {
		setMediaPension(e.target.checked);
		if (mediaPension !== true) {
			setDisableSoloDesayuno(true);
			setDisablePensionCompleta(true);
		} else {
			setDisableSoloDesayuno(false);
			setDisablePensionCompleta(false);
		}
	};
	const handlePensionCompleta = (e) => {
		setPensionCompleta(e.target.checked);
		if (pensionCompleta !== true) {
			setDisableMediaPension(true);
			setDisableSoloDesayuno(true);
		} else {
			setDisableMediaPension(false);
			setDisableSoloDesayuno(false);
		}
	};

	const handleSingle = (e) => {
		setSingle(e.target.checked);
		if (single !== true) {
			setDisableDoble(true);
			setDisableTriple(true);
		} else {
			setDisableDoble(false);
			setDisableTriple(false);
		}
	};

	const handleDoble = (e) => {
		setDoble(e.target.checked);
		if (doble !== true) {
			setDisableSingle(true);
			setDisableTriple(true);
		} else {
			setDisableSingle(false);
			setDisableTriple(false);
		}
	};

	const handleTriple = (e) => {
		setTriple(e.target.checked);
		if (triple !== true) {
			setDisableDoble(true);
			setDisableSingle(true);
		} else {
			setDisableDoble(false);
			setDisableSingle(false);
		}
	};

	useEffect(() => {
		dispatch({
			type: SAVE_DESTINATIONS,
			payload: {
				...state.saveDestinations,
				estandar,
				confort,
				lujo,
				soloDesayuno,
				mediaPension,
				pensionCompleta,
				single,
				doble,
				triple,
			},
		});
	}, [
		estandar,
		confort,
		lujo,
		soloDesayuno,
		mediaPension,
		pensionCompleta,
		single,
		doble,
		triple,
	]);

	console.log(useContext(TravelContext), 'useContext(TravelContext)');

	return (
		<div className="accommodation">
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<div className="accommodation__wrapper">
						<div className="accommodation__tipo_hospedaje">
							<h3>Tipo de hospedaje</h3>
							<div className="accommodation__tipo_hospedaje_wrapper">
								<div className="accommodation__opcion_hospedaje">
									<p>Estandar</p>
									<Checkbox
										onChange={handleEstandar}
										disabled={disableEstandar}
										color="primary"
										inputProps={{ 'aria-label': 'secondary checkbox' }}
									/>
								</div>
								<div className="accommodation__opcion_hospedaje">
									<p>Comfort</p>
									<Checkbox
										onChange={handleConfort}
										disabled={disableConfort}
										color="primary"
										inputProps={{ 'aria-label': 'secondary checkbox' }}
									/>
								</div>
								<div className="accommodation__opcion_hospedaje">
									<p>Lujo</p>
									<Checkbox
										onChange={handleLujo}
										disabled={disableLujo}
										color="primary"
										inputProps={{ 'aria-label': 'secondary checkbox' }}
									/>
								</div>
							</div>
						</div>
						<div className="accommodation__alimentacion">
							<h3>Alimentación</h3>
							<div className="accommodation__alimentacion_wrapper">
								<div className="accommodation__opcion_alimentacion">
									<p>Solo desayuno</p>
									<Checkbox
										onChange={handleSoloDesayuno}
										disabled={disableSoloDesayuno}
										color="primary"
										inputProps={{ 'aria-label': 'secondary checkbox' }}
									/>
								</div>
								<div className="accommodation__opcion_alimentacion">
									<p>Media pension</p>
									<Checkbox
										onChange={handleMediaPension}
										disabled={disableMediaPension}
										color="primary"
										inputProps={{ 'aria-label': 'secondary checkbox' }}
									/>
								</div>
								<div className="accommodation__opcion_alimentacion">
									<p>Pension completa</p>
									<Checkbox
										onChange={handlePensionCompleta}
										disabled={disablePensionCompleta}
										color="primary"
										inputProps={{ 'aria-label': 'secondary checkbox' }}
									/>
								</div>
							</div>
						</div>
						<div className="accommodation__tipo_habitacion">
							<h3>Tipo de habitación</h3>
							<div className="accommodation__tipo_habitacion_wrapper">
								<div className="accommodation__opcion_habitacion">
									<p>Single</p>
									<Checkbox
										onChange={handleSingle}
										disabled={disableSingle}
										color="primary"
										inputProps={{ 'aria-label': 'secondary checkbox' }}
									/>
								</div>
								<div className="accommodation__opcion_habitacion">
									<p>Doble</p>
									<Checkbox
										onChange={handleDoble}
										disabled={disableDoble}
										color="primary"
										inputProps={{ 'aria-label': 'secondary checkbox' }}
									/>
								</div>
								<div className="accommodation__opcion_habitacion">
									<p>Triple</p>
									<Checkbox
										onChange={handleTriple}
										disabled={disableTriple}
										color="primary"
										inputProps={{ 'aria-label': 'secondary checkbox' }}
									/>
								</div>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item xs={6} />
			</Grid>
		</div>
	);
}

export default Accommadation;
