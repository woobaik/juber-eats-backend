import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-user.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    // check new user
    // create user & hash the password
    try {
      const exist = await this.users.findOne({ email: email });
      if (exist) {
        // send error message
        return { ok: false, error: 'The email is already in use.' };
      }
      await this.users.save(this.users.create({ email, password, role }));
      return { ok: true };
    } catch (error) {
      console.log('Error', error);
      return {
        ok: false,
        error: "Couldn't create the account at this moment.",
      };
    }
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    try {
      const user = await this.users.findOne({ email });
      if (!user) {
        return {
          ok: false,
          error: 'User not found',
        };
      }

      const passwordCorrect = await user.checkPassword(password, user.password);

      if (!passwordCorrect) {
        return {
          ok: false,
          error: 'Wrong Password',
        };
      }
      return { ok: true, token: 'Lalala' };
    } catch (e) {
      console.log('error message', e);
      return {
        ok: false,
        error: e,
      };
    }
  }
}
