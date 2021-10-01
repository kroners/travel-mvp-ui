import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SelectedProgramContext = createContext();
export const SelectedProgramProvider = ({ children }) => {
	const [selectedProgram, setSelectedProgram] = useState('INBOX');

	return (
		<SelectedProgramContext.Provider
			value={{ selectedProgram, setSelectedProgram }}
		>
			{children}
		</SelectedProgramContext.Provider>
	);
};

export const useSelectedProgramValue = () => useContext(SelectedProgramContext);

SelectedProgramProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
