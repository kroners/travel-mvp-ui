import React, { useReducer } from 'react';
import ProgramReducer from './ProgramReducer';
import ProgramContext from './ProgramContext';

const ProgramState = (props) => {
	const initialState = {
		programa_principal: {},
		programas_extras: [],
	};

	const [state, dispatch] = useReducer(ProgramReducer, initialState);

	return (
		<ProgramContext.Provider value={[state, dispatch]}>
			{props.children}
		</ProgramContext.Provider>
	);
};

export default ProgramState;
