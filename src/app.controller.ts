import { Controller, Get, Param } from '@nestjs/common';
import { HelloMessage } from './HelloMessage'; // Importez l'interface HelloMessage
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:name')
  getHello(@Param('name') name: string): HelloMessage { // Modifiez le type de retour pour renvoyer un HelloMessage
    return this.appService.getHello(name); // Renvoyez l'objet HelloMessage
  }
}
