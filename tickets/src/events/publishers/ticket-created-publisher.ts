import { Publisher, Subjects, TicketCreatedEvent } from '@alimtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
