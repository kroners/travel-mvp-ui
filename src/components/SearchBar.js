import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
// import serach_bar from '../style/search_bar.scss';
import SearchIcon from '@material-ui/icons/Search';
import CustomInput from '../components/CustomInput';

const SearchBar = ({
  placeholder,
  data,
  wordEntered,
  getWordEntered,
  setdestinationFromSearch,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [summary, setSummary] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    getWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.nombre.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setSummary(newFilter);
      setdestinationFromSearch(newFilter);
    }
  };

  const fillInput = (value) => {
    getWordEntered(value);
    setShowReview(true);

    setFilteredData([]);
  };
  console.log(filteredData, 'filteredData');
  return (
    <div className='search'>
      <div className='searchInputs'>
        <TextField
          label={placeholder}
          type='search'
          variant='outlined'
          onChange={handleFilter}
          value={wordEntered}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {filteredData.length != 0 && (
        <div className='dataResult'>
          {filteredData.map((value, i) => {
            return (
              <div
                onClick={() => fillInput(value.nombre)}
                key={i}
                id='clearBtn'
                className='dataItem'>
                <p>{value.nombre}</p>
              </div>
            );
          })}
        </div>
      )}
      {showReview !== false && (
        <div className='accordion' style={{ marginTop: '2vh', width: '100%' }}>
          {summary.map((value, i) => {
            if (value.nombre === wordEntered) {
              return (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '10px',
                    justifyContent: 'space-between',
                  }}>
                  {value.pais && (<CustomInput
                    disabled={true}
                    id='duracion-input'
                    label='Pais'
                    className='general__input_field'
                    value={value.pais.nombre}
                  />)}

                  {value.ciudad && (<CustomInput
                    disabled={true}
                    id='duracion-input'
                    label='Ciudad'
                    className='general__input_field'
                    value={value.ciudad.nombre}
                  />)}

                  {value.region && (<CustomInput
                    disabled={true}
                    id='duracion-input'
                    label='Region'
                    className='general__input_field'
                    value={value.region.nombre}
                  />)}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
