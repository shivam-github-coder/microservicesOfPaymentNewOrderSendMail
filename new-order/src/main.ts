import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 app.enableCors({
   origin:'http://localhost:4200'
 });
  await app.listen(3002,()=>console.log('New order Created Microservices'));
 
}
bootstrap();