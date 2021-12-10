/* eslint-disable no-nested-ternary */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { TRAVEL_API } from '../api';
import { filterOptions } from '../helpers';

export const useProjects = () => {
	const [projects, setProjects] = useState([]);

	// useEffect(() => {
	//   let promesaResuelta = Promise.resolve(true)
	//   promesaResuelta
	//     .then((snapshot) => {
	//       // const allProjects = snapshot.docs.map((project) => ({
	//       //   ...project.data(),
	//       //   docId: project.id,
	//       // }))

	//       // if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
	//       //   setProjects(allProjects)
	//       // }
	//     })
	// }, [projects])

	return { projects, setProjects };
};

export const useFilters = () => {
	const [filters, setFilters] = useState(filterOptions);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`${TRAVEL_API}/activities`);
			setFilters(result.data);
		};

		fetchData();
	}, [filters]);

	return { filters, setFilters };
};

export const useConfig = () => {
	const initialConfig = {
		selectedPage: 'packages',
	};
	const [config, setConfig] = useState(initialConfig);

	return { config, setConfig };
};
