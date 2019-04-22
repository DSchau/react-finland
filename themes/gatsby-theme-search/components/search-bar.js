import React, { useState } from 'react'
import PropTypes from 'prop-types'

function SearchBar({
  children,
  render = children
}) {
  const [toggled, setToggled] = useState(false)
  return (
    <>
      {render({
        onClick: () => setToggled(!toggled),
        toggled
      })}
    </>
  )
}

SearchBar.propTypes = {
  icon: PropTypes.node
}

export default SearchBar
