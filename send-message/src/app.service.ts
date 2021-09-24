import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sendMessage } from './Interfaces/sendMessage.interface';

@Injectable()
export class AppService {
  constructor(@InjectModel('sendMessage') private readonly sendMessageItem:Model<sendMessage> ){}


  getHello(): string {
    return 'Hello World!';
  }

  sendMessage(users: sendMessage):Promise<sendMessage> {
    return this.sendMessageItem.create(users);
  }

}
