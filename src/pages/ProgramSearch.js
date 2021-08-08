import React from 'react';
import ChoiceCard from '../components/ChoiceCard';
import MainCard from '../components/MainCard';
import { useProjects } from '../hooks';
import Sidebar from '../sections/Sidebar';
import { useHistory } from 'react-router-dom';

require('../style/program_search.scss');

const ProgramSearch = () => {
  // const { projects: { alternatives } } = useProjects()
  const alternatives = [
    {
      title: '5 días - 4 noches en egipto',
      description: 'City Tour',
      language: 'Ingles',
      service: 'Servicio privado sin guia',
      price: 'USD $3000',
    },
    {
      title: '5 días - 4 noches en egipto',
      description: 'City Tour',
      language: 'Ingles',
      service: 'Servicio privado sin guia',
      price: 'USD $9000',
    },
    {
      title: '5 días - 4 noches en egipto',
      description: 'City Tour',
      language: 'Ingles',
      service: 'Servicio privado sin guia',
      price: 'USD $9000',
    },
  ];
  let history = useHistory();

  const selectPlan = (id) => {
    history.push(`/programs/${id}`);
  };

  return (
    <div className='program_search'>
      <div className='program_search__sidebar'>
        <Sidebar>
          {' '}
          <div className='program_search__wrapper'>
            <h3>Resultado principal</h3>
            <MainCard selectPlan={selectPlan} />
            <p>Tambien te puede interesar (3)</p>
            <div className='program_search__options'>
              {alternatives && alternatives.map((activity) => <ChoiceCard data={activity} />)}
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default ProgramSearch;
