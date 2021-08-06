import React, { useReducer, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Button, ButtonGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import TravelContext from '../context/Travel/TravelContext';
import { SAVE_DESTINATIONS } from '../context/types';

require('../style/services.scss');

export const Services = () => {
  const { dispatch, state } = useContext(TravelContext);

  const [traslados, setTraslados] = useState(false);
  const [shows, setShows] = useState(false);
  const [excursiones, setExcursiones] = useState(false);
  const [conGuia, setConGuia] = useState(false);
  const [sinGuia, setSinGuia] = useState(false);
  const [regular, setRegular] = useState(false);
  const [disableConGuia, setDisableConGuia] = useState(false);
  const [disableSinGuia, setDisableSinGuia] = useState(false);
  const [disableRegular, setDisableRegular] = useState(false);

  const initialState = {
    counter: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, counter: state.counter + action.payload };

      case 'decrement':
        if (state.counter === 0) {
          return initialState;
        } else return { ...state, counter: state.counter - action.payload };

      case 'reset':
        return initialState;

      default:
        return state;
    }
  };

  const [adultos, dispatchAdultos] = useReducer(reducer, initialState);
  const [niños, dispatchNiños] = useReducer(reducer, initialState);
  const [bebes, dispatchBebes] = useReducer(reducer, initialState);

  const handleTraslados = (e) => {
    setTraslados(e.target.checked);
  };

  const handleShows = (e) => {
    setShows(e.target.checked);
  };

  const handleExcursiones = (e) => {
    setExcursiones(e.target.checked);
  };

  const handleConGuia = (e) => {
    setConGuia(e.target.checked);
    if (conGuia !== true) {
      setDisableSinGuia(true);
      setDisableRegular(true);
    } else {
      setDisableSinGuia(false);
      setDisableRegular(false);
    }
  };

  const handleSinGuia = (e) => {
    setSinGuia(e.target.checked);
    if (sinGuia !== true) {
      setDisableConGuia(true);
      setDisableRegular(true);
    } else {
      setDisableConGuia(false);
      setDisableRegular(false);
    }
  };

  const handleRegular = (e) => {
    setRegular(e.target.checked);
    if (regular !== true) {
      setDisableSinGuia(true);
      setDisableConGuia(true);
    } else {
      setDisableSinGuia(false);
      setDisableConGuia(false);
    }
  };

  useEffect(() => {
    dispatch({
      type: SAVE_DESTINATIONS,
      payload: {
        ...state.saveDestinations,
        traslados,
        shows,
        excursiones,
        conGuia,
        sinGuia,
        regular,
        disableConGuia,
        disableSinGuia,
        disableRegular,
        adultos: adultos.counter,
        niños: niños.counter,
        bebes: bebes.counter,
      },
    });
  }, [
    traslados,
    shows,
    excursiones,
    conGuia,
    sinGuia,
    regular,
    disableConGuia,
    disableSinGuia,
    disableRegular,
    adultos,
    niños,
    bebes,
  ]);

  return (
    <div className='services'>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className='services__wrapper'>
            <div className='services__destino'>
              <div className='services__cantidad_personas'>
                <h3>Cantidad de personas</h3>
                <div
                  style={{
                    display: 'flex',
                  }}>
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'center',
                      width: '30%',
                    }}>
                    Adultos (12 a más)
                  </span>
                  <ButtonGroup size='small' aria-label='small outlined button group'>
                    <Button onClick={() => dispatchAdultos({ type: 'increment', payload: 1 })}>
                      +
                    </Button>
                    <Button disabled>{adultos.counter}</Button>
                    <Button onClick={() => dispatchAdultos({ type: 'decrement', payload: 1 })}>
                      -
                    </Button>
                  </ButtonGroup>
                </div>
                <div className='services__cantidad_ninos'>
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'center',
                      width: '30%',
                    }}>
                    Niños (2 - 12)
                  </span>
                  <ButtonGroup size='small' aria-label='small outlined button group'>
                    <Button onClick={() => dispatchNiños({ type: 'increment', payload: 1 })}>
                      +
                    </Button>
                    <Button disabled>{niños.counter}</Button>
                    <Button onClick={() => dispatchNiños({ type: 'decrement', payload: 1 })}>
                      -
                    </Button>
                  </ButtonGroup>
                </div>
                <div className='services__cantidad_bebes'>
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'center',
                      width: '30%',
                    }}>
                    Bebes (0 - 2)
                  </span>
                  <ButtonGroup size='small' aria-label='small outlined button group'>
                    <Button onClick={() => dispatchBebes({ type: 'increment', payload: 1 })}>
                      +
                    </Button>
                    <Button disabled>{bebes.counter}</Button>
                    <Button onClick={() => dispatchBebes({ type: 'decrement', payload: 1 })}>
                      -
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
            <div className='services__opciones'>
              <h3>Servicios</h3>
              <div className='services__opciones_wrapper'>
                <div className='services__opcion_container_traslado'>
                  <div>
                    <FormControlLabel
                      labelPlacement='start'
                      control={
                        <Checkbox
                          onChange={handleTraslados}
                          color='primary'
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                      }
                      label='Traslado'
                    />
                  </div>
                </div>
                <div className='services__opcion_container_shows'>
                  <div>
                    <FormControlLabel
                      labelPlacement='start'
                      control={
                        <Checkbox
                          onChange={handleShows}
                          color='primary'
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                      }
                      label='Shows'
                    />
                  </div>
                </div>
                <div className='services__opcion_container_excursiones'>
                  <div>
                    <FormControlLabel
                      labelPlacement='start'
                      control={
                        <Checkbox
                          onChange={handleExcursiones}
                          color='primary'
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                      }
                      label='Excursiones'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='services__tipo_servicio'>
              <h3>Tipo de servicio</h3>
              <div className='services__opcion_tipo_servicio'>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    width: '30%',
                  }}>
                  Privado con guía
                </span>
                <Checkbox
                  onChange={handleConGuia}
                  disabled={disableConGuia}
                  color='primary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className='services__opcion_tipo_servicio'>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    width: '30%',
                  }}>
                  Privado sin guía
                </span>
                <Checkbox
                  onChange={handleSinGuia}
                  disabled={disableSinGuia}
                  color='primary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
              <div className='services__opcion_tipo_servicio'>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    width: '30%',
                  }}>
                  Regular
                </span>
                <Checkbox
                  onChange={handleRegular}
                  disabled={disableRegular}
                  color='primary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='services__side_text'></div>
        </Grid>
      </Grid>
    </div>
  );
};
Services.propTypes = {
  filters: PropTypes.object.isRequired,
};
