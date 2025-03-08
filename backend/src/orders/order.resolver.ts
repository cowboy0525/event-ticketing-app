import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderModel } from './order.model';

@Resolver(() => OrderModel)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => OrderModel)
  async purchaseTickets(
    @Args('eventId') eventId: number,
    @Args('tickets') tickets: number,
  ) {
    return this.orderService.purchaseTickets(eventId, tickets);
  }
}
