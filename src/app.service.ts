import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	private counter = 0;
	getHello(_a:number): string {
		const a =1;
		const b = 2;
		const sum = this.getSum(a,b)
		this.counter ++;
		return `Hello World! ${sum} - ${this.counter} - ${_a}`;
	}

	getSum(a:number,b:number){
		return  a+b
	}
}
