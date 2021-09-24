import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.RMQ,
  options: {
    urls: ['amqps://bferwlta:pPzUyB_co3nDnLdhsGCc-uP7jX7BKQqo@cattle.rmq2.cloudamqp.com/bferwlta'],
    queue: 'Payment_queue',
    queueOptions: {
      durable: false
    },
  },
});
app.listen();
}
bootstrap();