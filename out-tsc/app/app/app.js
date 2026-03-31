import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { finalize, map, of, switchMap, timer } from 'rxjs';
import { EventService } from './event.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/card";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/datepicker";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/input";
import * as i10 from "@angular/material/list";
import * as i11 from "@angular/material/progress-spinner";
import * as i12 from "@angular/material/select";
function App_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Title is required. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Title must be at least 4 characters. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " This title already exists. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Date is required. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Date must be today or in the future. ");
    i0.ɵɵelementEnd();
} }
function App_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", category_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", category_r2, " ");
} }
function App_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Location is required. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Location must be at least 3 characters. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Description is required. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Description must be at least 10 characters. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Description cannot exceed 300 characters. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Max attendees is required. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Value must be between 1 and 500. ");
    i0.ɵɵelementEnd();
} }
function App_span_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Create Event");
    i0.ɵɵelementEnd();
} }
function App_span_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Saving...");
    i0.ɵɵelementEnd();
} }
function App_mat_error_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Name is required. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Name must be at least 2 characters. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Email is required. ");
    i0.ɵɵelementEnd();
} }
function App_mat_error_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Enter a valid email address. ");
    i0.ɵɵelementEnd();
} }
function App_mat_option_91_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", event_r4.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", event_r4.title, " - ", event_r4.date, " ");
} }
function App_mat_error_92_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Please select an event. ");
    i0.ɵɵelementEnd();
} }
function App_span_102_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Submit RSVP");
    i0.ɵɵelementEnd();
} }
function App_span_103_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Submitting...");
    i0.ɵɵelementEnd();
} }
function App_div_113_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelement(1, "mat-spinner", 42);
    i0.ɵɵelementEnd();
} }
function App_mat_list_114_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item")(1, "div", 44);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 45);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 46);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const event_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate4(" ", event_r5.date, " | ", event_r5.category, " | ", event_r5.location, " | Capacity: ", event_r5.maxAttendees, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r5.description);
} }
function App_mat_list_114_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵtemplate(1, App_mat_list_114_mat_list_item_1_Template, 7, 6, "mat-list-item", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r5.events)("ngForTrackBy", ctx_r5.trackByEventId);
} }
function App_p_115_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1, " No events found. ");
    i0.ɵɵelementEnd();
} }
export class App {
    fb = inject(FormBuilder);
    eventService = inject(EventService);
    snackBar = inject(MatSnackBar);
    events = [];
    isLoadingEvents = false;
    isSubmittingEvent = false;
    isSubmittingRsvp = false;
    categories = ['Workshop', 'Meetup', 'Webinar', 'Conference'];
    rsvpModel = {
        name: '',
        email: '',
        eventId: null,
        attending: true,
        notes: ''
    };
    createEventForm = this.fb.nonNullable.group({
        title: this.fb.nonNullable.control('', {
            validators: [Validators.required, Validators.minLength(4)],
            asyncValidators: [this.uniqueTitleValidator()],
            updateOn: 'blur'
        }),
        date: this.fb.control(null, {
            validators: [Validators.required, this.futureDateValidator()]
        }),
        category: this.fb.nonNullable.control('Workshop', {
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
    ngOnInit() {
        this.loadEvents();
    }
    loadEvents() {
        this.isLoadingEvents = true;
        this.eventService
            .getEvents()
            .pipe(finalize(() => (this.isLoadingEvents = false)))
            .subscribe({
            next: (events) => {
                this.events = events;
            },
            error: (error) => {
                this.notifyError(error.message || 'Could not load events.');
            }
        });
    }
    submitCreateEvent() {
        if (this.createEventForm.invalid) {
            this.createEventForm.markAllAsTouched();
            this.notifyError('Please correct the form errors before creating an event.');
            return;
        }
        const formValue = this.createEventForm.getRawValue();
        const payload = {
            title: formValue.title.trim(),
            date: this.formatDate(formValue.date),
            category: formValue.category,
            location: formValue.location.trim(),
            description: formValue.description.trim(),
            maxAttendees: formValue.maxAttendees
        };
        this.isSubmittingEvent = true;
        this.eventService
            .createEvent(payload)
            .pipe(finalize(() => (this.isSubmittingEvent = false)))
            .subscribe({
            next: () => {
                this.snackBar.open('Event created successfully.', 'Dismiss', { duration: 3000 });
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
            },
            error: (error) => {
                this.notifyError(error.message || 'Could not create event.');
            }
        });
    }
    submitRsvp(form) {
        if (form.invalid || this.rsvpModel.eventId === null) {
            form.control.markAllAsTouched();
            this.notifyError('Please complete all RSVP fields correctly.');
            return;
        }
        this.isSubmittingRsvp = true;
        this.eventService
            .submitRsvp({
            name: this.rsvpModel.name.trim(),
            email: this.rsvpModel.email.trim(),
            eventId: this.rsvpModel.eventId,
            attending: this.rsvpModel.attending,
            notes: this.rsvpModel.notes.trim()
        })
            .pipe(finalize(() => (this.isSubmittingRsvp = false)))
            .subscribe({
            next: (result) => {
                this.snackBar.open('RSVP submitted. Confirmation: ' + result.confirmationId, 'Dismiss', {
                    duration: 4000
                });
                form.resetForm({
                    name: '',
                    email: '',
                    eventId: null,
                    attending: true,
                    notes: ''
                });
            },
            error: (error) => {
                this.notifyError(error.message || 'Could not submit RSVP.');
            }
        });
    }
    trackByEventId(_, event) {
        return event.id;
    }
    notifyError(message) {
        this.snackBar.open(message, 'Dismiss', {
            duration: 4500,
            panelClass: ['error-snackbar']
        });
    }
    uniqueTitleValidator() {
        return (control) => {
            const value = String(control.value ?? '').trim();
            if (value.length < 4) {
                return of(null);
            }
            return timer(200).pipe(switchMap(() => this.eventService.isTitleUnique(value)), map((isUnique) => (isUnique ? null : { titleTaken: true })));
        };
    }
    futureDateValidator() {
        return (control) => {
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
    formatDate(date) {
        if (!date) {
            return '';
        }
        const parsed = new Date(date);
        return parsed.toISOString().slice(0, 10);
    }
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 116, vars: 38, consts: [["picker", ""], ["rsvpForm", "ngForm"], ["nameModel", "ngModel"], ["emailModel", "ngModel"], ["eventModel", "ngModel"], [1, "container", "py-4", "py-md-5", "app-shell"], [1, "mb-4"], [1, "app-title", "mb-1"], [1, "text-secondary", "mb-0"], [1, "row", "g-4"], [1, "col-lg-6"], [1, "h-100"], [1, "form-grid", "mt-3", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "title"], [4, "ngIf"], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["formControlName", "category"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "location"], ["appearance", "outline", 1, "span-2"], ["matInput", "", "rows", "3", "formControlName", "description"], ["align", "end"], ["matInput", "", "type", "number", "formControlName", "maxAttendees"], [1, "span-2"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "form-grid", "mt-3", 3, "ngSubmit"], ["matInput", "", "name", "name", "required", "", "minlength", "2", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "email", "name", "email", "required", "", "email", "", 3, "ngModelChange", "ngModel"], ["name", "eventId", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["name", "attending", 3, "ngModelChange", "ngModel"], ["matInput", "", "rows", "3", "name", "notes", 3, "ngModelChange", "ngModel"], ["mat-stroked-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "mt-4"], [1, "d-flex", "align-items-center", "gap-2"], [1, "pt-2"], ["class", "d-flex justify-content-center py-4", 4, "ngIf"], ["class", "text-secondary mb-0", 4, "ngIf"], [3, "value"], [1, "d-flex", "justify-content-center", "py-4"], ["diameter", "36"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matListItemTitle", ""], ["matListItemLine", ""], ["matListItemLine", "", 1, "text-muted"]], template: function App_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 5)(1, "header", 6)(2, "h1", 7);
            i0.ɵɵtext(3, "Event Manager");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 8);
            i0.ɵɵtext(5, " Create events, validate user input, collect RSVPs, and handle simulated API errors with Angular Material feedback. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 9)(7, "div", 10)(8, "mat-card", 11)(9, "mat-card-header")(10, "mat-card-title");
            i0.ɵɵtext(11, "Create Event (Reactive Form)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-card-subtitle");
            i0.ɵɵtext(13, "Includes async title validation and date constraints.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "mat-card-content")(15, "form", 12);
            i0.ɵɵlistener("ngSubmit", function App_Template_form_ngSubmit_15_listener() { return ctx.submitCreateEvent(); });
            i0.ɵɵelementStart(16, "mat-form-field", 13)(17, "mat-label");
            i0.ɵɵtext(18, "Event Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "input", 14);
            i0.ɵɵtemplate(20, App_mat_error_20_Template, 2, 0, "mat-error", 15)(21, App_mat_error_21_Template, 2, 0, "mat-error", 15)(22, App_mat_error_22_Template, 2, 0, "mat-error", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-form-field", 13)(24, "mat-label");
            i0.ɵɵtext(25, "Event Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "input", 16)(27, "mat-datepicker-toggle", 17)(28, "mat-datepicker", null, 0);
            i0.ɵɵtemplate(30, App_mat_error_30_Template, 2, 0, "mat-error", 15)(31, App_mat_error_31_Template, 2, 0, "mat-error", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "mat-form-field", 13)(33, "mat-label");
            i0.ɵɵtext(34, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "mat-select", 18);
            i0.ɵɵtemplate(36, App_mat_option_36_Template, 2, 2, "mat-option", 19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "mat-form-field", 13)(38, "mat-label");
            i0.ɵɵtext(39, "Location");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(40, "input", 20);
            i0.ɵɵtemplate(41, App_mat_error_41_Template, 2, 0, "mat-error", 15)(42, App_mat_error_42_Template, 2, 0, "mat-error", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "mat-form-field", 21)(44, "mat-label");
            i0.ɵɵtext(45, "Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(46, "textarea", 22);
            i0.ɵɵelementStart(47, "mat-hint", 23);
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(49, App_mat_error_49_Template, 2, 0, "mat-error", 15)(50, App_mat_error_50_Template, 2, 0, "mat-error", 15)(51, App_mat_error_51_Template, 2, 0, "mat-error", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "mat-form-field", 13)(53, "mat-label");
            i0.ɵɵtext(54, "Max Attendees");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(55, "input", 24);
            i0.ɵɵtemplate(56, App_mat_error_56_Template, 2, 0, "mat-error", 15)(57, App_mat_error_57_Template, 2, 0, "mat-error", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div", 25)(59, "button", 26);
            i0.ɵɵtemplate(60, App_span_60_Template, 2, 0, "span", 15)(61, App_span_61_Template, 2, 0, "span", 15);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(62, "div", 10)(63, "mat-card", 11)(64, "mat-card-header")(65, "mat-card-title");
            i0.ɵɵtext(66, "RSVP (Template-Driven Form)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "mat-card-subtitle");
            i0.ɵɵtext(68, "Collect attendee response with field-level validation.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "mat-card-content")(70, "form", 27, 1);
            i0.ɵɵlistener("ngSubmit", function App_Template_form_ngSubmit_70_listener() { i0.ɵɵrestoreView(_r1); const rsvpForm_r3 = i0.ɵɵreference(71); return i0.ɵɵresetView(ctx.submitRsvp(rsvpForm_r3)); });
            i0.ɵɵelementStart(72, "mat-form-field", 13)(73, "mat-label");
            i0.ɵɵtext(74, "Full Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "input", 28, 2);
            i0.ɵɵtwoWayListener("ngModelChange", function App_Template_input_ngModelChange_75_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.rsvpModel.name, $event) || (ctx.rsvpModel.name = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(77, App_mat_error_77_Template, 2, 0, "mat-error", 15)(78, App_mat_error_78_Template, 2, 0, "mat-error", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "mat-form-field", 13)(80, "mat-label");
            i0.ɵɵtext(81, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "input", 29, 3);
            i0.ɵɵtwoWayListener("ngModelChange", function App_Template_input_ngModelChange_82_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.rsvpModel.email, $event) || (ctx.rsvpModel.email = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(84, App_mat_error_84_Template, 2, 0, "mat-error", 15)(85, App_mat_error_85_Template, 2, 0, "mat-error", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "mat-form-field", 21)(87, "mat-label");
            i0.ɵɵtext(88, "Event");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "mat-select", 30, 4);
            i0.ɵɵtwoWayListener("ngModelChange", function App_Template_mat_select_ngModelChange_89_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.rsvpModel.eventId, $event) || (ctx.rsvpModel.eventId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(91, App_mat_option_91_Template, 2, 3, "mat-option", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(92, App_mat_error_92_Template, 2, 0, "mat-error", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "div", 25)(94, "mat-checkbox", 32);
            i0.ɵɵtwoWayListener("ngModelChange", function App_Template_mat_checkbox_ngModelChange_94_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.rsvpModel.attending, $event) || (ctx.rsvpModel.attending = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtext(95, " I plan to attend ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(96, "mat-form-field", 21)(97, "mat-label");
            i0.ɵɵtext(98, "Notes (optional)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "textarea", 33);
            i0.ɵɵtwoWayListener("ngModelChange", function App_Template_textarea_ngModelChange_99_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.rsvpModel.notes, $event) || (ctx.rsvpModel.notes = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(100, "div", 25)(101, "button", 34);
            i0.ɵɵtemplate(102, App_span_102_Template, 2, 0, "span", 15)(103, App_span_103_Template, 2, 0, "span", 15);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(104, "mat-card", 35)(105, "mat-card-header")(106, "mat-card-title", 36)(107, "mat-icon");
            i0.ɵɵtext(108, "event");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(109, " Upcoming Events ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "mat-card-subtitle");
            i0.ɵɵtext(111, "Created events are listed here after successful saves.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(112, "mat-card-content", 37);
            i0.ɵɵtemplate(113, App_div_113_Template, 2, 0, "div", 38)(114, App_mat_list_114_Template, 2, 2, "mat-list", 15)(115, App_p_115_Template, 2, 0, "p", 39);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const picker_r7 = i0.ɵɵreference(29);
            const nameModel_r8 = i0.ɵɵreference(76);
            const emailModel_r9 = i0.ɵɵreference(83);
            const eventModel_r10 = i0.ɵɵreference(90);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("formGroup", ctx.createEventForm);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.title.hasError("required"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.title.hasError("minlength"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.title.hasError("titleTaken"));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("matDatepicker", picker_r7);
            i0.ɵɵadvance();
            i0.ɵɵproperty("for", picker_r7);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.date.hasError("required"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.date.hasError("pastDate"));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.location.hasError("required"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.location.hasError("minlength"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.createEventForm.controls.description.value.length, "/300 ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.description.hasError("required"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.description.hasError("minlength"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.description.hasError("maxlength"));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.maxAttendees.hasError("required"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.createEventForm.controls.maxAttendees.hasError("min") || ctx.createEventForm.controls.maxAttendees.hasError("max"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isSubmittingEvent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isSubmittingEvent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isSubmittingEvent);
            i0.ɵɵadvance(14);
            i0.ɵɵtwoWayProperty("ngModel", ctx.rsvpModel.name);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", (nameModel_r8.errors == null ? null : nameModel_r8.errors["required"]) && nameModel_r8.touched);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (nameModel_r8.errors == null ? null : nameModel_r8.errors["minlength"]) && nameModel_r8.touched);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.rsvpModel.email);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", (emailModel_r9.errors == null ? null : emailModel_r9.errors["required"]) && emailModel_r9.touched);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (emailModel_r9.errors == null ? null : emailModel_r9.errors["email"]) && emailModel_r9.touched);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.rsvpModel.eventId);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.events)("ngForTrackBy", ctx.trackByEventId);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (eventModel_r10.errors == null ? null : eventModel_r10.errors["required"]) && eventModel_r10.touched);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.rsvpModel.attending);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.rsvpModel.notes);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isSubmittingRsvp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isSubmittingRsvp);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isSubmittingRsvp);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngIf", ctx.isLoadingEvents);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isLoadingEvents && ctx.events.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isLoadingEvents && ctx.events.length === 0);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.EmailValidator, i2.NgModel, i2.NgForm, ReactiveFormsModule, i2.FormGroupDirective, i2.FormControlName, MatButtonModule, i3.MatButton, MatCardModule, i4.MatCard, i4.MatCardContent, i4.MatCardHeader, i4.MatCardSubtitle, i4.MatCardTitle, MatCheckboxModule, i5.MatCheckbox, MatDatepickerModule, i6.MatDatepicker, i6.MatDatepickerInput, i6.MatDatepickerToggle, MatFormFieldModule, i7.MatFormField, i7.MatLabel, i7.MatHint, i7.MatError, i7.MatSuffix, MatIconModule, i8.MatIcon, MatInputModule, i9.MatInput, MatListModule, i10.MatList, i10.MatListItem, i10.MatListItemLine, i10.MatListItemTitle, MatNativeDateModule,
            MatProgressSpinnerModule, i11.MatProgressSpinner, MatSelectModule, i12.MatSelect, i12.MatOption, MatSnackBarModule], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n\n.app-shell[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #1f2a44;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n\n.span-2[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  border: 1px solid #d8e1f3;\n  box-shadow: 0 10px 24px rgba(26, 53, 102, 0.08);\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .error-snackbar .mat-mdc-snack-bar-label {\n  color: #fff7f7;\n}\n\n  .error-snackbar {\n  --mdc-snackbar-container-color: #9d1d1d;\n}\n\n@media (max-width: 991px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .span-2[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatButtonModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatDatepickerModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatNativeDateModule,
                    MatProgressSpinnerModule,
                    MatSelectModule,
                    MatSnackBarModule
                ], template: "<div class=\"container py-4 py-md-5 app-shell\">\n  <header class=\"mb-4\">\n    <h1 class=\"app-title mb-1\">Event Manager</h1>\n    <p class=\"text-secondary mb-0\">\n      Create events, validate user input, collect RSVPs, and handle simulated API errors with Angular Material feedback.\n    </p>\n  </header>\n\n  <div class=\"row g-4\">\n    <div class=\"col-lg-6\">\n      <mat-card class=\"h-100\">\n        <mat-card-header>\n          <mat-card-title>Create Event (Reactive Form)</mat-card-title>\n          <mat-card-subtitle>Includes async title validation and date constraints.</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <form class=\"form-grid mt-3\" [formGroup]=\"createEventForm\" (ngSubmit)=\"submitCreateEvent()\">\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Event Title</mat-label>\n              <input matInput formControlName=\"title\" />\n              <mat-error *ngIf=\"createEventForm.controls.title.hasError('required')\">\n                Title is required.\n              </mat-error>\n              <mat-error *ngIf=\"createEventForm.controls.title.hasError('minlength')\">\n                Title must be at least 4 characters.\n              </mat-error>\n              <mat-error *ngIf=\"createEventForm.controls.title.hasError('titleTaken')\">\n                This title already exists.\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Event Date</mat-label>\n              <input matInput [matDatepicker]=\"picker\" formControlName=\"date\" />\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n              <mat-error *ngIf=\"createEventForm.controls.date.hasError('required')\">\n                Date is required.\n              </mat-error>\n              <mat-error *ngIf=\"createEventForm.controls.date.hasError('pastDate')\">\n                Date must be today or in the future.\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Category</mat-label>\n              <mat-select formControlName=\"category\">\n                <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n                  {{ category }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Location</mat-label>\n              <input matInput formControlName=\"location\" />\n              <mat-error *ngIf=\"createEventForm.controls.location.hasError('required')\">\n                Location is required.\n              </mat-error>\n              <mat-error *ngIf=\"createEventForm.controls.location.hasError('minlength')\">\n                Location must be at least 3 characters.\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" class=\"span-2\">\n              <mat-label>Description</mat-label>\n              <textarea matInput rows=\"3\" formControlName=\"description\"></textarea>\n              <mat-hint align=\"end\">\n                {{ createEventForm.controls.description.value.length }}/300\n              </mat-hint>\n              <mat-error *ngIf=\"createEventForm.controls.description.hasError('required')\">\n                Description is required.\n              </mat-error>\n              <mat-error *ngIf=\"createEventForm.controls.description.hasError('minlength')\">\n                Description must be at least 10 characters.\n              </mat-error>\n              <mat-error *ngIf=\"createEventForm.controls.description.hasError('maxlength')\">\n                Description cannot exceed 300 characters.\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Max Attendees</mat-label>\n              <input matInput type=\"number\" formControlName=\"maxAttendees\" />\n              <mat-error *ngIf=\"createEventForm.controls.maxAttendees.hasError('required')\">\n                Max attendees is required.\n              </mat-error>\n              <mat-error\n                *ngIf=\"\n                  createEventForm.controls.maxAttendees.hasError('min') ||\n                  createEventForm.controls.maxAttendees.hasError('max')\n                \"\n              >\n                Value must be between 1 and 500.\n              </mat-error>\n            </mat-form-field>\n\n            <div class=\"span-2\">\n              <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"isSubmittingEvent\">\n                <span *ngIf=\"!isSubmittingEvent\">Create Event</span>\n                <span *ngIf=\"isSubmittingEvent\">Saving...</span>\n              </button>\n            </div>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n    <div class=\"col-lg-6\">\n      <mat-card class=\"h-100\">\n        <mat-card-header>\n          <mat-card-title>RSVP (Template-Driven Form)</mat-card-title>\n          <mat-card-subtitle>Collect attendee response with field-level validation.</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <form #rsvpForm=\"ngForm\" class=\"form-grid mt-3\" (ngSubmit)=\"submitRsvp(rsvpForm)\">\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Full Name</mat-label>\n              <input\n                matInput\n                name=\"name\"\n                [(ngModel)]=\"rsvpModel.name\"\n                required\n                minlength=\"2\"\n                #nameModel=\"ngModel\"\n              />\n              <mat-error *ngIf=\"nameModel.errors?.['required'] && nameModel.touched\">\n                Name is required.\n              </mat-error>\n              <mat-error *ngIf=\"nameModel.errors?.['minlength'] && nameModel.touched\">\n                Name must be at least 2 characters.\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Email</mat-label>\n              <input\n                matInput\n                type=\"email\"\n                name=\"email\"\n                [(ngModel)]=\"rsvpModel.email\"\n                required\n                email\n                #emailModel=\"ngModel\"\n              />\n              <mat-error *ngIf=\"emailModel.errors?.['required'] && emailModel.touched\">\n                Email is required.\n              </mat-error>\n              <mat-error *ngIf=\"emailModel.errors?.['email'] && emailModel.touched\">\n                Enter a valid email address.\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" class=\"span-2\">\n              <mat-label>Event</mat-label>\n              <mat-select\n                name=\"eventId\"\n                [(ngModel)]=\"rsvpModel.eventId\"\n                required\n                #eventModel=\"ngModel\"\n              >\n                <mat-option *ngFor=\"let event of events; trackBy: trackByEventId\" [value]=\"event.id\">\n                  {{ event.title }} - {{ event.date }}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"eventModel.errors?.['required'] && eventModel.touched\">\n                Please select an event.\n              </mat-error>\n            </mat-form-field>\n\n            <div class=\"span-2\">\n              <mat-checkbox name=\"attending\" [(ngModel)]=\"rsvpModel.attending\">\n                I plan to attend\n              </mat-checkbox>\n            </div>\n\n            <mat-form-field appearance=\"outline\" class=\"span-2\">\n              <mat-label>Notes (optional)</mat-label>\n              <textarea matInput rows=\"3\" name=\"notes\" [(ngModel)]=\"rsvpModel.notes\"></textarea>\n            </mat-form-field>\n\n            <div class=\"span-2\">\n              <button mat-stroked-button color=\"primary\" type=\"submit\" [disabled]=\"isSubmittingRsvp\">\n                <span *ngIf=\"!isSubmittingRsvp\">Submit RSVP</span>\n                <span *ngIf=\"isSubmittingRsvp\">Submitting...</span>\n              </button>\n            </div>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n\n  <mat-card class=\"mt-4\">\n    <mat-card-header>\n      <mat-card-title class=\"d-flex align-items-center gap-2\">\n        <mat-icon>event</mat-icon>\n        Upcoming Events\n      </mat-card-title>\n      <mat-card-subtitle>Created events are listed here after successful saves.</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content class=\"pt-2\">\n      <div class=\"d-flex justify-content-center py-4\" *ngIf=\"isLoadingEvents\">\n        <mat-spinner diameter=\"36\"></mat-spinner>\n      </div>\n\n      <mat-list *ngIf=\"!isLoadingEvents && events.length > 0\">\n        <mat-list-item *ngFor=\"let event of events; trackBy: trackByEventId\">\n          <div matListItemTitle>{{ event.title }}</div>\n          <div matListItemLine>\n            {{ event.date }} | {{ event.category }} | {{ event.location }} | Capacity:\n            {{ event.maxAttendees }}\n          </div>\n          <div matListItemLine class=\"text-muted\">{{ event.description }}</div>\n        </mat-list-item>\n      </mat-list>\n\n      <p class=\"text-secondary mb-0\" *ngIf=\"!isLoadingEvents && events.length === 0\">\n        No events found.\n      </p>\n    </mat-card-content>\n  </mat-card>\n</div>\n", styles: [":host {\n  display: block;\n  min-height: 100vh;\n}\n\n.app-shell {\n  max-width: 1200px;\n}\n\n.app-title {\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: #1f2a44;\n}\n\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n\n.span-2 {\n  grid-column: 1 / -1;\n}\n\nmat-card {\n  border: 1px solid #d8e1f3;\n  box-shadow: 0 10px 24px rgba(26, 53, 102, 0.08);\n}\n\nmat-form-field {\n  width: 100%;\n}\n\n::ng-deep .error-snackbar .mat-mdc-snack-bar-label {\n  color: #fff7f7;\n}\n\n::ng-deep .error-snackbar {\n  --mdc-snackbar-container-color: #9d1d1d;\n}\n\n@media (max-width: 991px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .span-2 {\n    grid-column: auto;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 51 }); })();
