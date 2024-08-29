import React from 'react'
import ChoiceBtn from './ChoiceBtn'

const ChoiceBTNList = () => {
  const choiceList = ["All", "Music", "Mixes", "indian pop music", "Mixes", "indian pop music", "javasript", "Computer", "Computer Programming", "Cooking", "News", "Gamming"]

  return (
      <div className='overflow-x-scroll no-scrollbar flex space-x-4 '>
        {choiceList.map((name,i) => {
          return (
            <div key={i} className='mt-4 justify-center ml-[1%]'>
              <ChoiceBtn  name={name} />
            </div>)
        })}
      </div>
    
  )
}

export default ChoiceBTNList