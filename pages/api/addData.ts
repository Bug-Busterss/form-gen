import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function addData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newEnt = await prisma.data.create({
    data: req.body,
  });
  console.log(newEnt);
  return res.json(newEnt);
}
