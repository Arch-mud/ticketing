import { Subjects, Publisher, OrderCancelledEvent } from '@alimtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
