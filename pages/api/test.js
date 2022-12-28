// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const users = await prisma.user.findMany();
      res.status(200).json(users);
      break;
    
    case 'POST':
      const newName = req.body.name;

      const newUser = await prisma.user.create({
        data: {
          name: newName
        }
      });

      res.status(200).json({ message: 'made new user', user: newUser });
      break;

    default:
      res.status(200).json({ message: 'did nothing' });

  }
}
