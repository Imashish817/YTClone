import React from 'react'

const ChoiceBtn = ({name}) => {
  return (
    
    <div className='px-4 py-1 rounded-full bg-gray-200'>
        <p className='cursor-pointer truncate'>{name}</p>
    </div>
  
  )
}

export default ChoiceBtn