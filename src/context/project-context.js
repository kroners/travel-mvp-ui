import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useProjects, useFilters } from '../hooks'

export const ProjectContext = createContext()
export const ProjectProvider = ({ children }) => {
  const { project, setProject } = useProjects()
  const { filters, setFilters } = useFilters()

  return (
    <ProjectContext.Provider value={{ 
      projectValue: { project, setProject }, 
      filtersValues: { filters, setFilters }, 
    }}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProjectsValue = () => useContext(ProjectContext)

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
