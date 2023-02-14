import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { isNullableType } from 'graphql';

@InputType()
export class CreateAuthorDto {
  @Field()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsNotEmpty()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  phoneNumber: number;
}
