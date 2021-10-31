import { TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
	const { id, disabled, label, className, variant = 'outlined', value } = props;
	const convertedId = typeof id === 'number' ? id.toString() : id;
	return (
		<>
			<TextField
				disabled={disabled}
				id={convertedId}
				label={label}
				value={value}
				className={className}
				variant={variant}
			/>
		</>
	);
};

CustomInput.propTypes = {
	id: PropTypes.any,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	className: PropTypes.string,
	variant: PropTypes.string,
	value: PropTypes.any,
};

export default CustomInput;
