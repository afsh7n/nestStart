import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreModule } from "./core/core.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  CoreModule.configureSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
