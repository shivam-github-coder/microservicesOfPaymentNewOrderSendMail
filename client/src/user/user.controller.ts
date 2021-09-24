import { Body, Controller,Delete,Get,Inject,Param,Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService){}
  @Inject('PRODUCT_SERVICE') private readonly client:ClientProxy  

  @Get()
  findAll(): any {
    return this.userService.findAll();
  }

  @Post()
  async CreateOne(@Body() userDto: UserDto){
      if(userDto.price ==( null || undefined || 0))
      {
        return this.userService.create(userDto);
      }
      else{
        const newData = [{...userDto,order:"BreakFast"}]
        await this.client.emit("message_printed",newData)
        await this.client.emit("send_mail",newData)
        return this.userService.PaymentUpdate(userDto);
      }
  }

  @Delete(':id')
  DeleteOne(@Param('id') _id):any{
    return this.userService.DeleteOne(_id);
  }
}

