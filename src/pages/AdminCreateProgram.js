import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

const AdminCreateProgram = (props) => {
  let innerSectionForm;
  let history = useHistory();

  const [step, setStep] = useState(0);
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
    </div>
  );
}

AdminCreateProgram.propTypes = {
  props: PropTypes
}

export default AdminCreateProgram;