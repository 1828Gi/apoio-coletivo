const albergues = [
  {
    endereco: 'rua santa clara',
    quantidadeMax: 20,
  },
  {
    endereco: 'rua santa escura',
    quantidadeMax: 30,
  },
];

const bomPrato = [
  {
    nome: 'Bom prato - 25 de Março',
    endereço: '25 de Março – R. 25 de Março, 166',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Brás',
    endereço: 'Brás - Av. Rangel Pestana, 2.327',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Brasilândia',
    endereço: 'Brasilândia - Av. Parapuã, 1.479',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Campo Limpo',
    endereço: 'Campo Limpo - Estrada de Itapecerica, 4.728',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Campos Elíseos',
    endereço: 'Campos Elíseos - Largo Coração de Jesus, 28',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Capão Redondo',
    endereço: 'Capão Redondo - Av. Comendador Sant’Anna, 240',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Cidade Ademar',
    endereço: 'Cidade Ademar – R. Yervant Kissajikian, 3.101',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Grajaú',
    endereço: 'Grajaú - Av. Dona Belmira Marin, 1.959',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Guaianases',
    endereço: 'Guaianases – Estrada de Poá, 13',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Heliópolis',
    endereço: 'Heliópolis - Estrada das Lágrimas, 2.608',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Itaim Paulista',
    endereço: 'Itaim Paulista - Av. Marechal Tito, 4.731',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Itaquera',
    endereço: 'Itaquera – R. Victorio Santim, 247',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Lapa',
    endereço: 'Lapa – R. Afonso Sardinha, 245',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Paraisópolis',
    endereço: 'Paraisópolis – R. Ernest Renan, 1.000',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Perus',
    endereço: 'Perus - R. Antônio Maia, 652',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Santana',
    endereço: 'Santana – R. Dr. Zuquim, 532',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Santo Amaro',
    endereço: 'Santo Amaro - Av. Mario Lopes Leão, 685',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - São Mateus',
    endereço: 'São Mateus - Av. Mateo Bei, 2.604',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - São Miguel Paulista',
    endereço: 'São Miguel Paulista – R. José Otoni, 256',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Tucuruvi',
    endereço: 'Tucuruvi – Av. Mazzei, 495',
    horárioDeFuncionamento: '',
    descrição: '',
  },
  {
    nome: 'Bom prato - Vila Nova Cachoeirinha',
    endereço: 'Vila Nova Cachoeirinha - Av. Dep. Cantídio Sampaio, 140',
    horárioDeFuncionamento: '',
    descrição: '',
  },
];

const saúde = [{}];

const outrosServiços = [
  {
    título: 'Centro POP (O Centro de Referência Especializado para População em Situação de Rua)',
    descrição:
      'Orientação sobre prevenção, oferece banho e refeições, encaminhamento pro CAPSAD, oferecem encaminhamento para conferência de documentos pessoais, orientação em problemas judiciais, capacitação profissional, acesso à saúde, rede de estímulo à geração de renda, e atividades de lazer e cultura, visando a reinserção social da população em situação de rua.',
    urlImagem: '',
    webSite:
      'https://www.prefeitura.sp.gov.br/cidade/secretarias/assistencia_social/creas_pop/index.php?p=161192',
    unidades: [
      {
        nome: 'Centro POP BELA VISTA',
        endereço: 'Rua Jandaia, 30 - Bela Vista',
        telefone: '3104-0423',
      },
      {
        nome: 'Centro POP Santa Cecília',
        endereço: 'Rua Mauá, 36 - Santa Ifigênia',
        telefone: '3331-7353',
      },
    ],
  },
];

export default {
  albergues,
  bomPrato,
  saúde,
  outrosServiços,
};
