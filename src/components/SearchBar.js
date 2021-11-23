import React, { useState, useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
import '../style/search_bar.scss';
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
  const [newArray, setNewArray] = useState([]);

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
    }
  };

  const fillInput = (value) => {
    getWordEntered(value.nombre);
    setShowReview(true);

    setNewArray([...newArray, value]);

    setFilteredData([]);
  };

  useEffect(
    (value) => {
      setdestinationFromSearch(newArray.map((x) => x.nombre));
    },
    [newArray],
  );

  console.log(newArray, 'newArray');

  return (
    <div className='search'>
      <div className='searchInputs'>
        <TextField
          label={placeholder}
          type='search'
          variant='outlined'
          size='small'
          onChange={handleFilter}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.map((value, i) => {
            return (
              <div onClick={() => fillInput(value)} key={i} id='clearBtn' className='dataItem'>
                {value.nombre}
              </div>
            );
          })}
        </div>
      )}
      {showReview !== false && (
        <div
          style={{
            marginTop: '2vh',
            width: '100%',
          }}>
          {newArray.map((value, i) => {
            return (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '10px',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}>
                {value.pais && (
                  <CustomInput
                    disabled={true}
                    id='duracion-input'
                    label='Pais'
                    className='general__input_field'
                    value={value.pais.nombre}
                  />
                )}

                {value.ciudad && (
                  <CustomInput
                    disabled={true}
                    id='duracion-input'
                    label='Ciudad'
                    className='general__input_field'
                    value={value.ciudad.nombre}
                  />
                )}

                {value.region && (
                  <CustomInput
                    disabled={true}
                    id='duracion-input'
                    label='Region'
                    className='general__input_field'
                    value={value.region.nombre}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
