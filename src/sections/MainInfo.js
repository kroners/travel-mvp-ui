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

require('../style/main_info.scss');

function MainInfo() {
	// Group useContext together
	// deberian estar en el mismo destructure?
	const { dispatch, state } = useContext(TravelContext);
	const { destinations, getDestinations } = useContext(TravelContext);

	const [budgetValue, setBudgetValue] = useState([150, 2000]);
	const [selectedDateStart, setSelectedDateStart] = useState(new Date());
	const [selectedDateEnd, setSelectedDateEnd] = useState(new Date());
	const [wordEntered, setWordEntered] = useState('');
	// donde se aplicaria el loading
	const [loading, setLoading] = useState(false);
	const [destinationList, setDestinationList] = useState(destinations);

	const [destinationFromSearch, setdestinationFromSearch] = useState([]);
	console.log(destinationFromSearch, 'data');

	useEffect(() => {
		setLoading(true);
		const getDest = async () => {
			const res = await getDestinations();

			if (res.data.length) {
				setLoading(false);
				setDestinationList(res.data);
			}
		};
		getDest();
	}, []);

	//   handle click to add destination
	//    const handleAddDestination = () => {
	//      setDestinationList([...destinationList, { destination: '' }]);
	//    };

	const handleBudgetChange = (event, newValue) => {
		setBudgetValue(newValue);
	};

	const handleDateChangeStart = (inicio) => {
		setSelectedDateStart(inicio);
	};

	const handleDateChangeEnd = (fin) => {
		setSelectedDateEnd(fin);
	};

	useEffect(() => {
		dispatch({
			type: SAVE_DESTINATIONS,
			payload: {
				...state.saveDestinations,
				destinationFromSearch,
				selectedDateStart,
				selectedDateEnd,
				duracion: Math.round(
					(selectedDateEnd - selectedDateStart) / (1000 * 60 * 60 * 24)
				),
				presupuesto: budgetValue,
			},
		});
	}, [
		// me gustaria entender mas de como se aplica este useEffect
		// estaria haciendo un trigger por cada cambio que se haya realizado en algun cambio de estas variables?
		wordEntered,
		selectedDateStart,
		selectedDateEnd,
		budgetValue,
		destinationFromSearch,
		dispatch,
	]);

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
								<SearchBar
									wordEntered={wordEntered}
									getWordEntered={setWordEntered}
									placeholder="Buscar destino(s)"
									data={destinationList}
									setdestinationFromSearch={setdestinationFromSearch}
								/>
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
										value={selectedDateStart}
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
										value={selectedDateEnd}
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
										(selectedDateEnd - selectedDateStart) /
											(1000 * 60 * 60 * 24)
									)}
								/>
							</div>
						</div>
						<div className="main_info__presupuesto">
							<h3>Presupuesto</h3>
							<Slider
								value={budgetValue}
								onChange={handleBudgetChange}
								aria-labelledby="range-slider"
								getAriaValueText=""
								valueLabelDisplay="on"
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
