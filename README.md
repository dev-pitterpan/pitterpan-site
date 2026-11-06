# Pitter Pan Festas

Site institucional com quatro páginas, acesso à loja Shopify e link para o catálogo sazonal existente.

## Rodar localmente

Requisitos: Node.js 22.18 ou superior e npm.

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000. O npm baixa os pacotes na instalação inicial. Em execução, fontes, scripts e imagens são servidos pelo projeto. Links para catálogo, loja e mapa navegam para seus respectivos serviços.

```bash
npm run typecheck
npm test
npm run build
```

O build gera a versão estática em `out/`. O código-fonte das páginas está em React e TypeScript.

## Manutenção

| Pasta | Conteúdo |
| --- | --- |
| `src/app` | Rotas, conteúdo das páginas e metadados |
| `src/components/brand` | Marca em SVG, seleção visual e acessórios |
| `src/components/layout` | Navegação, cabeçalho e rodapé |
| `src/components/home` | Abertura e animação GSAP |
| `src/components/ui` | Ícones, botões e componentes compartilhados |
| `src/config` | Links, lojas, coleções e calendário de campanhas |
| `src/lib` | Cálculo das datas e seleção da campanha |
| `src/styles` | Tailwind, tokens de marca e estilos compartilhados |
| `public/images` | Imagens locais em WebP |
| `tests` | Testes do calendário |

## Campanhas comemorativas

Edite `src/config/seasons.ts`. As campanhas fixas usam mês e dia no formato MMDD, com início e fim inclusivos. A lista está em ordem de prioridade. O Réveillon atravessa dezembro e janeiro. Páscoa e Carnaval usam dias relativos ao domingo de Páscoa. O cálculo segue o fuso de Joinville e o navegador atualiza a marca enquanto a página permanece aberta.

Para incluir uma campanha, declare seu identificador e paleta, registre o intervalo e adicione o adereço em `season-accessory.tsx`. A marca SVG inicial é uma interpretação provisória em azul, vermelho e amarelo. Substitua a geometria em `brand-mark.tsx` pelo SVG oficial quando estiver disponível, preservando os pontos de cor e a camada do adereço.
