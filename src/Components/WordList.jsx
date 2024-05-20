import React from 'react'

function WordList({ foundedWords }) {
  return (
    <div className="border-2 border-[#00000041] rounded-lg p-2 max-lg:col-span-2 max-lg:mt-20 max-lg:min-h-[200px]">
      <p>qweqwe</p>
      <div className="grid grid-rows grid-cols-3 gap-2 mt-5">
        {foundedWords && foundedWords.map((a) => {
          return <div className='foundedWords'>{a}</div>
        })}
      </div>
    </div>
  )
}

export default WordList