import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const students = await prisma.students.findMany(); // Fetch all students using Prisma
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch students' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


