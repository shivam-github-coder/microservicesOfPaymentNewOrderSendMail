import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {userSchema} from '../schema/user.Schema'
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Client', schema: userSchema }]),
  ClientsModule.register([
    {
      name: 'PRODUCT_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://bferwlta:pPzUyB_co3nDnLdhsGCc-uP7jX7BKQqo@cattle.rmq2.cloudamqp.com/bferwlta'],
        queue: 'Payment_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ]),],
  controllers: [ UserController],
  providers: [ UserService],
})
export class userModule {}
