import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

export const SelectedFiltersContext = createContext()
export const SelectedFiltersProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState('INBOX')

  return (
    <SelectedFiltersContext.Provider
      value={{ selectedFilters, setSelectedFilters }}
    >
      {children}
    </SelectedFiltersContext.Provider>
  )
}

export const useSelectedFiltersValue = () => useContext(SelectedFiltersContext)

SelectedFiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
