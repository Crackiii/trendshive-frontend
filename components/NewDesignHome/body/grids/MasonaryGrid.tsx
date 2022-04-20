import React from 'react'

interface Props {
  items: any[]
}

//shuffule the items array
const shuffule = (items: any[]) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items
}

function MasonaryGrid(props: Props) {

  const shuffledITems = shuffule(props.items)

  return (
    <div className=''>
      MasonaryGrid
    </div>
  )
}

export default MasonaryGrid