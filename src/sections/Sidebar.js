import React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
          <div
            style={{
              padding: '10px',
              backgroundColor: 'grey',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <LocationOnIcon />
              <p>Destino</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'row' }}>
                <LocationOnIcon />
              </div>

              <div
                style={{
                  backgroundColor: 'green',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                <p>Destino</p>
                <input style={{ width: '50%' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ControlPointIcon />
              </div>
            </div>
          </div>
          <ListItem button>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary='Fecha de viaje' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary='Presupuesto' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SupervisedUserCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Personas (2)' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary='Servicios (2/3)' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary='Tipo de servicio (1/3)' />
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary='Hospedaje (1/3)' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary='Tipo de habitacion (1/3)' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary='Alimentacion (1/3)' />
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary='Actividades (4/11)' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary='Perfil de viaje (2/3)' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary='Idioma  Español' />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
