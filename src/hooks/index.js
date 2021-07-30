/* eslint-disable no-nested-ternary */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { TRAVEL_API } from '../api';
import { filterOptions } from '../helpers';

export const useProjects = () => {
<<<<<<< HEAD
  const [projects, setProjects] = useState([])
=======
  const [projects, setProjects] = useState([]);
  console.log({ hooksProjects: projects });
>>>>>>> main

  // useEffect(() => {
  //   let promesaResuelta = Promise.resolve(true)
  //   promesaResuelta
  //     .then((snapshot) => {
  //       console.log({ snapshot })
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
<<<<<<< HEAD
=======
  console.log({ filters });
>>>>>>> main

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${TRAVEL_API}/activities`);
<<<<<<< HEAD
=======
      console.log({ result });
>>>>>>> main
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
