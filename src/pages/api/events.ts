import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST /api/events — n8n posts analytics events here
  if (req.method === "POST") {
    const { organizationId, source, type, payload, occurredAt } = req.body;

    if (!organizationId || !source || !type || !payload) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const event = await prisma.analyticsEvent.create({
      data: {
        organizationId,
        source,
        type,
        payload,
        occurredAt: occurredAt ? new Date(occurredAt) : new Date(),
      },
    });

    return res.status(201).json(event);
  }

  // GET /api/events?orgId=xxx — fetch events for an org
  if (req.method === "GET") {
    const { orgId } = req.query;

    if (!orgId || typeof orgId !== "string") {
      return res.status(400).json({ error: "orgId query param required" });
    }

    const events = await prisma.analyticsEvent.findMany({
      where: { organizationId: orgId },
      orderBy: { occurredAt: "desc" },
      take: 100,
    });

    return res.status(200).json(events);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
