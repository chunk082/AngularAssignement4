# AngularApp4 - Event Manager

Angular assignment project for creating and managing events using Angular forms + Angular Material components.

## What This App Includes

- One **reactive form**: `Create Event`
- One **template-driven form**: `RSVP`
- Validation on both forms:
  - required fields
  - minlength / maxlength
  - email format
  - numeric ranges
  - date limits (no past dates)
- Custom validation:
  - async title uniqueness check for event titles
- Angular Material form components:
  - `mat-form-field`
  - `mat-input`
  - `mat-datepicker`
  - `mat-select`
  - `mat-button`
  - plus `mat-checkbox`, `mat-snackbar`, and loading spinner
- Error handling strategy:
  - inline form error messages
  - simulated HTTP/service failures
  - generic error messages via Material snackbar
- Displayed data:
  - Upcoming Events list
  - Recent RSVP submissions list

## Tech Stack

- Angular 21
- Angular Material
- Bootstrap 5 + Bootstrap Icons
- RxJS

## Run Locally

```bash
npm install
ng serve
```

Open: `http://localhost:4200/`

## Build

```bash
ng build
```

## Type Check

```bash
npx tsc -p tsconfig.app.json --noEmit
```

## Test

```bash
ng test
```

## Assignment Mapping (Quick Checklist)

- [x] Template-driven form
- [x] Reactive form
- [x] Validation on all forms
- [x] Custom validation (sync/async)
- [x] Angular Material form UI components
- [x] Error handling with user-friendly messages + snackbar
- [x] Input is collected and displayed in clean UI components
