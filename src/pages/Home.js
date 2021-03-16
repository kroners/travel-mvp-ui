import React, { useState } from 'react'
import MainInfo from '../sections/MainInfo'
import { Services } from '../sections/Services'
import Accommodation from '../sections/Accommodation'
import AdditionalInfo from '../sections/AdditionalInfo'
import { Button, Step, StepLabel, Stepper } from '@material-ui/core'
import { useProjectsValue } from '../context'

require("../style/home.scss"); 

const Home = () => {

  let innerSectionForm
  const { filtersValues: { filters, setFilters } } = useProjectsValue()
  console.log({ filters, setFilters })
  const [ step, setStep ] = useState(0)
  const stepsInfo = ["Informacion principal", "Servicios", "Hospedaje", "Datos adicionales"]

  // Proceed to next step
  function handleNextSelect () {
    console.log({ currentStep: step , nextStep: step + 1})
    let nextStep = step + 1;
    setStep(nextStep)
  }

  // Go back to prev step
  function handlePrevSelect () {
    console.log({ currentStep: step , prevStep: step - 1})
    let prevStep = step - 1;
    setStep(prevStep)
  }

  // Handle fields change
  const handleSubmit = (input) => (e) => {
    // this.setState({ [input]: e.target.value })
  }

  const handleChange = () => {
    console.log("handleChange")
  }

  console.log({ step })
  switch (step) {
    case 0:
      innerSectionForm = (
        <MainInfo
          values={filters}
        />
      )
      break
    case 1:
      innerSectionForm = (
        <Services
          values={filters}
        />
      )
      break
    case 2:
      innerSectionForm = (
        <Accommodation
          values={filters}
        />
      )
      break
    case 3:
      innerSectionForm = <AdditionalInfo />
      break
    default:
      console.log('This is a multi-step form built with React.')
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
        <Stepper activeStep={step} >
          {stepsInfo.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        </div>
        <div className="home__body">
          {innerSectionForm}
        </div>
        <div className="home__move_buttons">
          <Button variant="outlined" onClick={() => handlePrevSelect()}>Atras</Button>
          {step !== 4 && <Button variant="outlined" onClick={() => handleNextSelect()}>Siguiente</Button>}
          {step === 4 && <Button variant="outlined" onClick={() => handleSubmit()}>Consultar</Button>}
        </div>
      </div>
  )
}

export default Home