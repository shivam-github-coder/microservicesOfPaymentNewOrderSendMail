import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { keys } from './keys/keys';
import { sendMessageSchema } from './schema/sendMessage.Schema';

@Module({
  imports: [MongooseModule.forRoot(keys.mongoURI),MongooseModule.forFeature([{ name: 'sendMessage', schema: sendMessageSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
