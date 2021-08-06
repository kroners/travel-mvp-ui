import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, DateRangePicker } from '@material-ui/pickers';
import CustomInput from '../components/CustomInput';
import SearchBar from '../components/SearchBar';
import AutocompleteInput from '../components/AutocompleteInput';

import TravelContext from '../context/Travel/TravelContext';
import { SAVE_DESTINATIONS } from '../context/types';

require('../style/main_info.scss');

function MainInfo({ values, handleNextSelect }) {
  const { dispatch, state } = useContext(TravelContext);
  //  const [destinationList, setDestinationList] = useState([{ destination: '' }]);
  const [budgetValue, setBudgetValue] = useState([150, 2000]);
  const [selectedDateStart, setSelectedDateStart] = useState(new Date());
  const [selectedDateEnd, setSelectedDateEnd] = useState(new Date());
  const [wordEntered, setWordEntered] = useState('');
  const [loading, setLoading] = useState(false);
  const { destinations, getDestinations } = useContext(TravelContext);
  const [destinationList, setDestinationList] = useState(destinations);

  const [destinationFromSearch, setdestinationFromSearch] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getDest = async () => {
      const res = await getDestinations();

      if (res.data.length) {
        setLoading(false);
        setDestinationList(res.data);
      }
    };
    getDest();
  }, []);

  //   handle click to add destination
  //    const handleAddDestination = () => {
  //      setDestinationList([...destinationList, { destination: '' }]);
  //    };

  const handleBudgetChange = (event, newValue) => {
    setBudgetValue(newValue);
  };

  const handleDateChangeStart = (inicio) => {
    setSelectedDateStart(inicio);
  };

  const handleDateChangeEnd = (fin) => {
    setSelectedDateEnd(fin);
  };

  useEffect(() => {
    dispatch({
      type: SAVE_DESTINATIONS,
      payload: {
        ...state.saveDestinations,
        destinationFromSearch,
        selectedDateStart,
        selectedDateEnd,
        duracion: Math.round((selectedDateEnd - selectedDateStart) / (1000 * 60 * 60 * 24)),
        presupuesto: budgetValue,
      },
    });
  }, [wordEntered, selectedDateStart, selectedDateEnd, budgetValue]);

  return (
    <div className='main_info'>
      <Grid container spacing={2} className='main_info__content'>
        <Grid item xs={6} className='main_info__side_content'>
          <div className='main_info__wrapper'>
            <div className='main_info__destino'>
              <div className='main_info__destino_header'>
                <h3>Destino</h3>
              </div>
              <div className='main_info__destino_body'>
                {/*<AutocompleteInput />*/}
                <SearchBar
                  wordEntered={wordEntered}
                  getWordEntered={setWordEntered}
                  placeholder='Destination'
                  data={destinationList}
                  setdestinationFromSearch={setdestinationFromSearch}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',

                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <div className='main_info__fecha_tentaiva'>
                <h3>Fecha tentativa</h3>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin='normal'
                    //id='date-picker-dialog'
                    label='Fecha de inicio'
                    format='MM/dd/yyyy'
                    value={selectedDateStart}
                    onChange={handleDateChangeStart}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin='normal'
                    //id='date-picker-dialog'
                    label='Fecha de finalizacion'
                    format='MM/dd/yyyy'
                    value={selectedDateEnd}
                    onChange={handleDateChangeEnd}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>

                <CustomInput
                  disabled={true}
                  id='duracion-input'
                  label='Duracion'
                  className='general__input_field'
                  value={Math.round((selectedDateEnd - selectedDateStart) / (1000 * 60 * 60 * 24))}
                />
              </div>
            </div>
            <div className='main_info__presupuesto'>
              <h3>Presupuesto</h3>
              <Slider
                value={budgetValue}
                onChange={handleBudgetChange}
                aria-labelledby='range-slider'
                getAriaValueText=''
                valueLabelDisplay='on'
                max={5000}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='main_info__side_text'>
            {/*<img src={require('../assets/aviones.jpg')} />*/}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

MainInfo.propTypes = {
  values: PropTypes.array.isRequired,
};

export default MainInfo;
