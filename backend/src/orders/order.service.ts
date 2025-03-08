import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Event } from '../events/event.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  async purchaseTickets(eventId: number, tickets: number): Promise<Order> {
    const event = await this.eventRepository.findOne({ where: { id: eventId } });

    if (!event) throw new NotFoundException('Event not found');
    if (event.availableTickets < tickets) throw new BadRequestException('Not enough tickets available');

    event.availableTickets -= tickets;
    await this.eventRepository.save(event);

    const order = this.orderRepository.create({
      orderNumber: Math.random().toString(36).substr(2, 9),
      event,
      ticketsPurchased: tickets,
    });

    return this.orderRepository.save(order);
  }
}
