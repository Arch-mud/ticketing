import { Subjects, Publisher, PaymentCreatedEvent } from '@alimtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
