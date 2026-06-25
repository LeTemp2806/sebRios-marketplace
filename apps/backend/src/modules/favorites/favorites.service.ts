import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  getHealth() {
    return {
      module: 'favorites',
      status: 'ready',
      entity: 'Favorite',
    };
  }
}
