import type { NextApiRequest, NextApiResponse } from "next";

// Todo API removed — replaced by AnalyticsEvent schema
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(410).json({ message: "This endpoint has been removed." });
}
