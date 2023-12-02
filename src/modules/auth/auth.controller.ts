import { AuthService } from '@/modules/auth/auth.service'
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  constructor(private  authService: AuthService) {
  }
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  signIn(@Body() signInDto :Record<string, unknown> ){
// this.authService
    return '登陆成功'
  }
}
