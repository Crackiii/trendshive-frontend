import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../client'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) =>  {
  try {
    const data = await Promise.all([
      prisma.google.findMany({
        where: {
          catgory: {
            contains: 'business'
          },
          country: String(req.query.country) || 'US'
        }
      }),
      prisma.youtube.findMany({
        where: {
          catgory: {
            contains: 'business'
          },
          country: String(req.query.country) || 'US'
        }
      }),
      prisma.duckduckgo.findMany({
        where: {
          category: {
            contains: 'business'
          },
          country: String(req.query.country) || 'US'
        }
      }),
    ])
  
    res.status(200).json(data)
  } catch(error) {
    res.status(200).json([[], [], []])
    console.log({ error })
  }
}

export default handler