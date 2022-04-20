import React from 'react'

interface Tab {
    label: string
    name: string
}
const tabs: Tab[] = [
    {
        label: 'All',
        name: 'all',
    },
    {
        label: 'Top Stories',
        name: 'stories'
    },
    {
        label: 'Trending Videos',
        name: 'videos'
    },
    {
        label: 'Trending News',
        name: 'news'
    }
]

interface Props {
    onTabChange: (name: string) => void
    onSearchChange: (value: string) => void
    activeTab: string
}

function Tabs(props: Props) {
  return (
    <div>
      <div className="mb-4 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            {
                tabs.map((tab) => (
                    <li className="" key={tab.name} onClick={() => props.onTabChange(tab.name)}>
                        <button className={`py-3 px-4 rounded-t-lg border-b-2 ${props.activeTab === tab.name ? 'border-slate-500' : ''}`}>{tab.label}</button>
                    </li>
                ))
            }
        </ul>
        <div className='searchg-filter hidden'>
            <input type={'text'} placeholder={'Search stories...'} onChange={(ev) => props.onSearchChange(ev.target.value)} />
        </div>
    </div>
  </div>
  )
}

export default Tabs