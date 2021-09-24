import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { keys } from './keys/keys';
import { NewOrderSchema } from './schema/NewOrder.Schema';

@Module({
  imports: [MongooseModule.forRoot(keys.mongoURI),MongooseModule.forFeature([{ name: 'Neworder', schema: NewOrderSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
