import {Body, Controller, Post} from '@nestjs/common';
import {AuthenticationService} from "./authentication.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UserRdo} from "./rdo/user.rdo";
import {fillDto} from "../../../../../shared/helpers/src/lib/common";

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService
  ) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillDto(UserRdo, newUser.toPOJO());
  }
}
