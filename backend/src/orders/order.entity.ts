import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Event } from '../events/event.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderNumber: string;

  @Column()
  ticketsPurchased: number;

  @ManyToOne(() => Event, (event) => event.orders)
  event: Event;
}
