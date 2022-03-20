import React from 'react'

function RandomItemsGrid() {
  return (
    <div className="grid overflow-hidden grid-cols-4 grid-rows-4 gap-3 grid-flow-row mb-80" style={{height: '40rem'}}>
      <div className="bg-white row-span-3">1</div>
      <div className="bg-white row-start-4 row-span-1 col-start-1 col-span-1">2</div>
      <div className="bg-white row-start-1 row-span-4 col-start-2 col-span-1">3</div>
      <div className="bg-white row-start-1 row-span-2 col-start-3 col-span-1">4</div>
      <div className="bg-white row-start-3 row-span-2 col-start-3 col-span-1">5</div>
      <div className="bg-white row-start-1 row-span-2 col-start-4 col-span-1">6</div>
      <div className="bg-white row-start-3 row-span-1 col-start-4 col-span-1">7</div>
      <div className="bg-white row-start-4 row-span-1 col-start-4 col-span-1">8</div>
    </div>
  )
}

export default RandomItemsGrid