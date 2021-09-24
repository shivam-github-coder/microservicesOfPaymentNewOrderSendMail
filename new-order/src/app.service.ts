import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewOrder } from './Interfaces/NewOrder.interface';

@Injectable()
export class AppService {
  constructor(@InjectModel('Neworder') private readonly NeworderItem:Model<NewOrder> ){}

  getHello(): string {
    return 'Hello World!';
  }

  CreateNewOrder(users: NewOrder):Promise<NewOrder> {
    return this.NeworderItem.create(users);
  }
}
