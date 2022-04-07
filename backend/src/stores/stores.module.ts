import { Module } from '@nestjs/common';
import { StoreResolver } from './stores.resolver';

@Module({
  providers: [StoreResolver],
})
export class StoresModule {}
