export type SeasonId = 'default' | 'christmas' | 'new-year' | 'halloween' | 'junina' | 'children' | 'valentine' | 'easter' | 'carnival';

export type Season = {
  label: string;
  background: string;
  primary: string;
  secondary: string;
};

export const seasons: Record<SeasonId, Season> = {
  default: { label: '', background: '#172b80', primary: '#f14043', secondary: '#ffda42' },
  christmas: { label: 'Natal', background: '#283583', primary: '#f34a52', secondary: '#ffdf83' },
  'new-year': { label: 'Réveillon', background: '#342958', primary: '#f3d377', secondary: '#ffffff' },
  halloween: { label: 'Halloween', background: '#361653', primary: '#ff843d', secondary: '#fcd47c' },
  junina: { label: 'Festa Junina', background: '#1d5087', primary: '#ff7469', secondary: '#ffda60' },
  children: { label: 'Dia das Crianças', background: '#40318d', primary: '#ff75bc', secondary: '#90f1da' },
  valentine: { label: 'Dia dos Namorados', background: '#831b48', primary: '#ff899c', secondary: '#ffe3ee' },
  easter: { label: 'Páscoa', background: '#494187', primary: '#ffbbd6', secondary: '#f9e49d' },
  carnival: { label: 'Carnaval', background: '#283688', primary: '#ff81da', secondary: '#a9f15d' },
};

// Formato MMDD. Em caso de sobreposição, a primeira campanha tem prioridade.
export const fixedCampaigns = [
  { id: 'christmas', start: 1201, end: 1225 },
  { id: 'new-year', start: 1226, end: 101 },
  { id: 'halloween', start: 1013, end: 1031 },
  { id: 'children', start: 1001, end: 1012 },
  { id: 'valentine', start: 608, end: 612 },
  { id: 'junina', start: 601, end: 731 },
] as const satisfies readonly { id: SeasonId; start: number; end: number }[];

export const movableCampaigns = [
  { id: 'easter', start: -14, end: 0 },
  { id: 'carnival', start: -54, end: -47 },
] as const satisfies readonly { id: SeasonId; start: number; end: number }[];
