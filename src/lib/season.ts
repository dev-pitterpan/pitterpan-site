import { fixedCampaigns, movableCampaigns, type SeasonId } from '../config/seasons.ts';
import { site } from '../config/site.ts';

const localDate = new Intl.DateTimeFormat('en-GB', {
  timeZone: site.timeZone, year: 'numeric', month: 'numeric', day: 'numeric',
});
const millisecondsPerDay = 86_400_000;

function easterSunday(year: number): number {
  // Computus gregoriano de Meeus/Jones/Butcher.
  const golden = year % 19;
  const century = Math.floor(year / 100);
  const yearOfCentury = year % 100;
  const correction = Math.floor((century + 8) / 25);
  const lunar = (19 * golden + century - Math.floor(century / 4) - Math.floor((century - correction + 1) / 3) + 15) % 30;
  const weekday = (32 + 2 * (century % 4) + 2 * Math.floor(yearOfCentury / 4) - lunar - (yearOfCentury % 4)) % 7;
  const adjustment = Math.floor((golden + 11 * lunar + 22 * weekday) / 451);
  const result = lunar + weekday - 7 * adjustment + 114;

  return Date.UTC(year, Math.floor(result / 31) - 1, (result % 31) + 1);
}

export function getSeason(date = new Date()): SeasonId {
  const parts = localDate.formatToParts(date);
  const year = Number(parts.find(({ type }) => type === 'year')?.value);
  const month = Number(parts.find(({ type }) => type === 'month')?.value);
  const day = Number(parts.find(({ type }) => type === 'day')?.value);
  const monthDay = month * 100 + day;
  const fixed = fixedCampaigns.find(({ start, end }) =>
    start <= end ? monthDay >= start && monthDay <= end : monthDay >= start || monthDay <= end,
  );

  if (fixed) return fixed.id;

  // Compare datas civis, sem depender da duração de um dia no fuso do visitante.
  const offset = (Date.UTC(year, month - 1, day) - easterSunday(year)) / millisecondsPerDay;

  return movableCampaigns.find(({ start, end }) => offset >= start && offset <= end)?.id ?? 'default';
}
