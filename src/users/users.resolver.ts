import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-user.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query((returns) => Boolean)
  test() {
    return true;
  }

  @Mutation((returns) => CreateAccountOutput)
  async createAccount(
    @Args('input') createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    try {
      const { ok, error } = await this.userService.createAccount(
        createAccountInput,
      );
      return {
        ok,
        error,
      };
    } catch (e) {
      return {
        error: e,
        ok: false,
      };
    }
  }

  @Mutation((returns) => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      const { ok, error, token } = await this.userService.login(loginInput);
      return {
        ok,
        error,
        token,
      };
    } catch (e) {
      return {
        error: e,
        ok: false,
      };
    }
  }
}
