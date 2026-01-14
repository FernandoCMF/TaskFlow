import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const authService = new AuthService();

    const user = await authService.register({
      name,
      email,
      password,
    });

    return res.status(201).json(user);
  }
}
