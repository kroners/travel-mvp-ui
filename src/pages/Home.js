import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MainInfo from '../sections/MainInfo';
import { Services } from '../sections/Services';
import Accommodation from '../sections/Accommodation';
import AdditionalInfo from '../sections/AdditionalInfo';
import TravelContext from '../context/Travel/TravelContext';
import { getFilters } from '../selectors/filters';
import { getPrograms } from '../api';
import ProgramContext from '../context/Programs/ProgramContext';

require('../style/home.scss');

const Home = () => {
	let innerSectionForm;
	const history = useHistory();
	const [state] = useContext(TravelContext);
	const [, dispatch] = useContext(ProgramContext);

	const [step, setStep] = useState(0);
	const stepsInfo = [
		'Informacion principal',
		'Servicios',
		'Hospedaje',
		'Datos adicionales',
	];

	// Proceed to next step
	const handleNextSelect = () => {
		const nextStep = step + 1;
		setStep(nextStep);
	};

	// Go back to prev step
	function handlePrevSelect() {
		const prevStep = step - 1;
		setStep(prevStep);
	}

	// Handle Submit to get programs from selected filters
	const handleSubmit = async () => {
		const filtros = getFilters(state);

		const response = await getPrograms(filtros);
		if (response && response.length > 0) {
			dispatch({
				type: 'SAVE_PROGRAMS',
				payload: {
					programa_principal: response.main_program,
					programas_extras: response.other_programs,
				},
			});
			history.push('/programs');
		}
	};

	const CircularProgressWithLabel = (props) => (
		<Box position="relative" display="inline-flex">
			<CircularProgress
				variant="determinate"
				size={40}
				thickness={4}
				{...props}
			/>
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography variant="caption" component="div" color="textSecondary">
					{`${Math.round(props.value)}`}
				</Typography>
			</Box>
		</Box>
	);

	switch (step) {
		case 0:
			innerSectionForm = <MainInfo />;
			break;
		case 1:
			innerSectionForm = <Services />;
			break;
		case 2:
			innerSectionForm = <Accommodation />;
			break;
		case 3:
			innerSectionForm = <AdditionalInfo />;
			break;
		default:
			console.log('This is a multi-step form built with React.');
		// change default to mainInfo or create a callback to ErrorPAge - InfoPage
	}

	return (
		<div className="home">
			<div className="home__header-carousel">
				<div className="home__header-title">
					<h1>SHOW EN LA HABANA</h1>
				</div>
				<div className="home__header-detail">
					<p>A donde quieres ir?</p>
				</div>
			</div>
			<div className="home__stepper">
				<Stepper activeStep={step}>
					{stepsInfo.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
			</div>
			<div className="home__stepper--mobile">
				<CircularProgressWithLabel value={25} />;
			</div>
			<div className="home__body">{innerSectionForm}</div>
			<div className="home__move_buttons">
				<Button variant="outlined" onClick={() => handlePrevSelect()}>
					Atras
				</Button>
				{step !== 3 && (
					<Button variant="outlined" onClick={() => handleNextSelect()}>
						Siguiente
					</Button>
				)}
				{step === 3 && (
					<Button variant="outlined" onClick={() => handleSubmit()}>
						Consultar
					</Button>
				)}
			</div>
		</div>
	);
};

export default Home;
