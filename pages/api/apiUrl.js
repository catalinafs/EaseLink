import { PrismaClient } from "@prisma/client";
import nanoId from "nano-id";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { url } = req.body;
  const shortUrl = nanoId(10);

  try {
    const data = await prisma.link.create({
      data: { url, shortUrl }
    })

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
}