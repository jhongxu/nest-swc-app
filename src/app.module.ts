import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';

@Module({
	imports: [UsersModule, RolesModule,ConfigModule.forRoot({
		load: [configuration]
	})],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
