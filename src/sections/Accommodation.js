import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Checkbox } from '@material-ui/core';

require("../style/accommodation.scss")

function Accommadation() {

    return (
        <div className="accommodation">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="accommodation__wrapper">
                        <div className="accommodation__tipo_hospedaje">
                            <h3>Tipo de hospedaje</h3>
                            <div className="accommodation__tipo_hospedaje_wrapper">
                                <div className="accommodation__opcion_hospedaje">
                                    <p>Estandar</p>
                                    <Checkbox
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                <div className="accommodation__opcion_hospedaje">
                                    <p>Comfort</p>
                                    <Checkbox
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                <div className="accommodation__opcion_hospedaje">
                                    <p>Lujo</p>
                                    <Checkbox
                                        defaultChecked
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
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                <div className="accommodation__opcion_alimentacion">
                                    <p>Media pension</p>
                                    <Checkbox
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                <div className="accommodation__opcion_alimentacion">
                                    <p>Pension completa</p>
                                    <Checkbox
                                        defaultChecked
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
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                <div className="accommodation__opcion_habitacion">
                                    <p>Doble</p>
                                    <Checkbox
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                <div className="accommodation__opcion_habitacion">
                                    <p>Triple</p>
                                    <Checkbox
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
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

export default Accommadation