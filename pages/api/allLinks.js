import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method === 'GET') {
        try {
            const registros = await prisma.link.findMany({
                orderBy: {
                    id: 'desc',
                },
                take: 10,
            });

            res.status(200).json(registros);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los registros' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}