import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderModel {
  @Field(() => Int)
  id: number;

  @Field()
  orderNumber: string;

  @Field(() => Int)
  ticketsPurchased: number;
}
