import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle("Rest API")
    .setDescription("Load and View Logs")
    .setVersion("1.0.1-alpha")
    .addTag("logs", "Resources for process load and view logs")    
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  app.enableCors({
    allowedHeaders: "*",
    origin: "*"
  });

  await app.listen(4000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
