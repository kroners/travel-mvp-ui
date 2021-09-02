import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Checkbox, TextField } from '@material-ui/core';
import { useFilters } from '../hooks';
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';
import TravelContext from '../context/Travel/TravelContext';
import { SET_LANGUAGE } from '../context/types';

require('../style/additional_info.scss');

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 100,
  },
}));

function AdditionalInfo() {
  const { state, dispatch, sendDestinations, postResponse } = useContext(TravelContext);
  const [postRes, setPostRes] = useState(postResponse);
  const {
    filters: { tripProfiles, activities },
  } = useFilters();

  let newProfiles = [
    {
      image: '',
      name: 'Familiar',
    },
    {
      image: '',
      name: 'Grupal',
    },
    {
      image: '',
      name: 'Pareja',
    },
  ];
  newProfiles = [...newProfiles, ...tripProfiles];

  let newActivities = [
    {
      image: '',
      name: 'Familiar',
    },
    {
      image: '',
      name: 'Grupal',
    },
    {
      image: '',
      name: 'Pareja',
    },
    {
      image: '',
      name: 'Familiar',
    },
    {
      image: '',
      name: 'Grupal',
    },
    {
      image: '',
      name: 'Pareja',
    },
  ];
  newActivities = [...newActivities, ...activities];

  const [idioma, setIdioma] = useState('');

  const classes = useStyles();
  const handleIdioma = (e) => {
    dispatch({
      type: SET_LANGUAGE,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    const sendDest = async () => {
      const res = await sendDestinations();

      if (res.data) {
        setPostRes(res.data);
      }
    };
    sendDest();
  }, []);
  console.log(postRes, 'respuesta backend');

  return (
    <div className='additional_info'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className='additional_info__wrapper'>
            <div className='additional_info__actividades'>
              <div className='additional_info__actividades_header'>
                <h3>Actividades</h3>
                <span>
                  ({}/{newProfiles.length})
                </span>
              </div>
              <div className='additional_info__actividades_wrapper'>
                {newActivities.length &&
                  newActivities.map((activity, index) => (
                    <div key={index} className='additional_info__actividad'>
                      <p>{activity.name}</p>
                      <Checkbox
                        defaultChecked
                        color='primary'
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className='additional_info__perfiles_viaje'>
              <div className='additional_info__perfil_viaje_header'>
                <h3>Perfil de viaje</h3>
                <span>
                  ({}/{newProfiles.length})
                </span>
              </div>
              <div className='additional_info__perfiles_wrapper'>
                {newProfiles.map((profile, index) => (
                  <div key={index} className='additional_info__perfil_viaje'>
                    <p>{profile.name}</p>
                    <Checkbox
                      defaultChecked
                      color='primary'
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='additional_info__idioma'>
              <h3>Idioma</h3>
              <FormControl className={classes.formControl}>
                <InputLabel>Seleccione</InputLabel>
                <Select onChange={handleIdioma}>
                  <MenuItem value='Ingles'>Ingles</MenuItem>
                  <MenuItem value='Español'>Español</MenuItem>
                  <MenuItem value='Portugues'>Portuges</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='services__side_text'></div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdditionalInfo;
