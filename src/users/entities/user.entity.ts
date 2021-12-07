import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Core } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

type UserRole = 'Delivery' | 'Restaurant' | 'Client';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User extends Core {
  @Column()
  @Field((type) => String)
  email: string;

  @Column()
  @Field((type) => String)
  password: string;

  @Column()
  @Field((type) => String)
  role: UserRole;
}
