import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHealth() {
    return {
      module: 'users',
      status: 'ready',
      entity: 'User',
    };
  }
}
