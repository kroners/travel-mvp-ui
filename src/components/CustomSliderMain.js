import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const CustomSliderMain = withStyles({
  root: {
    color: '#3880ff',
    height: 4,
    padding: '15px 0',
    marginRight: 10,
    marginBottom: '20px',
  },

  thumb: {
    height: 30,
    width: 30,
    backgroundColor: 'blue',
    marginTop: -8,
    marginLeft: -15,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {},
    },
  },
  active: {},
  valueLabel: {
    left: 0,
    top: 40,
    '& *': {
      background: 'transparent',
      color: 'blue',
    },
  },
  track: {
    height: 12,
  },
  rail: {
    height: 10,
    opacity: 0.5,
    backgroundColor: 'white',
    border: '1px solid lightblue',
    borderRadius: '5px',
    boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
    width: '60%',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

export default CustomSliderMain;
