import { Publisher, Subjects, TicketUpdatedEvent } from '@alimtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
