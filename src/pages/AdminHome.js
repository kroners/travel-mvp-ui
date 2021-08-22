import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getAllPrograms } from '../api';

const AdminHome = props => {

  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // retrieve programs according to a specified filter
    retrievePrograms();
  }, []);

  const retrievePrograms = () => {
    getAllPrograms.then((data) => {
      setPrograms(data);
    })
    .catch((error) => {
      setError(error);
    });
  };


  return (
    <div>
      <h1>Bienvenido</h1>
      <div className="programs-table">
        <div className="programs-table__container">
          <div className="progras-search-filter">
            {/* icon */}
          </div>
          <div className="programs-table__list">
            <div className="programs-table__header">

            </div>
            <div className="programs-table__body">
              {programs && programs.map((program) => {
                <div className="programs-table_row">
                  <div>
                    {program.name}
                  </div>
                  <div>
                    {program.cod}
                  </div>
                  <div>
                    {program.destino}
                  </div>
                  <div>
                    {program.fechaInicio}
                  </div>
                  <div>
                    {program.fechaFin}
                  </div>
                  <div>
                    {program.duracion}
                  </div>
                  <div>
                    {program.name}
                  </div>
                  
                </div>
              })}
              {error && (
                <div className="programs-table_error">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AdminHome.propTypes = {

}

export default AdminHome
