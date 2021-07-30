import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
import serach_bar from '../style/search_bar.scss';
import SearchIcon from '@material-ui/icons/Search';

import ListItemText from '@material-ui/core/ListItemText';

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [showReview, setShowReview] = useState(false);
  const [summary, setSummary] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
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
  console.log('filteredData', filteredData);

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  const fillInput = (wordEntered) => {
    setWordEntered(wordEntered);
    setShowReview(true);

    setFilteredData([]);
  };
  console.log(showReview);
  console.log(summary);

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
        <div className='accordion'>
          {summary.map((value, i) => {
            if (value.nombre === wordEntered) {
              return (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <p> {value.pais.nombre}</p>
                  <p>{value.ciudad.nombre}</p>
                  <p> Region </p>
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
