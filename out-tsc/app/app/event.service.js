import { Injectable } from '@angular/core';
import { delay, map, of, throwError } from 'rxjs';
import * as i0 from "@angular/core";
export class EventService {
    nextId = 4;
    events = [
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
    getEvents() {
        return this.simulateSuccess([...this.events]);
    }
    isTitleUnique(title) {
        const normalized = title.trim().toLowerCase();
        const isUnique = this.events.some((event) => event.title.trim().toLowerCase() === normalized) === false;
        return of(isUnique).pipe(delay(350));
    }
    createEvent(payload) {
        const normalized = payload.title.trim().toLowerCase();
        if (this.events.some((event) => event.title.trim().toLowerCase() === normalized)) {
            return throwError(() => new Error('That event title is already taken.')).pipe(delay(300));
        }
        const newEvent = {
            id: this.nextId++,
            ...payload
        };
        return this.simulatePossibleFailure(newEvent, 'Could not save the event. Please try again.').pipe(map((event) => {
            this.events = [event, ...this.events];
            return event;
        }));
    }
    submitRsvp(payload) {
        const eventExists = this.events.some((event) => event.id === payload.eventId);
        if (eventExists === false) {
            return throwError(() => new Error('Selected event is no longer available.')).pipe(delay(300));
        }
        const confirmationId = 'RSVP-' + Math.floor(Math.random() * 90000 + 10000);
        return this.simulatePossibleFailure({ confirmationId }, 'Could not submit RSVP due to a simulated network issue.');
    }
    simulateSuccess(value) {
        const latencyMs = 450 + Math.floor(Math.random() * 350);
        return of(value).pipe(delay(latencyMs));
    }
    simulatePossibleFailure(value, message) {
        const latencyMs = 550 + Math.floor(Math.random() * 450);
        const fail = Math.random() < 0.28;
        if (fail) {
            return throwError(() => new Error(message)).pipe(delay(latencyMs));
        }
        return of(value).pipe(delay(latencyMs));
    }
    futureDate(daysAhead) {
        const date = new Date();
        date.setDate(date.getDate() + daysAhead);
        return date.toISOString().slice(0, 10);
    }
    static ɵfac = function EventService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
