import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getHealth() {
    return {
      module: 'auth',
      status: 'ready',
      nextStep: 'Implement login, register, refresh tokens and guards.',
    };
  }
}
