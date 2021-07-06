import { CircularProgress, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState, useEffect } from 'react';
import { getDestinations } from '../api';

const AutocompleteInput = ({index, addDestination, destinationLength}) => {

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleDestinationChange = async (e) => {
    const { value } = e.target;
    const response = await getDestinations(value);
    const matchedDestinations = response.map(destino => destino.nombre);
    setOptions(matchedDestinations);
  }

  const onGetOptionSelected = (option, value, index) => {
    if(option === value) {
      addDestination(index, value)
      setOptions([]);
    }
  }

  return (
    <Autocomplete
      id={`destino-input-${index}`}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => onGetOptionSelected(option, value, index)}
      getOptionLabel={option => option}
      options={options}
      loading={loading}
      onInputChange={e => handleDestinationChange(e)}
      className="general__input_field"
      renderInput={params => (
        <TextField
          {...params}
          label={destinationLength === 1 ? "Destino" : `Destino #${index+1}`}
          fullWidth
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
};

export default AutocompleteInput;
