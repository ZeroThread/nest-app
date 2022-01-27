import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  users = [
    {
      id: 1,
      email: 'divine@test.com',
      created_at: new Date(),
    },
    {
      id: 2,
      email: 'test@test.com',
      created_at: new Date(),
    },
    {
      id: 3,
      email: 'testing@test.com',
      created_at: new Date(),
    },
  ];
  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
