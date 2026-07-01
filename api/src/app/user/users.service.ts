import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'shared';
import { User } from 'shared';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: crypto.randomUUID(),
      name: createUserDto.name,
      // createdAt: new Date(),
    };

    this.users.push(user);

    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  remove(id: string): User[] {
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  }
}