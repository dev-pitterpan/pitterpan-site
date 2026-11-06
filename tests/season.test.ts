import assert from 'node:assert/strict';
import test from 'node:test';
import { getSeason } from '../src/lib/season.ts';

test('Natal começa à meia-noite em Joinville', () => {
  assert.equal(getSeason(new Date('2026-12-01T02:59:59Z')), 'default');
  assert.equal(getSeason(new Date('2026-12-01T03:00:00Z')), 'christmas');
});

test('Réveillon atravessa o ano e a marca padrão retorna depois da campanha', () => {
  assert.equal(getSeason(new Date('2026-12-25T15:00:00Z')), 'christmas');
  assert.equal(getSeason(new Date('2026-12-26T15:00:00Z')), 'new-year');
  assert.equal(getSeason(new Date('2027-01-01T15:00:00Z')), 'new-year');
  assert.equal(getSeason(new Date('2027-01-02T15:00:00Z')), 'default');
});

test('Dia dos Namorados tem prioridade sobre a campanha junina', () => {
  assert.equal(getSeason(new Date('2026-06-12T15:00:00Z')), 'valentine');
  assert.equal(getSeason(new Date('2026-06-13T15:00:00Z')), 'junina');
});

test('Carnaval e Páscoa acompanham a data móvel de cada ano', () => {
  for (const day of ['2026-02-17', '2027-02-09']) {
    assert.equal(getSeason(new Date(day + 'T15:00:00Z')), 'carnival');
  }
  for (const day of ['2026-04-05', '2027-03-28']) {
    assert.equal(getSeason(new Date(day + 'T15:00:00Z')), 'easter');
  }
});
