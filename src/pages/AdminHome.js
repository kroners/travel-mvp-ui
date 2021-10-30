import React, { useEffect, useState } from 'react';
import {
	Button,
	TextField,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { getAllPrograms } from '../api';

require('../style/admin_home.scss');

const AdminHome = (props) => {
	const [programs, setPrograms] = useState([]);
	const [errorResponse, setErrorResponse] = useState();
	const [searchOption, setSearchOption] = useState('codigo');

	useEffect(() => {
		// retrieve programs according to a specified filter
		retrievePrograms();
	}, []);

	const retrievePrograms = async () => {
		const createdPrograms = await getAllPrograms();
		setPrograms(createdPrograms);
	};

	const setSearchOptionSelect = (value) => {
		setSearchOption(value);
	};

	return (
		<div className="admin__home">
			<h1>Bienvenido</h1>
			<div className="programs-table">
				<div className="programs-table__container">
					<div className="progras-search-filter">{/* icon */}</div>
					<div className="programs-table__list">
						<div className="programs-table__header">
							<div className="programs-table__header-searchbox">
								{/* Add input and button elements for searching */}
								<InputLabel id="demo-simple-select-label">
									Ingresa el {searchOption} del programa
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={searchOption}
									label="Valor de Busqueda"
									onChange={setSearchOptionSelect}
								>
									<MenuItem value="codigo">Codigo</MenuItem>
									<MenuItem value="titulo">Titulo</MenuItem>
									<MenuItem value="numero">Numero</MenuItem>
								</Select>
								<TextField
									id="outlined-basic"
									label="Outlined"
									variant="outlined"
								/>
								<Button variant="contained">Buscar</Button>
							</div>
							<div className="programs-table__header-titles">
								<div className="programs-table__header-title program-table__id">
									N*
								</div>
								<div className="programs-table__header-title program-table__codigo">
									Código
								</div>
								<div className="programs-table__header-title program-table__titulo">
									Título
								</div>
								<div className="programs-table__header-title program-table__descripcion">
									Descripción
								</div>
								<div className="programs-table__header-title program-table__duracion">
									Duración
								</div>
								<div className="programs-table__header-title program-table__fechas">
									Fechas
								</div>
								<div className="programs-table__header-title program-table__idioma">
									Idioma
								</div>
								<div className="programs-table__header-title program-table__opciones">
									Opciones
								</div>
							</div>
						</div>
						<div className="programs-table__body">
							{programs &&
								programs.map((program) => {
									const fechas = `${new Date(
										program.fechas.fechaInicio
									).toLocaleDateString()} - ${new Date(
										program.fechas.fechaFin
									).toLocaleDateString()}`;
									const duracion = `${program.duracion.dias} dias - ${program.duracion.noches} noches`;
									return (
										<div className="programs-table__row">
											<div className="program-table__id">{program.id}</div>
											<div className="program-table__codigo">
												{program.codigo}
											</div>
											<div className="program-table__titulo">
												{program.titulo}
											</div>
											<div className="program-table__descripcion">
												{program.descripcion}
											</div>
											<div className="program-table__duracion">{duracion}</div>
											<div className="program-table__fechas">{fechas}</div>
											<div className="program-table__idioma">
												{program.idioma}
											</div>
											<div className="program-table__opciones">
												{program.opciones}
											</div>
										</div>
									);
								})}
							{errorResponse && (
								<div className="programs-table_error">{errorResponse}</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

AdminHome.propTypes = {};

export default AdminHome;
