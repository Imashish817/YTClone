import React from 'react'

const SideButton = ({icon,value}) => {
    return (
        <div className=''>
            <h2 className='px-3 py-2 mx-4 mt-2 rounded-full flex hover:bg-gray-100 cursor-pointer'> 
            {icon&&<img className='h-7 mr-7' src={icon} />}
            {value}</h2>
        </div>
    )
}

export default SideButton