import { Body, Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @EventPattern('send_mail')
  getData(@Body() data:any): any {
    // const {name,email} = data.userDto;
    console.log(data)
    return this.appService.sendMessage(data);
  }
}
