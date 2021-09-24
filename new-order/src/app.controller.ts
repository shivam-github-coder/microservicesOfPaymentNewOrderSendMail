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
  @EventPattern('message_printed')
  getData(@Body() data:any): any {
    // const {name} = data.userDto;
    // console.log(`Successfully Ordered ${data.Order} of Mr.${name} `)
    console.log(data)
    return this.appService.CreateNewOrder(data);
  }
}
