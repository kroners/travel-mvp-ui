import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {
	Checkbox,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	makeStyles,
	FormControlLabel,
} from '@material-ui/core';
// import { useFilters } from '../hooks';
import TravelContext from '../context/Travel/TravelContext';
import { SET_LANGUAGE } from '../context/types';

require('../style/additional_info.scss');

const useStyles = makeStyles(() => ({
	formControl: {
		minWidth: 100,
	},
}));

function AdditionalInfo() {
	const [, dispatch] = useContext(TravelContext);
	const [checkedActivities, setCheckedActivities] = useState([]);
	const [checkedProfiles, setCheckedProfiles] = useState([]);

	const handleCheckedActivities = (event) => {
		setCheckedActivities({
			...checkedActivities,
			[event.target.name]: event.target.checked,
		});
	};

	const handleCheckedProfiles = (event) => {
		setCheckedProfiles({
			...checkedProfiles,
			[event.target.name]: event.target.checked,
		});
	};

	const newProfiles = [
		{
			id: 1,
			image: '',
			name: 'Familiar',
		},
		{
			id: 2,
			image: '',
			name: 'Grupal',
		},
		{
			id: 3,
			image: '',
			name: 'Pareja',
		},
	];
	// newProfiles = [...newProfiles, ...tripProfiles];

	const newActivities = [
		{
			id: 1,
			image: '',
			name: 'Familiar',
		},
		{
			id: 2,
			image: '',
			name: 'Grupal',
		},
		{
			id: 3,
			image: '',
			name: 'Pareja',
		},
		{
			id: 1,
			image: '',
			name: 'Familiar',
		},
		{
			id: 2,
			image: '',
			name: 'Grupal',
		},
		{
			id: 3,
			image: '',
			name: 'Pareja',
		},
	];
	// newActivities = [...newActivities, ...activities];

	const classes = useStyles();
	const handleIdioma = (e) => {
		dispatch({
			type: SET_LANGUAGE,
			payload: e.target.value,
		});
	};

	return (
		<div className="additional_info">
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<div className="additional_info__wrapper">
						<div className="additional_info__actividades">
							<div className="additional_info__actividades_header">
								<h3>Actividades</h3>
								<span>
									({}/{newProfiles.length})
								</span>
							</div>
							<div className="additional_info__actividades_wrapper">
								{newActivities.length &&
									newActivities.map((activity, index) => (
										<div key={index} className="additional_info__actividad">
											<FormControlLabel
												labelPlacement="start"
												control={
													<Checkbox
														onChange={handleCheckedActivities}
														color="primary"
														name={activity.name}
														inputProps={{ 'aria-label': 'secondary checkbox' }}
													/>
												}
												label={activity.name}
											/>
										</div>
									))}
							</div>
						</div>
						<div className="additional_info__perfiles_viaje">
							<div className="additional_info__perfil_viaje_header">
								<h3>Perfil de viaje</h3>
								<span>
									({}/{newProfiles.length})
								</span>
							</div>
							<div className="additional_info__perfiles_wrapper">
								{newProfiles.map((profile, index) => (
									<div key={index} className="additional_info__perfil_viaje">
										<FormControlLabel
											labelPlacement="start"
											control={
												<Checkbox
													onChange={handleCheckedProfiles}
													color="primary"
													name={profile.name}
													inputProps={{ 'aria-label': 'secondary checkbox' }}
												/>
											}
											label={profile.name}
										/>
									</div>
								))}
							</div>
						</div>
						<div className="additional_info__idioma">
							<h3>Idioma</h3>
							<FormControl className={classes.formControl}>
								<InputLabel>Seleccione</InputLabel>
								<Select onChange={handleIdioma}>
									<MenuItem value="1">Ingles</MenuItem>
									<MenuItem value="2">Español</MenuItem>
									<MenuItem value="3">Portugues</MenuItem>
								</Select>
							</FormControl>
						</div>
					</div>
				</Grid>
				<Grid item xs={6} />
			</Grid>
		</div>
	);
}

export default AdditionalInfo;
