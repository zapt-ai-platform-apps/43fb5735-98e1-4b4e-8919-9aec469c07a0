# EventEase

A real-time event management platform built with Next.js (JavaScript), custom email/password authentication, and MongoDB. This app supports real-time features via Socket.IO.

Below is a numbered list of user journeys, each linking to its detailed documentation.

1. [Register and Login](docs/journeys/register-and-login.md) - Create an account or login with your existing credentials

2. [Create Event](docs/journeys/create-event.md) - Set up a new event and customize details

3. [View and Manage Events](docs/journeys/view-and-manage-events.md) - See all events, edit or delete events, and view attendee registrations in real-time

4. [Register as Attendee](docs/journeys/register-as-attendee.md) - Join an event as an attendee

5. [Real-time Notifications](docs/journeys/real-time-notifications.md) - Experience live updates for event changes

--------------------------------------------

## External Services

- **Sentry**: Used for error logging and monitoring for both frontend and backend.
- **Progressier**: Used for adding PWA functionality.
- **Umami**: Used for analytics (privacy-focused).
- **MongoDB**: Used to store user, event, and registration data.
- **Socket.IO**: Provides real-time, bidirectional communication.

--------------------------------------------

## Environment Variables

You will need to set the following environment variables in your `.env` file:

1. `MONGODB_URI` - Connection string for MongoDB
2. `JWT_SECRET` - Secret key for JWT signing
3. `VITE_PUBLIC_SENTRY_DSN` - Sentry DSN for error logging
4. `VITE_PUBLIC_APP_ID` - App ID for ZAPT
5. `VITE_PUBLIC_APP_ENV` - Environment name (e.g. development, production)
6. `VITE_PUBLIC_UMAMI_WEBSITE_ID` - Website ID for Umami Analytics

--------------------------------------------

## Installation

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file at the project root and fill in the environment variables
4. Run `npm run dev` to start the development server

--------------------------------------------

## Project Structure

- `pages/` — Next.js pages for routes
- `pages/api/auth/` — API routes for authentication
- `utils/db.js` — MongoDB connection helper
- `styles/globals.css` — Global Tailwind CSS file
- `public/progressier.js` — Service worker for PWA
- `docs/` — Documentation for user journeys

--------------------------------------------

Please read each user journey document for more details on how to use EventEase effectively.