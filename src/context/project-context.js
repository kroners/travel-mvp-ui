import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useProjects, useFilters, useConfig } from '../hooks';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
	const { config, setConfig } = useConfig();
	const { project, setProject } = useProjects();
	const { filters, setFilters } = useFilters();

	return (
		<ProjectContext.Provider
			value={{
				projectValues: { project, setProject },
				filtersValues: { filters, setFilters },
				configValues: { config, setConfig },
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export const useProjectsValue = () => useContext(ProjectContext);

ProjectProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
