import { Controller, Get, Query } from '@nestjs/common'
import { query } from 'express'
import { AppService } from './app.service';

@Controller('/')
export class AppController {

	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(@Query('a') a: number): string {
		return this.appService.getHello(a);
	}
}
