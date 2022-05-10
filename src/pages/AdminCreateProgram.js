import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import BasicInfo from '../components/sections/admin/BasicInfo';
import ServicesHousing from '../components/sections/admin/ServicesHousing';
import PackageDetails from '../components/sections/admin/PackageDetails';
import Itinerary from '../components/sections/admin/Itinerary';
import Price from '../components/sections/admin/Price';
import Extras from '../components/sections/admin/Extras';

const AdminCreateProgram = () => {
	let innerSectionForm;
	const history = useHistory();

	const [step, setStep] = useState(0);
	const stepsInfo = [
		'Datos básicos',
		'Servicios y Alojamiento',
		'Detalles del paquete',
		'Itineriario',
		'Precio',
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

	// Handle fields change
	const handleSubmit = () => {
		history.push('/programs');
	};

	switch (step) {
		case 0:
			innerSectionForm = <BasicInfo />;
			break;
		case 1:
			innerSectionForm = <ServicesHousing />;
			break;
		case 2:
			innerSectionForm = <PackageDetails />;
			break;
		case 3:
			innerSectionForm = <Itinerary />;
			break;
		case 4:
			innerSectionForm = <Price />;
			break;
		case 5:
			innerSectionForm = <Extras />;
			break;
		default:
			console.log('This is a multi-step form built with React.');
		// change default to mainInfo or create a callback to ErrorPAge - InfoPage
	}

	return (
		<div className="admin__create-program">
			<div className="admin-home__header">Vista de administrador</div>
			<div className="admin-home__stepper">
				<Stepper activeStep={step}>
					{stepsInfo.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
			</div>
			<div className="admin-home__body">{innerSectionForm}</div>
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
						Crear paquete
					</Button>
				)}
			</div>
		</div>
	);
};

AdminCreateProgram.propTypes = {};

export default AdminCreateProgram;
