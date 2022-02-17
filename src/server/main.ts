import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/server/app.module';
import { PORT } from 'src/shared/constants/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
