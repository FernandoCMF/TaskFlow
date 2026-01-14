import { Router } from 'express';
import { authRoutes } from './auth.routes';

const routes = Router();

routes.get('/health', (req, res) => {
  return res.json({ status: 'ok' });
});

routes.use('/auth', authRoutes);

export default routes;
