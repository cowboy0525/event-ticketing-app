import { DataSource } from 'typeorm';
import { Event } from './src/events/event.entity';
import { Order } from './src/orders/order.entity';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'event_ticketing_db',
  entities: [Event, Order],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  logging: true,
});
