import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { RolesModule } from './modules/roles/roles.module';
import { UsersModule } from './modules/users/users.module';

@Module({
	imports: [
		UsersModule,
		RolesModule,
		ConfigModule.forRoot({
			load: [configuration],
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
