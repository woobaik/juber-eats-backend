import { ArgsType, InputType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  name: string;
  @Field((type) => Boolean, { nullable: true })
  isGood?: boolean;
  @Field((type) => String)
  address: string;
  @Field((type) => String)
  owner: string;
}
