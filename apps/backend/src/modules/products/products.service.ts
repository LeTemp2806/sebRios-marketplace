import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getHealth() {
    return {
      module: 'products',
      status: 'ready',
      entity: 'Product',
    };
  }
}
