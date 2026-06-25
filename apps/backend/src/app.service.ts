import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {
      name: 'Marketplace API',
      status: 'ok',
      version: '0.1.0',
      modules: [
        'auth',
        'users',
        'products',
        'categories',
        'orders',
        'reviews',
        'favorites',
        'chat',
        'admin',
        'notifications',
      ],
    };
  }
}
