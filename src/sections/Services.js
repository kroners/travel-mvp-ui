import React from 'react';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import { Button, ButtonGroup, Checkbox } from '@material-ui/core';

require("../style/services.scss")

export const Services = ({values}) => {

    const { personas: { adultos, ninos, bebes } } = values

    const handleIncrement = () => {

    }

    const handleDecrement = () => {
        
    }

    return (
        <div className="services">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="services__wrapper">
                        <div className="services__destino">
                            <div className="services__cantidad_personas">
                                <h3>Cantidad de personas</h3>
                                <div className="services__cantidad_adultos">
                                    <span>Adultos (12 a más)</span>
                                    <ButtonGroup size="small" aria-label="small outlined button group">
                                        <Button onClick={handleIncrement}>+</Button>
                                        <Button disabled>{adultos}</Button>
                                        <Button onClick={handleDecrement}>-</Button>
                                    </ButtonGroup>
                                </div>
                                <div className="services__cantidad_ninos">
                                    <span>Niños (2 - 12)</span>
                                    <ButtonGroup size="small" aria-label="small outlined button group">
                                        <Button onClick={handleIncrement}>+</Button>
                                        <Button disabled>{ninos}</Button>
                                        <Button onClick={handleDecrement}>-</Button>
                                    </ButtonGroup>
                                </div>
                                <div className="services__cantidad_bebes">
                                    <span>Bebes (0 - 2)</span>
                                    <ButtonGroup size="small" aria-label="small outlined button group">
                                        <Button onClick={handleIncrement}>+</Button>
                                        <Button disabled>{bebes}</Button>
                                        <Button onClick={handleDecrement}>-</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                        <div className="services__opciones">
                            <h3>Servicios</h3>
                            <div className="services__opciones_wrapper">
                                <div className="services__opcion_container">
                                    <p>Traslado</p>
                                    <Checkbox
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                <div className="services__opcion_container">
                                    <p>Shows</p>
                                    <Checkbox
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                <div className="services__opcion_container">
                                    <p>Excursiones</p>
                                    <Checkbox
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="services__tipo_servicio">
                            <h3>Tipo de servicio</h3>
                            <div className="services__opcion_tipo_servicio">
                                <span>Privado con guía</span>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div>
                            <div className="services__opcion_tipo_servicio">
                                <span>Privado sin guía</span>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div>
                            <div className="services__opcion_tipo_servicio">
                                <span>Regular</span>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="services__side_text"></div>
                </Grid>
            </Grid>
        </div>
    )
}


Services.propTypes = {
    filters: PropTypes.object.isRequired,
  }