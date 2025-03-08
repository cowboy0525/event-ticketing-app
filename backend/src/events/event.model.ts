import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EventModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  date: Date;

  @Field(() => Int)
  totalTickets: number;

  @Field(() => Int)
  availableTickets: number;
}
