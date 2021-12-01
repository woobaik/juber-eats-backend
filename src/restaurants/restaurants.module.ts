import { Module } from '@nestjs/common';
import { RestaurantResolver } from './restaurants.resolver';

@Module({})
export class RestaurantsModule {
  providers: [RestaurantResolver];
}
