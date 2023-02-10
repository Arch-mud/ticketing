import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@alimtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
