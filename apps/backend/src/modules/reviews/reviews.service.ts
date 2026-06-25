import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  getHealth() {
    return {
      module: 'reviews',
      status: 'ready',
      entity: 'Review',
    };
  }
}
