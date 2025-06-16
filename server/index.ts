import path from "path";
import express from "express";
import type { ViteDevServer } from "vite";
import { createServer as createViteServer } from "vite";
import fs from "fs";

export async function setupVite(app: express.Express, server: any) {
  const vite: ViteDevServer = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: {
        port: 24678, // Optional: Vite dev HMR port
      },
    },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let template = fs.readFileSync(
        path.resolve("index.html"),
        "utf-8"
      );

      template = await vite.transformIndexHtml(url, template);
      const html = template;
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: express.Express) {
  const staticPath = path.join(__dirname, "public");

  // Serve static assets from dist/public
  app.use(express.static(staticPath));

  // Serve index.html for all unmatched routes (SPA fallback)
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
}

export function log(message: string) {
  console.log(`[express] ${message}`);
}
