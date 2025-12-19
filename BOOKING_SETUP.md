# Booking setup

This site is set up for a Calendly embed that can handle payments via Stripe. Replace the placeholder link with your live booking URL.

## Steps
1. Sign in to Calendly and create an event type with payments enabled.
2. Copy the share link for the event (for example `https://calendly.com/your-space/50min`).
3. Open `booking.html` and update the `data-src` value on the booking iframe with that link.
4. If using a different provider that supports static embeds, replace the iframe accordingly and adjust any instructions shown on the page.

## Payment notes
- Ensure payments are required for the event in Calendly so clients can pay during booking.
- Confirm the booking confirmation email includes payment details.

## Fallback contact
- The booking page already includes a call to contact via the contact page if booking is not yet configured.
