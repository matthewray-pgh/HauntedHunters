# Project Expenses Tracker

This folder tracks all project-related expenses for HauntedHunters.

## Structure

- `2026/` contains monthly CSV logs.
- `summary.md` is a manually maintained roll-up by month/category.

## How to use

1. Add each purchase as one row in the monthly CSV file.
2. Use one of the approved categories below.
3. Update `summary.md` at month-end.

## Approved categories

- Software
- Art Assets
- Audio
- Hardware
- Marketing
- Freelancers
- Research
- Travel
- Misc

## CSV columns

- Date: `YYYY-MM-DD`
- Item: short description
- Category: one category from above
- Vendor: where you bought it
- Amount: positive decimal number, no currency symbol
- Currency: e.g. USD
- Payment Method: card, paypal, etc.
- Project Area: e.g. youtube, gameplay, lore, tools
- Notes: optional extra context

## Notes

- Keep all values in one currency where possible.
- If you must mix currencies, keep `Currency` accurate and add conversion notes in `Notes`.

## Recurring expenses

Log these at the start of each month unless pricing changes:

- MidJourney subscription: 10.00 USD per month (Category: Software)
- GitHub Copilot subscription: 10.00 USD per month (Category: Software)

Monthly recurring baseline: 20.00 USD
