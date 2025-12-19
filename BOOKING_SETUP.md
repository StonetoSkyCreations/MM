# Booking setup

This site now embeds SimplyBook for online booking and payments.

## Steps
1. Sign in to SimplyBook and configure your services, availability, and payment settings.
2. Copy your public SimplyBook URL (example: `https://mmcounselling.simplybook.net`).
3. Open `booking.html` and, if needed, update the `url` value in the `SimplybookWidget` config with your own link and adjust `theme_settings` to match your palette.
4. If switching to a different provider, replace the embed script block in `booking.html` and update any on-page instructions.

## Payment notes
- Enable payments within SimplyBook so clients can pay during booking.
- Confirm the booking confirmation email includes payment details.

## Fallback contact
- The booking page already includes a call to contact via the contact page if booking is not yet configured.
