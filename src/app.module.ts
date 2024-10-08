import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/modules/users/users.module';
import { LikesModule } from 'src/modules/likes/likes.module';
import { MenuItemOptionsModule } from 'src/modules/menu.item.options/menu.item.options.module';
import { MenuItemsModule } from 'src/modules/menu.items/menu.items.module';
import { MenusModule } from 'src/modules/menus/menus.module';
import { OrderDetailModule } from 'src/modules/order.detail/order.detail.module';
import { OrdersModule } from 'src/modules/orders/orders.module';
import { RestaurantsModule } from 'src/modules/restaurants/restaurants.module';
import { ReviewsModule } from 'src/modules/reviews/reviews.module';

@Module({
  imports: [
    UsersModule,
    LikesModule,
    MenuItemOptionsModule,
    MenuItemsModule,
    MenusModule,
    OrderDetailModule,
    OrdersModule,
    RestaurantsModule,
    ReviewsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
