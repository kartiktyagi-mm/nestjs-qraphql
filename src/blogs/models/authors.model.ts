import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field(() => Float, { nullable: true })
  phoneNumber?: number;
}
