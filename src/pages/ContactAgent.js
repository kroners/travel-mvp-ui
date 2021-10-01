import {
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
} from '@material-ui/core';
import React from 'react';

require('../style/contact_agent.scss');

const ContactAgent = () => {
	const lala = '';

	return (
		<div className="contact-agent">
			<div className="contact-agent__banner">Contacta a un asesor</div>
			<div className="contact-agent__body">
				<FormControl>
					<div className="contact-agent__form">
						<div className="contact-agent__form-item">
							<InputLabel htmlFor="client-name">Ingresa tu nombre:</InputLabel>
							<Input id="client-name" type="text" />
						</div>
						<div className="contact-agent__form-item">
							<InputLabel htmlFor="client-email">Ingresa tu correo:</InputLabel>
							<Input id="client-email" type="email" />
						</div>
						<div className="contact-agent__form-item">
							<InputLabel htmlFor="client-qa">Escribe tu consulta:</InputLabel>
							<Input id="client-qa" />
						</div>
					</div>
				</FormControl>
			</div>
		</div>
	);
};

export default ContactAgent;
