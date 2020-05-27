import {
  parseDate,
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

console.log(parseDate("20-01-2019", "dd-mm-yyyy"));

console.log(dayOfYear(new Date("2019-03-11T03:24:00")));
console.log(currentDayOfYear());
