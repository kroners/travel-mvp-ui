import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Button, ButtonGroup, Checkbox, FormControlLabel } from '@material-ui/core';

require('../style/services.scss');

export const Services = () => {
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

  const [state1, dispatch1] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);
  const [state3, dispatch3] = useReducer(reducer, initialState);

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
                    <Button onClick={() => dispatch1({ type: 'increment', payload: 1 })}>+</Button>
                    <Button disabled>{state1.counter}</Button>
                    <Button onClick={() => dispatch1({ type: 'decrement', payload: 1 })}>-</Button>
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
                    <Button onClick={() => dispatch2({ type: 'increment', payload: 1 })}>+</Button>
                    <Button disabled>{state2.counter}</Button>
                    <Button onClick={() => dispatch2({ type: 'decrement', payload: 1 })}>-</Button>
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
                    <Button onClick={() => dispatch3({ type: 'increment', payload: 1 })}>+</Button>
                    <Button disabled>{state3.counter}</Button>
                    <Button onClick={() => dispatch3({ type: 'decrement', payload: 1 })}>-</Button>
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
                <Checkbox color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
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
                <Checkbox color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
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
                <Checkbox color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
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
