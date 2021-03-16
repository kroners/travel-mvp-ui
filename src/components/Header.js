import React from 'react'
import PropTypes from 'prop-types'

import dummyLogo from "../assets/logo_blanco.png";
require("../style/header.scss");

const Header = ({ logo, isLoggedIn, onLoginButtonClick }) => {

    logo = dummyLogo; 

    return (
        <header>
            <div className="navbar">
                <div className="navbar__logo">
                    <div aria-label="ViajesMVP" role="img" className="navbar__logo--inner">
                        <img src={logo} alt="Viajes MVP" role="presentation" />
                    </div>
                </div>
                <div className="navbar__options">
                    <div className="navbar__paquetes">
                        Paquetes
                    </div>
                    <div className="navbar__contacta-asesor">
                        Contacta un asesor
                    </div>
                </div>
                <div className="navbar__user-options">
                    <div className="navbar__login">Login / </div>
                    <div className="navbar__register">Register</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
