import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const CustomSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 4,
    padding: '15px 0',
    marginRight: 10,
  },
  thumb: {
    height: 10,
    width: 10,
    backgroundColor: '#fff',

    marginTop: -4,
    marginLeft: 0,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {},
    },
  },
  active: {},
  valueLabel: {
    left: -10,
    top: 10,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 3,
  },
  rail: {
    height: 3,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
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

export default CustomSlider;
