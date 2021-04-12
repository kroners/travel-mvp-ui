import React from 'react'
import ChoiceCard from '../components/ChoiceCard'
import MainCard from '../components/MainCard'
import { useProjects } from '../hooks'
import Sidebar from '../sections/Sidebar'
import { useHistory } from 'react-router-dom'

require("../style/program_search.scss"); 

const ProgramSearch = () => {
    const { projects: { alternatives } } = useProjects()
    let history = useHistory();

    const selectPlan= id => {
        history.push(`/programs/${id}`);
    }

    return (
        <div className="program_search">
            <div className="program_search__sidebar">
                <Sidebar />
            </div>
            <div className="program_search__wrapper">
                <h3>Resultado principal</h3>
                <MainCard 
                    selectPlan={selectPlan}
                />
                <p>Tambien te puede interesar (3)</p>
                {alternatives && 
                    alternatives.map((activity) => (
                    <ChoiceCard data={activity} />
                ))} 
            </div>
        </div>
    )
}

export default ProgramSearch