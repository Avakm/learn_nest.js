import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middlleware';
import { AllExceptionsFilter } from './common/filter/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //全局中间件
  app.use(logger);
  //全局过滤器
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
