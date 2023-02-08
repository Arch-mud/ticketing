import { Publisher, OrderCreatedEvent, Subjects } from '@alimtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
