import { Injectable } from '@angular/core';
import { Observable, delay, map, of, throwError } from 'rxjs';

export interface EventItem {
  id: number;
  title: string;
  date: string;
  category: 'Workshop' | 'Meetup' | 'Webinar' | 'Conference';
  location: string;
  description: string;
  maxAttendees: number;
}

export interface CreateEventPayload {
  title: string;
  date: string;
  category: EventItem['category'];
  location: string;
  description: string;
  maxAttendees: number;
}

export interface RsvpPayload {
  name: string;
  email: string;
  eventId: number;
  attending: boolean;
  notes: string;
}

export interface RsvpItem {
  confirmationId: string;
  name: string;
  email: string;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  attending: boolean;
  notes: string;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class EventService {
  private nextId = 4;

  // Fake in-memory data (acts like a backend).
  private events: EventItem[] = [
    {
      id: 1,
      title: 'Angular Fundamentals Night',
      date: this.futureDate(5),
      category: 'Workshop',
      location: 'Campus Lab A',
      description: 'Hands-on Angular forms and component architecture.',
      maxAttendees: 30
    },
    {
      id: 2,
      title: 'Frontend Meetup',
      date: this.futureDate(9),
      category: 'Meetup',
      location: 'Student Center Room 204',
      description: 'Community lightning talks and networking.',
      maxAttendees: 80
    },
    {
      id: 3,
      title: 'RxJS in Practice',
      date: this.futureDate(14),
      category: 'Webinar',
      location: 'Online',
      description: 'Streams, operators, and reactive patterns for apps.',
      maxAttendees: 120
    }
  ];
  private rsvps: RsvpItem[] = [];

  getEvents(): Observable<EventItem[]> {
    // Return a copy so outside code cannot change service data.
    return this.simulateSuccess([...this.events]);
  }

  isTitleUnique(title: string): Observable<boolean> {
    // Used by async validator for title.
    const normalized = title.trim().toLowerCase();
    const isUnique =
      this.events.some((event) => event.title.trim().toLowerCase() === normalized) === false;
    return of(isUnique).pipe(delay(350));
  }

  createEvent(payload: CreateEventPayload): Observable<EventItem> {
    // Extra duplicate check before save.
    const normalized = payload.title.trim().toLowerCase();
    if (this.events.some((event) => event.title.trim().toLowerCase() === normalized)) {
      return throwError(() => new Error('That event title is already taken.')).pipe(delay(300));
    }

    const newEvent: EventItem = {
      id: this.nextId++,
      ...payload
    };

    // Simulate API save and add to list on success.
    return this.simulatePossibleFailure(newEvent, 'Could not save the event. Please try again.').pipe(
      map((event) => {
        this.events = [event, ...this.events];
        return event;
      })
    );
  }

  submitRsvp(payload: RsvpPayload): Observable<{ confirmationId: string }> {
    // Make sure selected event still exists.
    const event = this.events.find((item) => item.id === payload.eventId);
    if (!event) {
      return throwError(() => new Error('Selected event is no longer available.')).pipe(delay(300));
    }

    const confirmationId = 'RSVP-' + Math.floor(Math.random() * 90000 + 10000);
    // Simulate API response (sometimes fails on purpose).
    return this.simulatePossibleFailure<{ confirmationId: string }>(
      { confirmationId },
      'Could not submit RSVP due to a simulated network issue.'
    ).pipe(
      map((result) => {
        this.rsvps = [
          {
            confirmationId: result.confirmationId,
            name: payload.name,
            email: payload.email,
            eventId: payload.eventId,
            eventTitle: event.title,
            eventDate: event.date,
            attending: payload.attending,
            notes: payload.notes,
            createdAt: new Date().toISOString()
          },
          ...this.rsvps
        ];
        return result;
      })
    );
  }

  getRsvps(): Observable<RsvpItem[]> {
    // Return latest RSVP submissions.
    return this.simulateSuccess([...this.rsvps]);
  }

  private simulateSuccess<T>(value: T): Observable<T> {
    // Adds fake network delay.
    const latencyMs = 450 + Math.floor(Math.random() * 350);
    return of(value).pipe(delay(latencyMs));
  }

  private simulatePossibleFailure<T>(value: T, message: string): Observable<T> {
    // Randomly fail some requests to test error handling.
    const latencyMs = 550 + Math.floor(Math.random() * 450);
    const fail = Math.random() < 0.28;

    if (fail) {
      return throwError(() => new Error(message)).pipe(delay(latencyMs));
    }

    return of(value).pipe(delay(latencyMs));
  }

  private futureDate(daysAhead: number): string {
    // Helper to make future dates for sample events.
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    return date.toISOString().slice(0, 10);
  }
}
