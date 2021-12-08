import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MutationOutputDto } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';

@InputType({ isAbstract: true })
@ObjectType()
export class LoginInput extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class LoginOutput extends MutationOutputDto {
  @Field((type) => String, { nullable: true })
  token?: string;
}
