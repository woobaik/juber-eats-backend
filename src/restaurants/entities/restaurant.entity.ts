import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;

  @Field((type) => Boolean, { nullable: true })
  isGood?: boolean;

  @Field((type) => String)
  address: string;

  @Field((type) => String)
  owner: string;
}
