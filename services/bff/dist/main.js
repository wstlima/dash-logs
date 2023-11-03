"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    const options = new swagger_1.DocumentBuilder()
        .setTitle("Rest API")
        .setDescription("Load and View Logs")
        .setVersion("1.0.1-alpha")
        .addTag("logs", "Resources for process load and view logs")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.enableCors({
        allowedHeaders: "*",
        origin: "*"
    });
    await app.listen(4000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
