import React from 'react'
import { realtime, daily } from '../data'
import { menuItems } from '../SideBar'
import Category from './category/Category'
import Grid from './grids/Grid'


function BodyLeftContent() {

  const articles = realtime.map(story => story?.articles).flatMap(article => article)
  const dailyArticles = daily.map(story => story?.articles).flatMap(article => article)

  const totalArticles = [...articles, ...dailyArticles].filter(s => s)

  return (
    <div className='p-5 overflow-hidden'>
      <Grid />
      {
        menuItems.map((item, index) => (
          <Category key={index} name={item.label} icon={item.icon_30 || ''} videos={[...totalArticles.splice(0, 6)]} articles={[...totalArticles.splice(0, 6)]} search={[...totalArticles.splice(0, 6)]} />
        ))
      }
      
    </div>
  )
}

export default BodyLeftContent