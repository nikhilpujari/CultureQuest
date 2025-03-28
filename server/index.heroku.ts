import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";
import { serveStatic } from "./vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express server and HTTP server
const app = express();
const server = createServer(app);

// Parse JSON body
app.use(express.json());

// Setup routes
registerRoutes(app).then(() => {
  console.log("Routes registered");
});

// In production, serve the static files from the dist directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist/public")));
  
  // Handle all other routes by sending the index.html file
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/public/index.html"));
  });
} else {
  // In development, use Vite
  serveStatic(app);
}

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server error", message: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default server;