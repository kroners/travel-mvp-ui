import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import dummyLogo from '../assets/logo_blanco.png';

require('../style/header.scss');

// eslint-disable-next-line
const Header = ({ logo, isLoggedIn, onLoginButtonClick }) => {
	logo = dummyLogo;
	const history = useHistory();

	const goToProgramSearch = () => {
		history.push('/');
	};

	const goToContactAgent = () => {
		history.push('/contact-agent');
	};

	return (
		<header>
			<div className="navbar">
				<div className="navbar__logo">
					<div
						aria-label="ViajesMVP"
						role="img"
						className="navbar__logo--inner"
					>
						<img src={logo} alt="Viajes MVP" role="presentation" />
					</div>
				</div>
				<div className="navbar__options">
					<div className="navbar__paquetes">
						<button type="button" onClick={() => goToProgramSearch()}>
							Paquetes
						</button>
					</div>
					<div className="navbar__contacta-asesor">
						<button type="button" onClick={() => goToContactAgent()}>
							Contacta un asesor
						</button>
					</div>
				</div>
				<div className="navbar__user-options">
					<div className="navbar__login">Login / </div>
					<div className="navbar__register">Register</div>
				</div>
			</div>
		</header>
	);
};

Header.defaultProps = {
	isLoggedIn: false,
};

Header.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default Header;
