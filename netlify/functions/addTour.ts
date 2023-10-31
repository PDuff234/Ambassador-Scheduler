import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

interface ScoreEntry {
  id: bigint, 
  fullname: String, 
  email: String
}

const handler: Handler = async (event, context) => {
  if(event.body) {
    const newTour = JSON.parse(event.body) as ScoreEntry;
    await prisma.tour.create({
      data: {
        id: BigInt(newTour.id),
        fullname: String(newTour.fullname),
        email: String(newTour.email)
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(newTour)
    };
  }

  return {
    statusCode: 500
  };
}


export { handler }