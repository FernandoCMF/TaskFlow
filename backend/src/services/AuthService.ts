import bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/UserRepository';

interface RegisterDTO {
  name: string;
  email: string;
  password: string;
}

export class AuthService {
  private userRepository = new UserRepository();

  async register({ name, email, password }: RegisterDTO) {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new Error('User Already exits');
    }

    const hashedPassowrd = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassowrd,
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
