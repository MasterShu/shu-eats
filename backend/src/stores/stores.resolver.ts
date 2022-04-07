import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Store, StoreSchema } from './schemas/store.schema';
import * as mongoose from 'mongoose';
import { CreateStoreDto } from './dtos/create-store.dto';

@Resolver((of) => Store)
export class StoreResolver {
  @Query(() => Boolean)
  isActive(): boolean {
    return true;
  }

  @Query(() => Store)
  myStore() {
    return true;
  }

  @Query(() => [Store])
  async stores(@Args('veganOnly') veganOnly: boolean): Promise<StoreSchema[]> {
    console.log('veganOnly', veganOnly);
    return [];
  }

  @Mutation(() => Boolean)
  createStore(@Args() createStoreDto: CreateStoreDto): boolean {
    console.log(createStoreDto);
    return true;
  }
}
