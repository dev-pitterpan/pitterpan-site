const wave = 'M-12 13C43 13 69 5 121 5S197 17 256 17 327 8 387 8 456 21 518 21 592 10 654 10 727 16 787 16 868 5 927 5 1001 18 1060 18 1138 10 1199 10 1270 20 1332 20 1403 9 1452 9';

export function PartyRibbon({ edgePath, fill }: { edgePath?: string; fill?: string }) {
  const outline = edgePath ?? wave;

  return (
    <svg className="party-ribbon" viewBox={edgePath ? "0 0 1000 150" : "0 0 1440 26"} preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="party-ribbon-colors">
          <stop offset="0%" stopColor="#ff4385" />
          <stop offset="24%" stopColor="#ff8b32" />
          <stop offset="49%" stopColor="#36aaff" />
          <stop offset="74%" stopColor="#ffe338" />
          <stop offset="100%" stopColor="#56de68" />
        </linearGradient>
      </defs>
      {fill && !edgePath && <path d={`${outline}V27H-12Z`} fill={fill} />}
      {edgePath && <path data-brands-fill d={`${outline}V154H-1Z`} fill="var(--party-edge-fill)" />}
      <path data-brands-outline={edgePath ? "" : undefined} d={outline} fill="none" stroke="url(#party-ribbon-colors)" strokeWidth="4" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
