import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

const app = express();
app.use(express.json({ limit: '5mb' }));

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', brand: 'ARCANE STUDIO', timestamp: new Date().toISOString() });
});

// Lead capture / Consultation booking endpoint
app.post('/api/consultation/book', (req: Request, res: Response) => {
  const { name, phone, email, projectType, city, estimatedBudget, notes } = req.body;
  if (!name || !name.trim() || !phone || !phone.trim()) {
    res.status(400).json({ error: 'Name and Phone number are required to schedule a consultation.' });
    return;
  }

  // Generate reference pass
  const bookingId = `ARCN-${Date.now().toString().slice(-6)}`;

  res.json({
    success: true,
    bookingId,
    message: `Thank you, ${name.trim()}. Your consultation request has been received by Arcane Studio Design Directorate. Our senior interior architect will contact you within 2 business hours.`
  });
});

// Setup Vite middleware in dev or static serving in production
async function startServer() {
  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static frontend build
    app.use(express.static(path.resolve(__dirname, 'dist')));

    // API 404 handler
    app.all('/api/*', (_req: Request, res: Response) => {
      res.status(404).json({ error: 'API endpoint not found' });
    });

    // SPA fallback
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ARCANE STUDIO server active at http://0.0.0.0:${PORT} (environment: ${isProd ? 'production' : 'development'})`);
  });
}

startServer();

