import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-atound',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      minWidth: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  dateContainer: {
    width: '30%',
    padding: '20px',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  dateStyle: {
    '& .MuiInputBase-root': {
      minWidth: '30%',
      padding: 2,
      '& .MuiButtonBase-root': {
        padding: 5,
        paddingLeft: 0,
      },
      '& .MuiInputBase-input': {
        padding: 10,
        paddingLeft: 5,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'solid 2px lightblue',
        borderRadius: '5px',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
    },

    backgroundColor: 'white',
  },
  inputStyle: {
    marginTop: '9%',
    backgroundColor: 'white',
    '& .MuiInputBase-root': {
      minWidth: '30%',
      padding: 2,
      '& .MuiInputBase-input': {
        padding: 10,
        paddingLeft: 5,
      },

      '& .MuiOutlinedInput-notchedOutline': {
        border: 'solid 2px lightblue',
        borderRadius: '5px',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
    },
  },
}));
const CustomDatePicker = ({ getStart, getEnd, valueStart, valueEnd }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.dateContainer}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin='normal'
            inputVariant='outlined'
            //id='date-picker-dialog'
            label='Inicio'
            format='MM/dd/yyyy'
            value={valueStart}
            onChange={getStart}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            className={classes.dateStyle}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className={classes.dateContainer}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin='normal'
            inputVariant='outlined'
            //id='date-picker-dialog'
            label='Fin'
            format='MM/dd/yyyy'
            value={valueEnd}
            onChange={getEnd}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            className={classes.dateStyle}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div style={{ maxWidth: '100px' }}>
        <TextField
          disabled={true}
          variant='outlined'
          label='Duracion'
          className={classes.inputStyle}
          value={`${Math.round((valueEnd - valueStart) / (1000 * 60 * 60 * 24))} dias`}
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
