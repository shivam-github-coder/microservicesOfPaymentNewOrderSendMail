import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {user} from '../Interfaces/user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel('Client') private readonly userItem:Model<user> ){}

    create(users: user):Promise<user> {
      return this.userItem.create(users);
    }
  
    async findAll(): Promise<user[]> {
      return await this.userItem.find({});
    }

    async DeleteOne(_id:Number): Promise<user> {
      console.log(_id)
      return await this.userItem.findByIdAndRemove({_id})
    }

    PaymentUpdate(users: user):any {
      return this.userItem.updateOne({name:users.name},users);
    }
}