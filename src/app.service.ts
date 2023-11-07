import { Injectable } from '@nestjs/common';
import { HelloMessage } from './HelloMessage';

@Injectable()
export class AppService {
  getHello(name: string): HelloMessage { 
    const message: HelloMessage = {
      hello: `Hello, ${name}!`,
    };

    return message; // Renvoyez l'objet HelloMessage
  }
}
