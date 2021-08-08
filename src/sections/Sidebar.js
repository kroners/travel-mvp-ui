import React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Slider from '@material-ui/core/Slider';

import StarsIcon from '@material-ui/icons/Stars';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: +drawerWidth,
    // backgroundColor: 'red',
  },
  text1: {
    fontSize: '12px',
    fontWeight: 'bold',
  },
}));

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

const Sidebar = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='sidebar__wrapper'>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Content
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button style={{ backgroundColor: 'grey' }}>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}>
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Destino</div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    padding: '2px',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    width: '100px',
                    fontSize: '12px',
                  }}>
                  Argentina Buenos Aires Argentina Buenos Aires
                </div>
                <ControlPointIcon />
              </div>
            </div>
          </ListItem>
          <ListItem button style={{ backgroundColor: 'grey' }}>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Fecha de viaje</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '3px',
                      padding: '2px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      width: '80px',
                      fontSize: '12px',
                    }}>
                    20 oct - 25 oct
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Duración</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '3px',
                      padding: '2px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      width: '60px',
                      fontSize: '12px',
                    }}>
                    5 dias
                  </div>
                </div>
              </div>
            </div>
          </ListItem>
          <ListItem button style={{ backgroundColor: 'grey' }}>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}>
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Presupuesto</div>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CustomSlider
                  value={value}
                  onChange={handleChange}
                  aria-labelledby='range-slider'
                  getAriaValueText={''}
                  max={5000}
                  color='secondary'
                  valueLabelDisplay='on'
                />
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    padding: '2px',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    width: '80px',
                    fontSize: '12px',
                    height: '25px',
                  }}>
                  $ USD
                </div>
              </div>
            </div>
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SupervisedUserCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={<div style={{ fontWeight: 'bold', fontSize: '12px' }}>Personas (2)</div>}
              style={{ fontWeight: 'bold', fontSize: '12px' }}
              className={classes.text1}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText
              primary={<div style={{ fontWeight: 'bold', fontSize: '12px' }}>Servicios (2/3)</div>}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Tipo de servicio (1/3)</div>
              }
            />
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText
              primary={<div style={{ fontWeight: 'bold', fontSize: '12px' }}>Hospedaje (1/3)</div>}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Tipo de habitacion (1/3)</div>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Alimentacion (1/3)</div>
              }
            />
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Actividades (4/11)</div>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Perfil de viaje (2/3)</div>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText
              primary={<div style={{ fontWeight: 'bold', fontSize: '12px' }}>Idioma Español</div>}
            />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader}>{children}</div>
      </main>
    </div>
  );
};

export default Sidebar;
