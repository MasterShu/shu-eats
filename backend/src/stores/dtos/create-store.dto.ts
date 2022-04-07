import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateStoreDto {
  @Field((type) => String)
  @IsString()
  @Length(1, 255)
  name: string;

  @Field((type) => Boolean)
  @IsBoolean()
  isActive: boolean;

  @Field((type) => Boolean)
  @IsBoolean()
  isVegan: boolean;

  @Field((type) => String)
  @IsString()
  address: string;

  @Field((type) => String)
  @IsString()
  city: string;

  @Field((type) => String)
  @IsString()
  state: string;

  @Field((type) => String)
  @IsString()
  zip: string;

  @Field((type) => String)
  @IsString()
  phone: string;

  @Field((type) => String)
  @IsString()
  website: string;

  @Field((type) => String)
  @IsString()
  email: string;
}
