import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {userModule} from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose';
import { keys } from './keys/keys';

@Module({
  imports: [userModule,MongooseModule.forRoot(keys.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
