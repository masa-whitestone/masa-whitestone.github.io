const MONTH_YEAR = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const FULL_DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "19 August 2026" — for anything with a real publication date. */
export function formatDate(date: Date): string {
  return FULL_DATE.format(date);
}

/** "Jun 2026" — for the coarser granularity of a CV timeline. */
export function formatMonth(date: Date): string {
  return MONTH_YEAR.format(date);
}

/** "Jun 2026 — Present" */
export function formatRange(start: Date, end?: Date): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}`;
}
