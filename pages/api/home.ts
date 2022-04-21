import type { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
import prisma from '../../client'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try{
    const query = {
      where: {
        country:  String(req.query.country) || 'US'
      }
    }
    const [articles, videos, links] = await Promise.all([
      prisma.google.findMany(query),
      prisma.youtube.findMany(query),
      prisma.duckduckgo.findMany(query)
    ])
    
    res.status(200).json({
      results: {
        articles: _.groupBy(articles.map((article) => ({...article, catgory: article.catgory.split('-')[1].trim()})), 'catgory'), 
        videos: _.groupBy(videos.filter(v => /watch/.test(v.url)), 'catgory'), 
        links: _.groupBy(links, 'category')} 
      }
    )
  } catch(error) {
    res.status(200).json({
      results: {
        articles: [],
        videos: [],
        links: []
      }
    })
    console.log({ error })
  }
}

export default handler