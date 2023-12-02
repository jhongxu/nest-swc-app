import { VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication, } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { TransformInterceptor } from './common/interceptor/transform/transform.interceptor'

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({ logger: true }),
	);

	app.useGlobalInterceptors(new TransformInterceptor())
	// 版本控制
	app.enableVersioning({
		defaultVersion: '1',
		type: VersioningType.URI,
	});
	app.setGlobalPrefix('api')

	const configService = app.get(ConfigService);
	const port = configService.get<number>('http.port');
	const host = configService.get<string>('http.host');
	await app.listen(port, host);
}
bootstrap().then((r) => {
	console.log('服务启动～～～');
});
