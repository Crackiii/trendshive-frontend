import { PrismaClient } from "@prisma/client"

let prisma: PrismaClient

// @ts-ignore
if (!global.prisma) {
  console.log('[PRISMA CLIENT]: Created DB connection.');
  // @ts-ignore
  global.prisma = new PrismaClient()
}
console.log('[PRISMA CLIENT]: Returning DB connection.');
// @ts-ignore
prisma = global.prisma

export default prisma