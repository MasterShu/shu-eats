import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type StoreSchema = Store & Document;

@Schema({ timestamps: true })
@ObjectType({ description: 'Store' })
export class Store {
  @Field(() => String)
  _id: mongoose.Schema.Types.ObjectId;

  @Field(() => String)
  @Prop({ default: '' })
  name: string;

  @Field(() => Boolean)
  @Prop({ default: false, name: 'is_active' })
  isActive: boolean;

  @Field(() => Boolean)
  @Prop({ default: false, name: 'is_vegan' })
  isVegan: boolean;

  @Field(() => String)
  @Prop({ default: '', name: 'address' })
  address: string;

  @Field(() => String)
  @Prop({ default: '', name: 'city' })
  city: string;

  @Field(() => String)
  @Prop({ default: '', name: 'state' })
  state: string;

  @Field(() => String)
  @Prop({ default: '', name: 'zip' })
  zip: string;

  @Field(() => String)
  @Prop({ default: '', name: 'phone' })
  phone: string;

  @Field(() => String)
  @Prop({ default: '', name: 'website' })
  website: string;

  @Field(() => String)
  @Prop({ default: '', name: 'email' })
  email: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
