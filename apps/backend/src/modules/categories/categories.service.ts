import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  getHealth() {
    return {
      module: 'categories',
      status: 'ready',
      entity: 'Category',
    };
  }
}
