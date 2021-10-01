import { AppBar, Box, Button, Tab, Tabs, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFilters } from '../hooks';
import Sidebar from '../sections/Sidebar';

require('../style/program_detail.scss');

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

const Accordion = withStyles({
	root: {
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			margin: 'auto',
		},
	},
	expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56,
		},
	},
	content: {
		'&$expanded': {
			backgroundColor: '#0095BF',
			borderBottom: '1px solid rgba(125, 125, 125, .125)',
			margin: '12px 0',
		},
	},
	expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
	content: {
		'&$expanded': {
			backgroundColor: '#0095BF',
			margin: '12px 0',
		},
	},
}))(MuiAccordionDetails);

const ProgramDetail = () => {
	const { filters } = useFilters();
	// const { projects: { program } } = useProjects();
	const [tabValue, setTabValue] = useState(0);

	const handleChange = (event, newValue) => {
		setTabValue(newValue);
	};

	const [expanded, setExpanded] = useState('panel1');

	const handleAccordionChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div className="program_detail">
			<div className="program_detail__sidebar">
				<Sidebar props={filters}>
					{' '}
					<div className="program_detail__wrapper">
						<div className="program_detail__header">
							<div className="program_detail__header_title">
								5 dias y 4 noches en Egipto
							</div>
							<div className="program_detail__header_service">
								<p>Servicio Privado con Guia</p>
								<p>Tour en Ingles</p>
							</div>
						</div>
						<div className="program_detail__extras">
							<div className="extras_left">
								<p className="extras__rating">8.4 muy bueno</p>
								<p className="extras__comentarios">555 comentario(s)</p>
							</div>
							<div className="extras_right">
								<div className="extras_pago">
									<span>Forma de pago</span>
									<span>USD 7,500</span>
								</div>
								<div className="extras_action">
									<span className="extras_responsable">
										Responsable / Ag viaje
									</span>
									<Button>Reservar</Button>
								</div>
							</div>
						</div>
						<div className="program_detail__body">
							<AppBar position="static">
								<Tabs
									value={tabValue}
									onChange={handleChange}
									aria-label="Tab de vista general e itinerario"
								>
									<Tab label="Vista General" {...a11yProps(0)} />
									<Tab label="Itinerario" {...a11yProps(1)} />
								</Tabs>
							</AppBar>
							<TabPanel value={tabValue} index={0}>
								<div className="program_detail__vista_general">
									<div className="vista_general__notas_importantes">
										<h3>Notas importantes</h3>
										<p>
											Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
											sed diam umy eirmod tempor invidunt ut labore et dolore
											magna aliquyamerat, sed diam voluptua. Lorem ipsum dolor
											sit amet, consetetur sadipscing elitr, sed diam umy eirmod
											tempor invidunt ut labore et dolore magna aliquyamerat,
											sed diam voluptua. Lorem ipsum .
										</p>
									</div>
									<div className="vista_general__descripcion">
										<h3>Descripcion basica</h3>
										<p>
											Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
											sed diam umy eirmod tempor invidunt ut labore et dolore
											magna aliquyamerat, sed diam voluptua. Lorem ipsum dolor
											sit amet, consetetur sadipscing elitr, sed diam umy eirmod
											tempor invidunt ut labore et dolore magna aliquyamerat,
											sed diam voluptua. Lorem ipsum .
										</p>
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
								<div className="program_detail__itinerario">
									<h2>11 dias en Argentina - Descripcion del programa</h2>
									<Accordion
										square
										expanded={expanded === 'panel1'}
										onChange={handleAccordionChange('panel1')}
									>
										<AccordionSummary
											aria-controls="panel1d-content"
											id="panel1d-header"
										>
											<div className="program_detail__itinerario_header">
												<div className="itinerario_dia">Dia 1</div>
												<div className="itinerario_destino">Museo</div>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<Typography>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Suspendisse malesuada lacus ex, sit amet blandit leo
												lobortis eget. Lorem ipsum dolor sit amet, consectetur
												adipiscing elit. Suspendisse malesuada lacus ex, sit
												amet blandit leo lobortis eget.
											</Typography>
										</AccordionDetails>
									</Accordion>
									<Accordion
										square
										expanded={expanded === 'panel2'}
										onChange={handleAccordionChange('panel2')}
									>
										<AccordionSummary
											aria-controls="panel2d-content"
											id="panel2d-header"
										>
											<Typography>Collapsible Group Item #2</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Suspendisse malesuada lacus ex, sit amet blandit leo
												lobortis eget. Lorem ipsum dolor sit amet, consectetur
												adipiscing elit. Suspendisse malesuada lacus ex, sit
												amet blandit leo lobortis eget.
											</Typography>
										</AccordionDetails>
									</Accordion>
									<Accordion
										square
										expanded={expanded === 'panel3'}
										onChange={handleAccordionChange('panel3')}
									>
										<AccordionSummary
											aria-controls="panel3d-content"
											id="panel3d-header"
										>
											<Typography>Collapsible Group Item #3</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Suspendisse malesuada lacus ex, sit amet blandit leo
												lobortis eget. Lorem ipsum dolor sit amet, consectetur
												adipiscing elit. Suspendisse malesuada lacus ex, sit
												amet blandit leo lobortis eget.
											</Typography>
										</AccordionDetails>
									</Accordion>
								</div>
							</TabPanel>
						</div>
					</div>{' '}
				</Sidebar>
			</div>
		</div>
	);
};

export default ProgramDetail;
