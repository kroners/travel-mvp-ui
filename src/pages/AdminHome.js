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

const AdminHome = (props) => {
	const [programs, setPrograms] = useState([]);
	const [errorResponse, setErrorResponse] = useState();
	const [searchOption, setSearchOption] = useState('codigo');

	useEffect(() => {
		// retrieve programs according to a specified filter
		retrievePrograms();
	}, []);

	const retrievePrograms = () => {
		getAllPrograms
			.then((data) => {
				setPrograms(data);
			})
			.catch((error) => {
				setErrorResponse(error);
			});
	};

	const setSearchOptionSelect = (value) => {
		setSearchOption(value);
	};

	return (
		<div>
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
								<div className="programs-table__header-title">N*</div>
								<div className="programs-table__header-title">Código</div>
								<div className="programs-table__header-title">Título</div>
								<div className="programs-table__header-title">Descripción</div>
								<div className="programs-table__header-title">Duración</div>
								<div className="programs-table__header-title">Fechas</div>
								<div className="programs-table__header-title">Idioma</div>
								<div className="programs-table__header-title">Opciones</div>
							</div>
						</div>
						<div className="programs-table__body">
							{programs &&
								programs.map((program) => {
									const fechas = `${program.fechaInicio} - ${program.fechaFin}`;
									const duracion = `${program.duracion.dias} dias - ${program.duracion.noches} noches`;
									return (
										<div className="programs-table_row">
											<div>{program.id}</div>
											<div>{program.codigo}</div>
											<div>{program.titulo}</div>
											<div>{program.descripcion}</div>
											<div>{duracion}</div>
											<div>{fechas}</div>
											<div>{program.idioma}</div>
											<div>{program.opciones}</div>
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
