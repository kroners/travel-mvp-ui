import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CustomSliderMain from '../components/CustomSliderMain';
import SearchBar from '../components/SearchBar';
import TravelContext from '../context/Travel/TravelContext';
import { SAVE_DESTINATIONS } from '../context/types';
import CustomDatePicker from '../components/CustomDatePicker';
require('../style/main_info.scss');

function MainInfo({ values, handleNextSelect }) {
  const { dispatch, state } = useContext(TravelContext);
  const { destinations, getDestinations } = useContext(TravelContext);

  const [budgetValue, setBudgetValue] = useState([150, 2000]);
  const [selectedDateStart, setSelectedDateStart] = useState(new Date());
  const [selectedDateEnd, setSelectedDateEnd] = useState(new Date());
  const [wordEntered, setWordEntered] = useState('');

  const [destinationList, setDestinationList] = useState(destinations);

  const [destinationFromSearch, setdestinationFromSearch] = useState([]);
  console.log(destinationFromSearch, 'data');

  useEffect(() => {
    const getDest = async () => {
      const res = await getDestinations();

      if (res.data.length) {
        setDestinationList(res.data);
      }
    };
    getDest();
  }, []);

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
  }, [
    wordEntered,
    selectedDateStart,
    selectedDateEnd,
    budgetValue,
    destinationFromSearch,
    dispatch,
    state.saveDestinations,
  ]);

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
              <div className='main_info__fecha'>
                <h3>Fecha tentativa</h3>
                <CustomDatePicker
                  getStart={handleDateChangeStart}
                  getEnd={handleDateChangeEnd}
                  valueStart={selectedDateStart}
                  valueEnd={selectedDateEnd}
                />
              </div>
            </div>
            <div className='main_info__presupuesto'>
              <h3>Presupuesto</h3>
              <CustomSliderMain
                value={budgetValue}
                onChange={handleBudgetChange}
                max={5000}
                valueLabelDisplay='on'
                aria-labelledby='range-slider'
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
