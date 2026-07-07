import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    success: true,
    timestamp: Date.now(),
    iso: new Date().toISOString(),
    unix: Math.floor(Date.now() / 1000),
    method: req.method,
  });
}
