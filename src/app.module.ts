import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { RestaurantsModule } from './restaurants/restaurants.module';
import { RestaurantResolver } from './restaurants/restaurants.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [RestaurantResolver],
})
export class AppModule {}
