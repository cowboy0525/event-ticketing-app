import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  totalTickets: number;

  @Column()
  availableTickets: number;

  @OneToMany(() => Order, (order) => order.event)
  orders: Order[];
}
