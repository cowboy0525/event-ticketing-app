import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { Event } from '../events/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Event])],
  providers: [OrderService, OrderResolver],
  exports: [OrderService],
})
export class OrderModule {}
