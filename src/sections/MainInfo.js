import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import main_info_image from '../assets/aviones.jpg'
import { AppBar, Box, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import CustomInput from '../components/CustomInput';

require("../style/main_info.scss")

function MainInfo() {

    const [budgetValue, setBudgetValue] = useState([150, 2000]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleAddDestination = () => {
        console.log("lala")
    }
    
    const handleBudgetChange = () => {
        console.log("lala")
    }
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="main_info">
            <Grid container spacing={2} className="main_info__content">
                <Grid item xs={6} className="main_info__side_content">
                    <div className="main_info__wrapper">
                        <div className="main_info__destino">
                            <div className="main_info__destino_header">
                                <h3>Destino</h3>
                                <AddCircleIcon className="fill_circle_primary" onClick={handleAddDestination()} />
                            </div>
                            <div className="main_info__destino_body">
                                <TextField id="pais-input" label="Pais" variant="outlined" className="general__input_field" />
                                <TextField id="region-input" label="Región" variant="outlined" className="general__input_field" />
                                <TextField id="ciudad-input" label="Ciudad" variant="outlined" className="general__input_field" />
                            </div>
                        </div>
                        <div className="main_info__fecha">
                            <div className="main_info__fecha_tentaiva">
                                <h3>Fecha tentativa</h3>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                            <div className="main_info__duracion">
                                <h3>Duracion</h3>
                                <CustomInput
                                 disabled={true}
                                 id="duracion-input"
                                 label="Duracion"
                                 className="general__input_field"
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
                    <div className="main_info__side_text"></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainInfo