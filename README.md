# FarmLog Hub

Prompt for Lovable

Paste everything below into Lovable to build the app.

Build a mobile-friendly farm record-keeping web app for a small home-based mixed farm (crops, land, animals, birds, and vegetable sales). Use a clean, simple design with a green/earthy color palette. Include a persistent database (use Supabase) so all records are saved and can be edited or deleted later. Single user, simple login (email/password).

Overview / Navigation

A dashboard with a sidebar or bottom nav (mobile) linking to these sections:

Dashboard (summary)

Spraying Schedule

Daily Activities

Animal Treatment Schedule

Bird Treatment Schedule

Harvest Log

Sales Log

Crop Balance (auto-calculated summary)

Each log section should show existing records in a sortable/filterable table (newest first by default, filter by date range and by crop/animal name), with an "Add Record" button that opens a form. Every row should be editable and deletable.

1. Spraying Schedule

Fields: Date, Crop, Field/Plot, Product Used, Reason (dropdown: Pest / Disease / Weed / Preventive), Dosage/Rate, Quantity Mixed, Sprayed By, Weather Conditions, Re-entry/Pre-harvest Interval, Next Due Date, Remarks.

Highlight rows where Next Due Date is within the next 7 days.

2. Daily Activities

Fields: Date, Activity, Field/Plot/Area, Performed By, Time Spent (hours), Materials/Inputs Used, Cost, Status (dropdown: Done / Ongoing / Planned), Remarks.

Show a running total of Cost for the currently filtered date range at the top of the table.

3. Animal Treatment Schedule

Fields: Date, Animal ID/Name, Species/Breed, Treatment/Vaccine Given, Reason (dropdown: Illness / Routine / Preventive), Dosage, Route (dropdown: Oral / Injection / Topical), Treated By, Cost, Next Due Date, Remarks.

Show a running total of Cost for the currently filtered range.

Highlight rows where Next Due Date is within the next 7 days.

4. Bird Treatment Schedule

Fields: Date, Flock/Batch ID, Bird Type (dropdown: Layer / Broiler / Other), No. of Birds, Treatment/Vaccine Given, Reason, Dosage, Route (dropdown: Water / Injection / Spray / Eye Drop), Treated By, Cost, Next Due Date, Remarks.

Show a running total of Cost for the currently filtered range.

Highlight rows where Next Due Date is within the next 7 days.

5. Harvest Log

Fields: Date Harvested, Crop Name, Field/Plot, Quantity Harvested (kg), Remarks.

Crop Name should be a free-text field but suggest previously used crop names as autocomplete.

6. Sales Log

Fields: Date Sold, Crop Name (same autocomplete as Harvest Log), Quantity Sold (kg), Price per kg, Buyer, Remarks.

Total Sale Value = Quantity Sold × Price per kg, calculated automatically and shown per row (not user-editable).

Show a running total of Total Sale Value for the currently filtered range.

7. Crop Balance (key feature — must be dynamically calculated, not manually entered)

For every unique Crop Name that appears in either the Harvest Log or Sales Log, show a summary table with:

Crop Name

Total Harvested (kg) — sum of all Harvest Log quantities for that crop

Total Sold (kg) — sum of all Sales Log quantities for that crop

Quantity Remaining (kg) = Total Harvested − Total Sold

Total Sales Value — sum of all Sales Log total sale values for that crop

This table must update automatically whenever a new Harvest Log or Sales Log entry is added, edited, or deleted. Sort by Crop Name alphabetically. Flag any crop where Quantity Remaining is negative (oversold vs. recorded harvest) in red as a data-check warning.

Dashboard

Show at-a-glance cards for:

Total cost this month (sum of Daily Activities + Animal Treatment + Bird Treatment costs)

Total sales value this month (from Sales Log)

Net (sales − costs) this month

Any treatments/sprays with Next Due Date in the next 7 days, across all three schedules, as a combined reminders list

Top 3 crops by Quantity Remaining (from Crop Balance)

General requirements

Mobile-first responsive design, usable on a phone in the field.

Currency should be easy to configure (default to UGX, formatted with thousands separators, no decimals).

Dates should default to today when adding a new record but be editable.

Allow CSV export of any table.

Empty states should show friendly guidance text (e.g., "No harvests logged yet — tap Add Record to log your first harvest").

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e87ded83-a7b3-4297-820d-9ea52409b0b6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
