import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const org = await prisma.organization.create({
    data: { name: req.body?.name ?? "Kenna Real Estate" },
  });

  return res.status(200).json({ organizationId: org.id, name: org.name });
}
