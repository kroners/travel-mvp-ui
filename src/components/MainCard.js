import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@material-ui/core';

const MainCard = ({ data = {}, selectPlan }) => {
	if (!data) {
		console.log('');
	}

	return (
		<div className="program_search__main_card">
			<Grid container>
				<Grid item xs={6}>
					<div className="program_search__main_left">
						<p className="main_left__service">Servicio Privado con Guia</p>
						<p className="main_left__language">Tour en ingles</p>
					</div>
				</Grid>
				<Grid item xs={6}>
					<div className="program_search__main_right">
						<h3>5 dias - 4 noches en Egipto</h3>
						<p className="program_search__main_descripcion">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							onumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. , Donumy eirmod tempor invidunt ut labore
							et dolore magna al. Lorem ipsum dolor sit amet, consetetur
							sadipscing elitr, sed diam onumy eirmod tempor invidunt ut labore
							et dolore magna aliquyam erat, sed diam voluptua. , Donumy eirmod
							tempor invidunt ut labore et dolore magna al.
						</p>
						<div className="program_search__main_right__extras">
							<div className="program_search__main_responsable">
								<p>Responsable / Ag. viajes</p>
							</div>
							<div className="program_search__main_calificaciones">
								<p className="program_search__main_rating">5 Muy bueno</p>
								<p className="program_search__main_comentarios">
									555 comentario(s)
								</p>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
			<Grid container>
				<div className="program_search__card_footer">
					<div className="program_search__card_footer_left">
						<div className="program_search__card-pago">USD $ 7,500</div>
						<div className="program_search__card--forma_pago">
							Forma de Pago
						</div>
					</div>
					<div className="program_search__card_footer_right">
						<Button
							className="program_search__main__ver_detalle__button"
							onClick={() => selectPlan(1)}
						>
							Ver detalle
						</Button>
						<Button className="program_search__main__selecciona__button">
							Seleccionar
						</Button>
					</div>
				</div>
			</Grid>
		</div>
	);
};

MainCard.propTypes = {
	selectPlan: PropTypes.func.isRequired,
};

export default MainCard;
