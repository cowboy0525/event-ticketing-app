import { Resolver, Query } from '@nestjs/graphql';
import { EventService } from './event.service';
import { EventModel } from './event.model';

@Resolver(() => EventModel)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => [EventModel])
  async events() {
    return this.eventService.findAll();
  }
}
