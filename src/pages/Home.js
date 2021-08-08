import React, { useState, useContext } from 'react';
import MainInfo from '../sections/MainInfo';
import { Services } from '../sections/Services';
import Accommodation from '../sections/Accommodation';
import AdditionalInfo from '../sections/AdditionalInfo';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import { useProjectsValue } from '../context';
import { useHistory } from 'react-router-dom';
import TravelContext from '../context/Travel/TravelContext';
import { SAVE_DESTINATIONS } from '../context/types';

require('../style/home.scss');

const Home = () => {
  const { state } = useContext(TravelContext);
  //console.log(useContext(TravelContext), 'useContext(TravelContext)');
  let innerSectionForm;
  let history = useHistory();
  //  const {
  //    filtersValues: { filters },
  //  } = useProjectsValue();

  const [step, setStep] = useState(0);
  const [getDataDestination, setGetDataDestination] = useState({});
  const stepsInfo = ['Informacion principal', 'Servicios', 'Hospedaje', 'Datos adicionales'];

  const test = () => {
    console.log('object');
  };

  // Proceed to next step
  const handleNextSelect = () => {
    let nextStep = step + 1;
    setStep(nextStep);
    test();
  };

  // Go back to prev step
  function handlePrevSelect() {
    let prevStep = step - 1;
    setStep(prevStep);
  }

  // Handle fields change
  const handleSubmit = (input) => {
    history.push('/programs');
    //  alert(JSON.stringify(state.saveDestinations));
  };

  // const handleChange = () => {
  //   console.log("handleChange")
  // }

  const CircularProgressWithLabel = (props) => {
    return (
      <Box position='relative' display='inline-flex'>
        <CircularProgress variant='determinate' size={40} thickness={4} {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position='absolute'
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <Typography variant='caption' component='div' color='textSecondary'>
            {`${Math.round(props.value)}`}
          </Typography>
        </Box>
      </Box>
    );
  };

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
  }
  return (
    <div className='home'>
      <div className='home__header-carousel'>
        <div className='home__header-title'>
          <h1>SHOW EN LA HABANA</h1>
        </div>
        <div className='home__header-detail'>
          <p>A donde quieres ir?</p>
        </div>
      </div>
      <div className='home__stepper'>
        <Stepper activeStep={step}>
          {stepsInfo.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className='home__stepper--mobile'>
        <CircularProgressWithLabel value={25} />;
      </div>
      <div className='home__body'>{innerSectionForm}</div>
      <div className='home__move_buttons'>
        <Button variant='outlined' onClick={() => handlePrevSelect()}>
          Atras
        </Button>
        {step !== 3 && (
          <Button variant='outlined' onClick={() => handleNextSelect()}>
            Siguiente
          </Button>
        )}
        {step === 3 && (
          <Button variant='outlined' onClick={() => handleSubmit()}>
            Consultar
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
