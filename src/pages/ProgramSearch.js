import React from 'react'
import ChoiceCard from '../components/ChoiceCard'
import MainCard from '../components/MainCard'
import { useProjects } from '../hooks'
import Sidebar from '../sections/Sidebar'

const ProgramSearch = () => {
    const { projects: { alternatives } } = useProjects()

    return (
        <div className="program_search">
            <div className="program_search__sidebar">
                <Sidebar />
            </div>
            <div className="program_search__wrapper">
                <h3>Resultado principal</h3>
                <MainCard />
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