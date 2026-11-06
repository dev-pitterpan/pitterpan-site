export const site = {
  name: 'Pitter Pan Festas',
  shop: 'https://www.pitterpan.com.br',
  catalog: 'https://catalogopitterpanfesta.vercel.app/',
  timeZone: 'America/Sao_Paulo',
};

export const navigation = [
  { href: '/', label: 'Início' },
  { href: '/sobre/', label: 'Sobre nós' },
  { href: '/colecoes/', label: 'Coleções' },
  { href: '/lojas/', label: 'Nossas lojas' },
];

export const collections = [
  { title: 'Balões', label: 'Arranjos e detalhes', description: 'Metalizados, bubbles, letras, números e balões personalizados.', href: site.shop + '/collections/baloes-1', icon: 'balloon', color: 'blue' },
  { title: 'Festa e decoração', label: 'Temas e mesas', description: 'Painéis, itens de mesa e lembrancinhas para montar a festa.', href: site.shop + '/collections/festas', icon: 'star', color: 'red' },
  { title: 'Confeitaria', label: 'Doces e criações', description: 'Chocolates, confeitos, corantes e insumos para suas receitas.', href: site.shop + '/collections/confeitarias/Confeitarias', icon: 'cake', color: 'gold' },
  { title: 'Guloseimas', label: 'Mesa de doces', description: 'Balas, chocolates e marshmallows para a mesa ou as lembrancinhas.', href: site.shop + '/search?q=guloseimas', icon: 'star', color: 'red' },
  { title: 'Embalagens', label: 'Para presentear', description: 'Caixas, sacolas e fitas para presentes e encomendas.', href: site.shop + '/search?q=embalagens', icon: 'gift', color: 'gold' },
  { title: 'Temas sazonais', label: 'Datas especiais', description: 'Explore ideias para Natal, Halloween e Festa Junina no catálogo.', href: site.catalog, icon: 'star', color: 'blue' },
] as const;

export const stores = [
  { name: 'América', address: 'Rua Blumenau, 1500', phone: '(47) 3423-0300', tel: '+554734230300' },
  { name: 'Iririú', address: 'Rua Iririú, 2865', phone: '(47) 3423-1020', tel: '+554734231020' },
  { name: 'Floresta', address: 'Rua Santa Catarina, 1440', phone: '(47) 3423-1090', tel: '+554734231090' },
];
