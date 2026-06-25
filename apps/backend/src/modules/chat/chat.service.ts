import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  getHealth() {
    return {
      module: 'chat',
      status: 'ready',
      entities: ['ChatRoom', 'ChatMessage'],
    };
  }
}
