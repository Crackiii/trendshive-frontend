import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../client'


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) =>  {
  const data = await Promise.all([
    prisma.google.findMany({
      where: {
        catgory: {
          contains: 'sports'
        },
        country: String(req.query.country) || 'US'
      }
    }),
    prisma.youtube.findMany({
      where: {
        catgory: {
          contains: 'sports'
        },
        country: String(req.query.country) || 'US'
      }
    }),
    prisma.duckduckgo.findMany({
      where: {
        category: {
          contains: 'sports'
        },
        country: String(req.query.country) || 'US'
      }
    }),
  ])

  res.status(200).json(data)
}

export default handler