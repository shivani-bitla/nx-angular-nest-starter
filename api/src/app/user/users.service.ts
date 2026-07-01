import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'shared';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
  async findUnique(id: string){
    const user = await this.prisma.user.findUnique({
  where: { id },
});

if (!user) {
  throw new NotFoundException('User not found');
}

return user;
  }

  async remove(id: string) {
    await this.prisma.user.delete({
      where: { id },
    });
    return { message: 'User deleted' , success: true};
  }
}
