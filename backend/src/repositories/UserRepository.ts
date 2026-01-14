import { prisma } from '../prisma/client';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export class UserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: CreateUserDTO) {
    return prisma.user.create({
      data,
    });
  }
}
