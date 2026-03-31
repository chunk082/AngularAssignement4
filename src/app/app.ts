import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { finalize, map, of, switchMap, timer } from 'rxjs';
import { CreateEventPayload, EventItem, EventService, RsvpItem } from './event.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // Services this page uses.
  private readonly fb = inject(FormBuilder);
  private readonly eventService = inject(EventService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly cdr = inject(ChangeDetectorRef);

  // These booleans control loading and submit spinners.
  events: EventItem[] = [];
  rsvps: RsvpItem[] = [];
  isLoadingEvents = false;
  isLoadingRsvps = false;
  isSubmittingEvent = false;
  isSubmittingRsvp = false;
  createEventFormMessage = '';
  rsvpFormMessage = '';

  readonly categories: Array<EventItem['category']> = ['Workshop', 'Meetup', 'Webinar', 'Conference'];

  rsvpModel = {
    name: '',
    email: '',
    eventId: null as number | null,
    attending: true,
    notes: ''
  };

  // Reactive form for creating an event.
  createEventForm = this.fb.nonNullable.group({
    title: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(4)],
      asyncValidators: [this.uniqueTitleValidator()],
      updateOn: 'blur'
    }),
    date: this.fb.control<Date | null>(null, {
      validators: [Validators.required, this.futureDateValidator()]
    }),
    category: this.fb.nonNullable.control<EventItem['category']>('Workshop', {
      validators: [Validators.required]
    }),
    location: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(3)]
    }),
    description: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(300)]
    }),
    maxAttendees: this.fb.nonNullable.control(10, {
      validators: [Validators.required, Validators.min(1), Validators.max(500)]
    })
  });

  ngOnInit(): void {
    // Load events when page starts.
    this.loadEvents();
    this.loadRsvps();
  }

  loadEvents(): void {
    // Get events and show/hide loading spinner.
    this.isLoadingEvents = true;
    this.refreshUi();
    this.eventService
      .getEvents()
      .pipe(
        finalize(() => {
          this.isLoadingEvents = false;
          this.refreshUi();
        })
      )
      .subscribe({
        next: (events) => {
          this.events = events;
          this.refreshUi();
        },
        error: (error: Error) => {
          this.notifyError(error.message || 'Could not load events.');
          this.refreshUi();
        }
      });
  }

  submitCreateEvent(): void {
    // If form is bad, show inline message and stop.
    if (this.createEventForm.invalid) {
      this.createEventForm.markAllAsTouched();
      this.createEventFormMessage = 'Please fix the highlighted fields before creating an event.';
      this.refreshUi();
      return;
    }
    this.createEventFormMessage = '';

    const formValue = this.createEventForm.getRawValue();
    // Clean up values before sending.
    const payload: CreateEventPayload = {
      title: formValue.title.trim(),
      date: this.formatDate(formValue.date),
      category: formValue.category,
      location: formValue.location.trim(),
      description: formValue.description.trim(),
      maxAttendees: formValue.maxAttendees
    };

    this.isSubmittingEvent = true;
    this.refreshUi();
    this.eventService
      .createEvent(payload)
      .pipe(
        finalize(() => {
          this.isSubmittingEvent = false;
          this.refreshUi();
        })
      )
      .subscribe({
        next: () => {
          // On success, reset form and reload list.
          this.snackBar.open('Event created successfully.', 'Dismiss', { duration: 3000 });
          this.createEventFormMessage = '';
          this.createEventForm.reset({
            title: '',
            date: null,
            category: 'Workshop',
            location: '',
            description: '',
            maxAttendees: 10
          });
          this.createEventForm.markAsPristine();
          this.createEventForm.markAsUntouched();
          this.loadEvents();
          this.refreshUi();
        },
        error: (error: Error) => {
          this.notifyError(error.message || 'Could not create event.');
          this.refreshUi();
        }
      });
  }

  submitRsvp(form: NgForm): void {
    // RSVP form check before submit.
    if (form.invalid || this.rsvpModel.eventId === null) {
      form.control.markAllAsTouched();
      this.rsvpFormMessage = 'Please fix the highlighted RSVP fields.';
      this.refreshUi();
      return;
    }
    this.rsvpFormMessage = '';

    this.isSubmittingRsvp = true;
    this.refreshUi();
    this.eventService
      .submitRsvp({
        name: this.rsvpModel.name.trim(),
        email: this.rsvpModel.email.trim(),
        eventId: this.rsvpModel.eventId,
        attending: this.rsvpModel.attending,
        notes: this.rsvpModel.notes.trim()
      })
      .pipe(
        finalize(() => {
          this.isSubmittingRsvp = false;
          this.refreshUi();
        })
      )
      .subscribe({
        next: (result) => {
          this.snackBar.open('RSVP submitted. Confirmation: ' + result.confirmationId, 'Dismiss', {
            duration: 4000
          });
          this.rsvpFormMessage = '';
          form.resetForm({
            name: '',
            email: '',
            eventId: null,
            attending: true,
            notes: ''
          });
          this.loadRsvps();
          this.refreshUi();
        },
        error: (error: Error) => {
          this.notifyError(error.message || 'Could not submit RSVP.');
          this.refreshUi();
        }
      });
  }

  trackByEventId(_: number, event: EventItem): number {
    // Helps Angular track items in the list.
    return event.id;
  }

  trackByRsvpId(_: number, rsvp: RsvpItem): string {
    // Helps Angular track RSVP items in the list.
    return rsvp.confirmationId;
  }

  badgeClass(category: EventItem['category']): string {
    // Gives each category a badge color.
    const mapByCategory: Record<EventItem['category'], string> = {
      Workshop: 'text-bg-primary-subtle text-primary-emphasis',
      Meetup: 'text-bg-success-subtle text-success-emphasis',
      Webinar: 'text-bg-info-subtle text-info-emphasis',
      Conference: 'text-bg-warning-subtle text-warning-emphasis'
    };
    return mapByCategory[category];
  }

  private notifyError(message: string): void {
    // Shows API errors in a top-right snackbar.
    this.snackBar.open(message, 'Dismiss', {
      duration: 4500,
      panelClass: ['error-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'end'
    });
  }

  private loadRsvps(): void {
    // Get RSVP submissions and toggle loading UI.
    this.isLoadingRsvps = true;
    this.refreshUi();
    this.eventService
      .getRsvps()
      .pipe(
        finalize(() => {
          this.isLoadingRsvps = false;
          this.refreshUi();
        })
      )
      .subscribe({
        next: (rsvps) => {
          this.rsvps = rsvps;
          this.refreshUi();
        },
        error: (error: Error) => {
          this.notifyError(error.message || 'Could not load RSVP data.');
          this.refreshUi();
        }
      });
  }

  private uniqueTitleValidator(): AsyncValidatorFn {
    // Checks if title already exists.
    return (control: AbstractControl) => {
      const value = String(control.value ?? '').trim();
      if (value.length < 4) {
        return of(null);
      }

      return timer(200).pipe(
        switchMap(() => this.eventService.isTitleUnique(value)),
        map((isUnique) => (isUnique ? null : ({ titleTaken: true } as ValidationErrors)))
      );
    };
  }

  private futureDateValidator(): ValidatorFn {
    // Blocks past dates.
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const selected = new Date(control.value);
      const today = new Date();
      selected.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      return selected >= today ? null : { pastDate: true };
    };
  }

  private formatDate(date: Date | string | null): string {
    // Converts date to YYYY-MM-DD format.
    if (!date) {
      return '';
    }

    const parsed = new Date(date);
    return parsed.toISOString().slice(0, 10);
  }

  private refreshUi(): void {
    // Refresh UI after async updates.
    this.cdr.detectChanges();
  }
}
