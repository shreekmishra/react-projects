import React from 'react'

function AppFooter() {
  return (
    <div className='bg-body-tertiary'>{process.env.REACT_APP_NAME}@{process.env.REACT_APP_VERSION}</div>
  )
}

export default AppFooter