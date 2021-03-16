import { AppBar, Box, Button, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFilters, useProjects } from '../hooks';
import Sidebar from '../sections/Sidebar';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const ProgramDetail = () => {
    const { filters } = useFilters();
    const { projects: { program } } = useProjects();
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className="program_detail">
            <div className="program_detail__sidebar">
                <Sidebar props={filters} />
            </div>
            <div className="program_detail__wrapper">
                <div className="program_detail__header">
                    {program.title}
                    <div className="program_detail__service">
                        <p>{program.serviceType}</p>
                        <p>Tour en {program.language}</p>
                    </div>
                </div>
                <div className="program_detail__extras">
                    <div className="extras_left">
                        <p className="extras__rating">{program.rating.value} {program.rating.detail}</p>
                        {program.comentarios && 
                            <p className="extras__comentarios">{program.comentarios} comentario(s)</p>
                        }
                    </div>
                    <div className="extras_right">
                        <div className="extras_pago">
                            <span>Forma de pago</span>
                            <span>{program.price}</span>
                        </div>
                        <div className="extras_action">
                            <span className="extras_responsable">Responsable / Ag viaje</span>
                            <Button>Reservar</Button>
                        </div>
                    </div>
                </div>
                <div className="program_detail__body">
                <AppBar position="static">
                    <Tabs value={tabValue} onChange={handleChange} aria-label="Tab de vista general e itinerario">
                        <Tab label="Vista General" {...a11yProps(0)} />
                        <Tab label="Itinerario" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={tabValue} index={0}>
                    <div className="program_detail__vista_general">
                        <div className="vista_general__notas_importantes">
                            <h3>Notas importantes</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam umy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam umy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. 
Lorem ipsum .</p>
                        </div>
                        <div className="vista_general__descripcion">
                            <h3>Descripcion basica</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam umy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam umy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. 
Lorem ipsum .</p>
                        </div>
                        <div className="vista_general__incluidos">
                            <h3>Lo que esta incluido</h3>
                            <ul classNames="incluidos_lista">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <div className="vista_general__no_incluidos">
                            <h3>Lo que NO esta incluido</h3>
                            <ul classNames="no_incluidos_lista">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    Item Two
                </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default ProgramDetail