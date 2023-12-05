import React from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { FiSquare } from 'react-icons/fi'

const Check = ({isCompleted}) => {
  return (
    <div className='check'>
        { isCompleted ?
        <FiCheckSquare size={30} className='check-icon' /> :
        <FiSquare size={30} className='empty-icon' />
        }
    </div>
  )
}

export default Check