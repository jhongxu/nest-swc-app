import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signIn(username:string, password: string) {
    return ;
  }
  async validateUser(username: string, pass: string): Promise<object> {
    const user = {
      username: 'admin',
      password: 'admin',
    };
    if (user && user.username === username && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
