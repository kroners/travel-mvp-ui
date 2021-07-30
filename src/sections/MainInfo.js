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

import TravelContext from '../context/Travel/TravelContext';

require('../style/main_info.scss');

function MainInfo({ values }) {
  //  const [destinationList, setDestinationList] = useState([{ destination: '' }]);
  const [budgetValue, setBudgetValue] = useState([150, 2000]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const { destinations, getDestinations } = useContext(TravelContext);
  const [destinationList, setDestinationList] = useState(destinations);
  const [suggestions, setSuggestions] = useState('');
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
  console.log(destinationList);

  // handle click to add destination
  const handleAddDestination = () => {
    setDestinationList([...destinationList, { destination: '' }]);
  };

  //  // handle click to remove destination
  //  const handleRemoveClick = (index) => {
  //    console.log('handleRemoveClick');
  //    const list = [...destinationList];
  //    list.splice(index, 1);
  //    setDestinationList(list);
  //  };

  //  const handleDestinationChange = (e, index) => {
  //    const { value } = e.target;
  //    const list = [...destinationList];
  //    list[index]['destination'] = value;
  //    setDestinationList(list);
  //  };

  const handleBudgetChange = (event, newValue) => {
    setBudgetValue(newValue);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
                <SearchBar placeholder='Destination' data={destinationList} />
                {/*{destinationList.length > 0 &&
                  !loading &&
                  destinationList
                    .filter((value) => {
                      if (suggestions === ' ') {
                        return value;
                      } else if (value.nombre.toLowerCase().includes(suggestions.toLowerCase())) {
                        return value.pais.nombre;
                      }
                    })
                    .map((value, i) => {
                      return (
                        <div className='main_info__destino_body_element' key={i}>
                          <TextField
                            id={`destino-input-${i}`}
                            label={destinationList.length === 1 ? 'Destino' : `Destino #${i + 1} `}
                            variant='outlined'
                            className='general__input_field'
                            onChange={(e) => handleDestinationChange(e, i)}
                          />

                          {value && value.destinationList && value.destinationList.length > 1 && (
                            <RemoveCircleIcon
                              className='fill_circle_primary'
                              //onClick={() => handleRemoveClick(i)}
                            />
                          )}
                          {value.destinationList &&
                            destinationList.length === i + 1 &&
                            destinationList.length <= 3 && (
                              <AddCircleIcon
                                className='fill_circle_primary'
                                onClick={() => handleAddDestination()}
                              />
                            )}
                        </div>
                      );
                    })}*/}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                backgroundColor: 'red',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <div className='main_info__fecha_tentaiva'>
                <h3>Fecha tentativa</h3>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin='normal'
                    id='date-picker-dialog'
                    label='Date picker dialog'
                    format='MM/dd/yyyy'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>

                <CustomInput
                  disabled={false}
                  id='duracion-input'
                  label='Duracion'
                  className='general__input_field'
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
            {/*<image src={require('../assets/aviones.jpg')} />*/}
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
