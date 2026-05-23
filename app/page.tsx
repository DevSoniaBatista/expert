'use client';

import { useEffect, useMemo, useState, type CSSProperties } from 'react';

type SlideLink = { label: string; url: string } | { separator: true };
type SlideFlow = { steps: string[]; highlight?: { text: string; tone: 'warn' | 'info' | 'good' } };
type SlideInfoItem = { icon: string; title: string; description: string };
type SlideInfo = { label?: string; items: SlideInfoItem[]; links?: SlideLink[]; highlight?: { text: string; tone: 'warn' | 'info' | 'good' } };
type SlideQr = { label?: string; url: string };
type SlideImage = { src: string; alt?: string; style?: CSSProperties };
type SlideSimpleLink = { label: string; url: string };
type SlideColumn = { title: string; image?: SlideImage; links?: SlideSimpleLink[]; qrs?: SlideQr[] };

type Slide = {
  title: string;
  subtitle?: string;
  bullets?: string[];
  links?: SlideLink[];
  columns?: SlideColumn[];
  flow?: SlideFlow;
  info?: SlideInfo;
  qr?: SlideQr;
  qrs?: SlideQr[];
  image?: SlideImage;
  sideImage?: SlideImage;
};

const PAD_URL = 'https://pad.riseup.net/p/expert-28Jun';

const slides: Slide[] = [
  {
    "title": "Solidity na Prática: Criando um NFT de Certificação na Blockchain",
    "columns": [
      {
        "title": "Instituto Web3EduBrasil",
        "image": { "src": "/images/web3expert.png", "alt": "Web3EduBrasil / Expert Web3" },
        "qrs": [
          { "label": "LinkedIn", "url": "https://www.linkedin.com/company/web3edubrasil/" },
          { "label": "Instagram", "url": "https://www.instagram.com/web3edubrasil?igsh=NWNnZGk2dHVoZG42" }
        ]
      },
      {
        "title": "Mulheres na Web3",
        "image": { "src": "/images/mnw3.png", "alt": "Mulheres na Web3" },
        "qrs": [
          { "label": "Site", "url": "https://www.mulheresnaweb3.com/" },
          { "label": "LinkedIn", "url": "https://www.linkedin.com/company/mulheresnaweb3" },
          { "label": "Instagram", "url": "https://www.instagram.com/mulheresnaweb3?igsh=ZWlldWF0MWhiNzcx" }
        ]
      },
      {
        "title": "Sonia Batista",
        "image": { "src": "/images/sonia.jpeg", "alt": "Sonia Batista", "style": { "height": 140, "objectFit": "cover" } },
        "qrs": [{ "label": "LinkedIn", "url": "https://www.linkedin.com/in/soniamarabatista/" }]
      }
    ]
  },
  {
    "title": "Comparação Web1, Web2 e Web3",
    "image": { "src": "/images/web1,2,3.png", "alt": "Comparação Web1, Web2 e Web3", "style": { "width": "70%", "maxWidth": 820 } }
  },
  {
    "title": "Web3",
    "image": { "src": "/images/web3.png", "alt": "Web3", "style": { "width": "68%", "maxWidth": 780 } }
  },
  {
    "title": "Blockchain = Livro-Razão 📒",
    "image": { "src": "/images/livro-razao.png", "alt": "Blockchain como livro-razão (ledger)" }
  },
  {
    "title": "Smart Contracts",
    "image": { "src": "/images/smartcontract.png", "alt": "Smart Contract" }
  },
  {
    "title": "️ERC-20, ERC-721 e ERC-1155",
    "image": { "src": "/images/padroes-erc.png", "alt": "Padrões ERC", "style": { "width": "82%", "maxWidth": 940 } }
  },
  {
    "title": "Seed Phrase — A Chave do Seu Reino",
    "subtitle": "NUNCA compartilhe com ninguém — nem suporte técnico, nem amigos, nem nesta aula. Ninguém legítimo pedirá isso.",
    "info": {
      "label": "SEGURANÇA",
      "items": [
        { "icon": "📝", "title": "Guarde offline", "description": "Anote em papel e guarde fisicamente — nunca tire foto, salve no celular, e-mail, nuvem ou mensagem." },
        { "icon": "🧠", "title": "Acesso total", "description": "Quem tem a seed phrase tem acesso total — é como ter a chave master do seu banco, sem possibilidade de bloqueio." },
        { "icon": "🧨", "title": "Sem recuperação", "description": "Se perder, perdeu o acesso para sempre — não há \"esqueci minha senha\", não há suporte. A blockchain é implacável." },
        { "icon": "✅", "title": "Atividade", "description": "Agora é sua vez!" }
      ],
      "highlight": { "text": "Ninguém legítimo pede seed phrase. Se pediu, é golpe.", "tone": "warn" }
    }
  },
  {
    "title": "Criando sua Wallet MetaMask 🦊",
    "subtitle": "metamask.io/download → instale no Chrome, Firefox ou Brave",
    "qrs": [
      { "label": "MetaMask", "url": "https://metamask.io/download/" }
    ],
    "flow": {
      "steps": [
        "Escolha o\nsoftware",
        "Gere a\nseed phrase",
        "Guarde em\nsegurança",
        "Acesse seu\nendereço"
      ]
    },
    "bullets": [
      "📱 Escaneie para instalar",
      "Clique em \"Create a new wallet\" e defina uma senha forte",
      "Finalize o backup das 12 palavras (seed phrase)",
      "Settings → Networks → Add Network → Sepolia Testnet (Chain ID: 11155111)",
      "MetaMask → Account details → Copy address",
      "0x... — sua identidade na blockchain. Pode compartilhar!",
      "Cole seu 0x... no pad (somente o endereço público)"
    ]
  },
  {
    "title": "Mainnet/Testnet",
    "subtitle": "Mainnet vs Testnet",
    "info": {
      "label": "MAINNET vs TESTNET",
      "items": [
        { "icon": "🏦", "title": "Mainnet", "description": "Rede principal. Tokens têm valor real, taxas (gas) são reais e transações são públicas e irreversíveis." },
        { "icon": "🧪", "title": "Testnet", "description": "Rede de testes. Tokens não têm valor real; ideal para aprender, testar contratos e errar sem prejuízo (usa faucet)." },
        { "icon": "🌐", "title": "Principais mainnets", "description": "Ethereum · Polygon · Arbitrum · Optimism · Base · BNB Chain · Avalanche (EVM) · Solana (não-EVM)." },
        { "icon": "🧰", "title": "Principais testnets", "description": "Sepolia · Holesky · Base Sepolia · OP Sepolia · Arbitrum Sepolia · Amoy (Polygon) · Fuji (Avalanche) · BNB Testnet · Solana Devnet/Testnet." }
      ],
      "highlight": { "text": "Hoje vamos usar Sepolia (testnet do Ethereum) para não gastar dinheiro real.", "tone": "good" }
    }
  },
  {
    "title": "Faucets & Rede Sepolia 🚰",
    "subtitle": "Faucet para conseguir SepoliaETH (ETH de teste).",
    "links": [
      { "label": "Google Cloud Faucet (Sepolia)", "url": "https://cloud.google.com/application/web3/faucet/ethereum/sepolia" },
      { "label": "Alchemy Faucet", "url": "https://www.alchemy.com/faucets/ethereum-sepolia" },
      { "label": "Infura Faucet", "url": "https://www.infura.io/faucet/sepolia" },
      { "separator": true },
      { "label": "Etherscan (Ethereum)", "url": "https://etherscan.io/" },
      { "label": "Sepolia Etherscan", "url": "https://sepolia.etherscan.io/" }
    ],
    "qrs": [
      { "label": "Google Faucet (Sepolia)", "url": "https://cloud.google.com/application/web3/faucet/ethereum/sepolia" },
      { "label": "Etherscan (Sepolia)", "url": "https://sepolia.etherscan.io/" }
    ],
    "bullets": [
      "Google Cloud: login com conta Google. Limite típico: ~0.05 SepoliaETH/dia (por conta e/ou por wallet)."
    ]
  },
  {
    "title": "Remix IDE — Seu Editor na Nuvem 🔧",
    "subtitle": "Nenhuma instalação. Acesse remix.ethereum.org e já tem tudo que precisa.",
    "links": [
      { "label": "Abrir Remix", "url": "https://remix.ethereum.org/" }
    ],
    "qr": { "label": "Remix IDE", "url": "https://remix.ethereum.org/" },
    "bullets": [
      "Highlight de sintaxe, autocomplete e compilador integrado com múltiplas versões.",
      "Conecta com a wallet e faz deploy em qualquer rede EVM — Sepolia, Mainnet, etc.",
      "Trace de transações passo a passo para encontrar e corrigir bugs no contrato.",
      "Abra agora e crie Workshop.sol",
      "Copie o código que está no pad para o Remix IDE"
    ]
  },
  {
    "title": "Solidity (.sol) — Vamos criar um NFT",
    "subtitle": "Contrato ERC-721 na prática (certificado na sua wallet)",
    "links": [
      { "label": "Pad (Workshop.sol)", "url": "https://pad.riseup.net/p/expert-28Jun" },
      { "label": "OpenZeppelin Wizard (ERC-721)", "url": "https://wizard.openzeppelin.com/#erc721" },
      { "label": "Pinata (hospedagem de imagem/IPFS)", "url": "https://pinata.cloud/" }
    ],
    "bullets": [
      "Solidity é a linguagem mais comum para escrever smart contracts em redes EVM (ex: Ethereum).",
      ".sol é a extensão do arquivo do contrato — o Remix compila para bytecode que roda na blockchain.",
      "Hoje vamos criar um contrato de NFT (ERC-721) que emite um certificado para a sua wallet.",
      "No NFT, a imagem/metadata normalmente fica fora da blockchain (ex: IPFS) e o contrato guarda um link (ipfs://...).",
      "IPFS é a sigla para Sistema de Arquivos Inter-Planetário (em Inglês) e basicamente é uma rede descentralizada de compartilhamento de arquivos.",
    ]
  },
  {
    "title": "Deploy no Remix IDE",
    "subtitle": "Sem gas, sem blockchain real",
    "bullets": [
      "Deploy no próprio Remix IDE não paga gas, porque a execução é local.",
      "Você consegue criar, testar e fazer deploy do contrato gratuitamente.",
      "O contrato roda apenas dentro do ambiente do Remix.",
      "Nenhuma transação vai para a blockchain real."
    ]
  },
  {
    "title": "Fazendo Deploy na Rede Sepolia 🚀",
    "subtitle": "Deploy real na blockchain (vai para a rede)",
    "sideImage": { "src": "/images/metamask.png", "alt": "MetaMask", "style": { "height": 420, "objectFit": "contain" } },
    "bullets": [
      "Sepolia é uma testnet do Ethereum: transações são reais na rede, mas o ETH é de teste (faucet).",
      "No Remix: selecione \"Deploy & Run Transactions - Wallet Connect - Deploy Contract\" para assinar e enviar transações para a Sepolia.",
      "Você vai pagar gas em SepoliaETH e precisa confirmar tudo no MetaMask.",
      "Depois do deploy, o contrato ganha um endereço 0x... e pode ser verificado no Sepolia Etherscan.",
      "Execute o 'safemint' incluindo o seu endereço de wallet no contrato.",
      "Com o contrato deployado, e o mint, você vê o NFT sua sua carteira MetaMask.",
      "Cole o endereço do contrato no pad."
    ]
  },
  {
    "title": "Onde ver seu NFT na blockchain 🔍",
    "subtitle": "Verifique contrato, transações e tokens",
    "info": {
      "label": "DON'T TRUST, VERIFY",
      "items": [
        { "icon": "🌐", "title": "Exploradores", "description": "Veja dados públicos em tempo real (endereço, transações, eventos)." },
        { "icon": "📑", "title": "Tx Hash", "description": "O comprovante único de cada transação. Use para rastrear o deploy e o mint." },
        { "icon": "🏦", "title": "Wallet Address", "description": "Qualquer endereço público tem histórico e saldo auditáveis." },
        { "icon": "📦", "title": "Blocos", "description": "Acompanhe a rede confirmando transações e criando novos blocos." }
      ],
      "links": [
        { "label": "Etherscan (Sepolia)", "url": "https://sepolia.etherscan.io/" },
      ],
      "highlight": { "text": "Na blockchain você não precisa acreditar: você mesmo verifica.", "tone": "good" }
    },
    "bullets": [
      "Etherscan: veja transações e eventos do contrato",
      "MetaMask: NFT na wallet (se necessário, import manual)"
    ]
  },
  {
    "title": "Resumo do Workshop ✅",
    "subtitle": "O que você aprendeu e fez na prática",
    "bullets": [
      "Entendeu os principais conceitos de Web3",
      "Criou uma wallet (MetaMask) e aprendeu boas práticas de segurança (seed phrase)",
      "Aprendeu o que são Smart Contracts e NFTs (ERC-721) e seus principais usos",
      "Configurou uma rede de testes (Sepolia) e usou faucet para obter ETH de teste",
      "Usou Remix IDE para compilar e fazer deploy de um contrato",
      "Entendeu a diferença entre deploy local e deploy real (Injected Provider/MetaMask)",
      "Mintou um NFT de certificado e viu o resultado em exploradores (Etherscan/MetaMask)"
    ]
  },
  {
    "title": "Continue sua jornada Web3 🗺️",
    "subtitle": "Comunidades + cursos gratuitos + hackathons",
    "qrs": [
      { "label": "LinkedIn (Mulheres na Web3)", "url": "https://www.linkedin.com/company/mulheresnaweb3" },
      { "label": "LinkedIn (Instituto Web3EduBrasil)", "url": "https://www.linkedin.com/company/web3edubrasil/" }
    ],
    "bullets": [
      "Entre nas comunidades e participe das conversas — networking e oportunidades aparecem ali.",
      "Faça cursos online (tem vários gratuitos) e pratique todo dia um pouco: Remix, Solidity e leitura de contratos.",
      "Participe de hackathons e bootcamps: você aprende rápido construindo com um time.",
      "Pegue projetos simples para portfólio (mint de NFT, deploy em testnet, leitura no Etherscan).",
      "Compartilhe seu progresso (posts curtos e consistentes) e peça feedback da comunidade."
    ]
  },
  {
    "title": "Apresentação (Vercel)",
    "subtitle": "Link para abrir no celular",
    "qr": { "label": "Abrir apresentação", "url": "__PRESENTATION_URL__" },
    "links": [
      { "label": "Abrir apresentação", "url": "__PRESENTATION_URL__" }
    ],
    "bullets": [
      "Escaneie o QR code ou abra o link para acompanhar os slides."
    ]
  }
];

export default function Page() {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const canPrev = index > 0;
  const canNext = index < total - 1;
  const [explorerValue, setExplorerValue] = useState('');

  const styles = useMemo((): Record<string, CSSProperties> => ({
    page: {
      minHeight: '100vh',
      padding: 24,
      background:
        'radial-gradient(900px 600px at 20% 10%, rgba(76, 179, 255, 0.18), transparent 60%), radial-gradient(800px 520px at 85% 20%, rgba(164, 89, 255, 0.16), transparent 55%), radial-gradient(900px 600px at 30% 90%, rgba(0, 255, 209, 0.10), transparent 55%), linear-gradient(180deg, #070A12 0%, #05060C 100%)',
    },
    bgGrid: {
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      opacity: 0.22,
      backgroundImage:
        'linear-gradient(rgba(76,179,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(76,179,255,0.06) 1px, transparent 1px)',
      backgroundSize: '64px 64px',
      maskImage: 'radial-gradient(60% 55% at 50% 30%, black 40%, transparent 75%)',
    },
    orbA: {
      position: 'fixed',
      right: -140,
      top: -160,
      width: 560,
      height: 560,
      borderRadius: 9999,
      background: 'radial-gradient(circle at 35% 35%, rgba(139,92,246,0.18) 0%, transparent 65%)',
      filter: 'blur(1px)',
      pointerEvents: 'none',
    },
    orbB: {
      position: 'fixed',
      left: -140,
      bottom: -160,
      width: 520,
      height: 520,
      borderRadius: 9999,
      background: 'radial-gradient(circle at 50% 50%, rgba(0,255,209,0.12) 0%, transparent 62%)',
      pointerEvents: 'none',
    },
    shell: { maxWidth: 1120, margin: '0 auto' },
    header: {
      padding: 18,
      borderRadius: 16,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.10)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
      marginBottom: 14,
    },
    titleRow: { display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' },
    title: { margin: 0, fontSize: 34, lineHeight: 1.15 },
    counter: { fontSize: 12, opacity: 0.75 },
    subtitle: { marginTop: 10, opacity: 0.9, lineHeight: 1.5, maxWidth: 900 },
    contentGrid: { display: 'grid', gap: 12 },
    card: {
      paddingTop: 20,
      paddingRight: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      borderRadius: 16,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)',
      border: '1px solid rgba(255,255,255,0.10)',
      boxShadow: '0 14px 50px rgba(0,0,0,0.45)',
    },
    bullets: { margin: 0, paddingLeft: 18, display: 'grid', gap: 10 },
    bullet: { lineHeight: 1.55, opacity: 0.95 },
    slideImage: {
      width: '74%',
      maxWidth: 860,
      marginTop: 6,
      borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(255,255,255,0.03)',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cols3: { display: 'grid', gridTemplateColumns: '0.95fr 1.55fr 0.70fr', gap: 14 },
    colCard: {
      padding: 14,
      borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.10)',
      background: 'rgba(255,255,255,0.03)',
      display: 'grid',
      alignContent: 'start',
      gap: 10,
    },
    colTitle: { margin: 0, fontSize: 16, fontWeight: 800, textAlign: 'center' },
    colImg: {
      width: '100%',
      height: 120,
      objectFit: 'contain',
      borderRadius: 14,
      border: '1px solid rgba(255,255,255,0.10)',
      background: 'rgba(255,255,255,0.02)',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    colLinks: { display: 'grid', gap: 8 },
    colLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 10px',
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,0.14)',
      background: 'rgba(255,255,255,0.04)',
      color: '#EAF2FF',
      textDecoration: 'none',
      fontSize: 12,
      lineHeight: 1,
      width: 'fit-content',
    },
    colQrRow: { display: 'grid', gap: 10 },
    colQrBox: {
      padding: 10,
      borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.10)',
      background: 'rgba(255,255,255,0.03)',
      width: '100%',
      boxSizing: 'border-box',
      display: 'grid',
      justifyItems: 'center',
    },
    colQrImg: { width: 116, height: 116, borderRadius: 12, background: '#fff', display: 'block' },
    colQrLabel: { marginTop: 6, fontSize: 10, opacity: 0.8, textAlign: 'center' },
    sideGrid: { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 520px', gap: 18, alignItems: 'start' },
    sideImg: {
      width: '100%',
      maxWidth: 520,
      borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(255,255,255,0.03)',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    qrGrid: { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 440px', gap: 16, alignItems: 'start' },
    qrList: { display: 'grid', gap: 10 },
    qrBox: {
      padding: 10,
      borderRadius: 18,
      border: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(255,255,255,0.03)',
      width: '100%',
      boxSizing: 'border-box',
      display: 'grid',
      justifyItems: 'center',
    },
    qrImg: { width: 188, height: 188, borderRadius: 14, background: '#fff', display: 'block' },
    qrLabel: { marginTop: 5, fontSize: 10, opacity: 0.8, textAlign: 'center' },
    linkRow: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 },
    linkChip: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 10px',
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,0.14)',
      background: 'rgba(255,255,255,0.04)',
      color: '#EAF2FF',
      textDecoration: 'none',
      fontSize: 12,
      lineHeight: 1,
    },
    sectionLabel: { fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 },
    infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: 12 },
    infoItem: {
      gridColumn: 'span 6',
      padding: 14,
      borderRadius: 14,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.10)',
    },
    infoIcon: { fontSize: 20, lineHeight: 1, marginBottom: 10 },
    infoTitle: { margin: 0, fontSize: 13, fontWeight: 700 },
    infoDesc: { marginTop: 6, fontSize: 12, opacity: 0.86, lineHeight: 1.5 },
    highlight: {
      padding: 14,
      borderRadius: 14,
      border: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(255,255,255,0.03)',
      lineHeight: 1.55,
      fontSize: 12.5,
    },
    highlightWarn: { border: '1px solid rgba(245,158,11,0.35)', background: 'rgba(245,158,11,0.06)' },
    highlightGood: { border: '1px solid rgba(16,185,129,0.30)', background: 'rgba(16,185,129,0.06)' },
    flowRow: { display: 'flex', alignItems: 'stretch', gap: 10, flexWrap: 'wrap' },
    flowStep: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderRadius: 14,
      border: '1px solid rgba(255,255,255,0.10)',
      background: 'rgba(255,255,255,0.03)',
      minWidth: 210,
      flex: '1 1 210px',
    },
    flowDot: {
      width: 30,
      height: 30,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(76,179,255,0.28)',
      background: 'rgba(76,179,255,0.10)',
      color: '#EAF2FF',
      fontSize: 12,
      fontWeight: 700,
    },
    flowText: { whiteSpace: 'pre-line', fontSize: 12.5, lineHeight: 1.25, opacity: 0.95 },
    explorerBox: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 12,
      padding: 12,
      borderRadius: 14,
      border: '1px solid rgba(255,255,255,0.10)',
      background: 'rgba(0,0,0,0.25)',
    },
    input: {
      flex: 1,
      padding: '10px 12px',
      borderRadius: 12,
      border: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(255,255,255,0.04)',
      color: '#EAF2FF',
      outline: 'none',
      fontSize: 13,
    },
    navWrap: {
      position: 'fixed',
      bottom: 18,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 14px',
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(15,22,35,0.78)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 18px 70px rgba(0,0,0,0.55)',
      zIndex: 50,
    },
    padQrWrap: {
      position: 'fixed',
      right: 22,
      bottom: 18,
      zIndex: 40,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    },
    padQrBox: {
      padding: 10,
      borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(15,22,35,0.78)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 18px 70px rgba(0,0,0,0.35)',
      display: 'grid',
      justifyItems: 'center',
      gap: 6,
    },
    padQrImg: { width: 108, height: 108, borderRadius: 12, background: '#fff', display: 'block' },
    padQrLabel: { fontSize: 10, opacity: 0.85, textAlign: 'center' },
    padQrUrl: { fontSize: 11, opacity: 0.92, textAlign: 'right', maxWidth: 260, wordBreak: 'break-all', lineHeight: 1.25 },
    dots: { display: 'flex', gap: 6, padding: '0 6px' },
    dot: { width: 6, height: 6, borderRadius: 999, background: 'rgba(234,242,255,0.25)', border: 0, padding: 0 },
    dotOn: { width: 16, background: 'rgba(76,179,255,0.75)' },
    keyHint: {
      position: 'fixed',
      bottom: 20,
      right: 22,
      fontSize: 11,
      opacity: 0.7,
      zIndex: 50,
    },
    btnBase: {
      padding: '10px 14px',
      borderRadius: 12,
      border: '1px solid rgba(255,255,255,0.15)',
      background: 'rgba(255,255,255,0.04)',
      color: '#EAF2FF',
    },
    btnPrimary: { background: 'rgba(76, 179, 255, 0.14)' },
  }), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') setIndex((v) => Math.min(total - 1, v + 1));
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') setIndex((v) => Math.max(0, v - 1));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [total]);

  const highlightStyle = (tone: 'warn' | 'info' | 'good') => {
    if (tone === 'warn') return { ...styles.highlight, ...styles.highlightWarn };
    if (tone === 'good') return { ...styles.highlight, ...styles.highlightGood };
    return styles.highlight;
  };

  const resolveUrl = (url: string) => {
    if (url === '__PRESENTATION_URL__') return typeof window !== 'undefined' ? window.location.origin : url;
    return url;
  };

  const qrs = slide?.qrs ?? (slide?.qr ? [slide.qr] : []);
  const isSeedSlide = slide?.title.toLowerCase().includes('seed phrase') ?? false;
  const isNetworkSlide = slide?.title.toLowerCase().includes('mainnet/testnet') ?? false;
  const isBigInfoSlide = isSeedSlide || isNetworkSlide;
  const isFaucetSlide = slide?.title.toLowerCase().includes('faucets & rede sepolia') ?? false;
  const linkRowStyle: CSSProperties = {
    ...styles.linkRow,
    marginTop: qrs.length > 0 ? 78 : styles.linkRow.marginTop,
  };
  const isImageSlide = Boolean(slide?.image);
  const headerStyle: CSSProperties = isImageSlide ? { ...styles.header, marginBottom: 6 } : styles.header;
  const cardStyle: CSSProperties = isImageSlide ? { ...styles.card, paddingTop: 12 } : styles.card;

  return (
    <main style={styles.page}>
      <div style={styles.bgGrid} aria-hidden />
      <div style={styles.orbA} aria-hidden />
      <div style={styles.orbB} aria-hidden />
      <div style={styles.shell}>
        <header style={headerStyle}>
          <div style={styles.titleRow}>
            <h1 style={styles.title}>{slide?.title ?? 'Palestra'}</h1>
            <div style={styles.counter}>{index + 1} / {total}</div>
          </div>
          {slide?.subtitle ? <div style={styles.subtitle}>{slide.subtitle}</div> : null}
        </header>

        <section style={cardStyle}>
          <div style={styles.contentGrid}>
            {slide?.flow?.steps && slide.flow.steps.length > 0 ? (
              <div>
                <div style={styles.sectionLabel}>Fluxo</div>
                <div style={{ height: 10 }} />
                <div style={styles.flowRow}>
                  {slide.flow.steps.map((t, i) => (
                    <div key={i} style={styles.flowStep}>
                      <div style={styles.flowDot}>{i + 1}</div>
                      <div style={styles.flowText}>{t}</div>
                    </div>
                  ))}
                </div>
                {slide.flow.highlight ? (
                  <div style={{ marginTop: 12, ...highlightStyle(slide.flow.highlight.tone) }}>
                    {slide.flow.highlight.text}
                  </div>
                ) : null}
              </div>
            ) : null}

            {slide?.info?.items && slide.info.items.length > 0 ? (
              <div>
                {slide.info.label ? <div style={styles.sectionLabel}>{slide.info.label}</div> : null}
                <div style={{ height: 10 }} />
                <div style={styles.infoGrid}>
                  {slide.info.items.map((it, i) => (
                    <div
                      key={i}
                      style={{
                        ...styles.infoItem,
                        gridColumn: total >= 1 ? 'span 6' : 'span 12',
                      }}
                    >
                      <div style={styles.infoIcon}>{it.icon}</div>
                      <p style={{ ...styles.infoTitle, fontSize: isBigInfoSlide ? 18 : styles.infoTitle.fontSize }}>
                        {it.title}
                      </p>
                      <div style={{ ...styles.infoDesc, fontSize: isBigInfoSlide ? 15 : styles.infoDesc.fontSize, lineHeight: isBigInfoSlide ? 1.6 : styles.infoDesc.lineHeight }}>
                        {it.description}
                      </div>
                    </div>
                  ))}
                </div>
                {slide.info.highlight ? (
                  <div style={{ marginTop: 12, ...highlightStyle(slide.info.highlight.tone) }}>
                    {slide.info.highlight.text}
                  </div>
                ) : null}

                {slide.title.toLowerCase().includes('blockchain') || slide.title.toLowerCase().includes('nft') ? (
                  <div style={styles.explorerBox}>
                    <input
                      value={explorerValue}
                      onChange={(e) => setExplorerValue(e.target.value)}
                      placeholder="Cole um endereço 0x... ou um tx hash 0x..."
                      style={styles.input}
                    />
                    <button
                      onClick={() => {
                        const v = explorerValue.trim();
                        if (!v) return;
                        const url = v.startsWith('0x') ? `https://sepolia.etherscan.io/search?f=0&q=${encodeURIComponent(v)}` : `https://sepolia.etherscan.io/`;
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }}
                      style={{ ...styles.btnBase, ...styles.btnPrimary, cursor: 'pointer' }}
                    >
                      Abrir
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}

            {slide?.columns && slide.columns.length > 0 ? (
              <div style={styles.cols3}>
                {slide.columns.map((col, colIndex) => (
                  <div key={`${col.title}-${colIndex}`} style={styles.colCard}>
                    <p style={styles.colTitle}>{col.title}</p>
                    {col.image ? (
                      <img
                        src={col.image.src}
                        alt={col.image.alt ?? ''}
                        style={{ ...styles.colImg, ...(col.image.style ?? null) }}
                      />
                    ) : null}
                    {col.links && col.links.length > 0 ? (
                      <div style={styles.colLinks}>
                        {col.links.map((l, i) => (
                          <a key={`${l.url}-${i}`} href={resolveUrl(l.url)} target="_blank" rel="noreferrer" style={styles.colLink}>
                            ↗ {l.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                    {col.qrs && col.qrs.length > 0 ? (
                      <div
                        style={{
                          ...styles.colQrRow,
                          gridTemplateColumns:
                            col.qrs.length >= 3 ? 'repeat(3, minmax(0, 1fr))' : col.qrs.length === 2 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
                        }}
                      >
                        {col.qrs.map((qr, i) => (
                          <div key={`${qr.url}-${i}`} style={styles.colQrBox}>
                            <img
                              src={`https://api.qrserver.com/v1/create-qr-code/?size=116x116&margin=4&data=${encodeURIComponent(resolveUrl(qr.url))}`}
                              alt={`QR Code ${qr.label ?? ''}`.trim()}
                              style={styles.colQrImg}
                            />
                            <div style={styles.colQrLabel}>{qr.label ?? 'QR Code'}</div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}

            {slide?.bullets && slide.bullets.length > 0 ? (
              qrs.length > 0 ? (
                isFaucetSlide ? (
                  <div>
                    <ul style={styles.bullets}>
                      {slide.bullets.map((b, i) => <li key={i} style={styles.bullet}>{b}</li>)}
                    </ul>
                    <div
                      style={{
                        marginTop: 12,
                        ...styles.qrList,
                        gridTemplateColumns:
                          qrs.length >= 3 ? 'repeat(3, minmax(0, 1fr))' : qrs.length === 2 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
                      }}
                    >
                      {qrs.map((qr, i) => (
                        <div key={`${qr.url}-${i}`} style={styles.qrBox}>
                          <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=188x188&margin=4&data=${encodeURIComponent(resolveUrl(qr.url))}`}
                            alt={`QR Code ${qr.label ?? ''}`.trim()}
                            style={styles.qrImg}
                          />
                          <div style={styles.qrLabel}>{qr.label ?? 'QR Code'}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div style={styles.qrGrid}>
                    <ul style={styles.bullets}>
                      {slide.bullets.map((b, i) => <li key={i} style={styles.bullet}>{b}</li>)}
                    </ul>
                    <div
                      style={{
                        ...styles.qrList,
                        gridTemplateColumns: qrs.length > 1 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
                      }}
                    >
                      {qrs.map((qr, i) => (
                        <div key={`${qr.url}-${i}`} style={styles.qrBox}>
                          <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=188x188&margin=4&data=${encodeURIComponent(resolveUrl(qr.url))}`}
                            alt={`QR Code ${qr.label ?? ''}`.trim()}
                            style={styles.qrImg}
                          />
                          <div style={styles.qrLabel}>{qr.label ?? 'QR Code'}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ) : (
                slide?.sideImage ? (
                  <div style={styles.sideGrid}>
                    <ul style={styles.bullets}>
                      {slide.bullets.map((b, i) => <li key={i} style={styles.bullet}>{b}</li>)}
                    </ul>
                    <img
                      src={slide.sideImage.src}
                      alt={slide.sideImage.alt ?? ''}
                      style={{ ...styles.sideImg, ...(slide.sideImage.style ?? null) }}
                    />
                  </div>
                ) : (
                  <ul style={styles.bullets}>
                    {slide.bullets.map((b, i) => <li key={i} style={styles.bullet}>{b}</li>)}
                  </ul>
                )
              )
            ) : null}

            {slide?.image ? (
              <img
                src={slide.image.src}
                alt={slide.image.alt ?? ''}
                style={{ ...styles.slideImage, ...(slide.image.style ?? null) }}
              />
            ) : null}

            {(slide?.links && slide.links.length > 0) || (slide?.info?.links && slide.info.links.length > 0) ? (
              <div style={linkRowStyle}>
                {(slide.links ?? []).map((l, i) =>
                  'separator' in l ? (
                    <span key={`ls-${i}`} aria-hidden style={{ width: 18 }} />
                  ) : (
                    <a key={`l-${i}`} href={resolveUrl(l.url)} target="_blank" rel="noreferrer" style={styles.linkChip}>
                      ↗ {l.label}
                    </a>
                  )
                )}
                {(slide.info?.links ?? []).map((l, i) =>
                  'separator' in l ? (
                    <span key={`ils-${i}`} aria-hidden style={{ width: 18 }} />
                  ) : (
                    <a key={`il-${i}`} href={resolveUrl(l.url)} target="_blank" rel="noreferrer" style={styles.linkChip}>
                      ↗ {l.label}
                    </a>
                  )
                )}
              </div>
            ) : null}
          </div>
        </section>
      </div>

      <nav style={styles.navWrap}>
        <button
          onClick={() => setIndex((v) => Math.max(0, v - 1))}
          disabled={!canPrev}
          style={{ ...styles.btnBase, opacity: canPrev ? 1 : 0.5, cursor: canPrev ? 'pointer' : 'not-allowed' }}
        >
          ←
        </button>
        <div style={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{ ...styles.dot, ...(i === index ? styles.dotOn : null), cursor: 'pointer' }}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((v) => Math.min(total - 1, v + 1))}
          disabled={!canNext}
          style={{ ...styles.btnBase, ...styles.btnPrimary, opacity: canNext ? 1 : 0.5, cursor: canNext ? 'pointer' : 'not-allowed' }}
        >
          →
        </button>
      </nav>

      <div style={styles.padQrWrap}>
        <div style={styles.padQrUrl}>{PAD_URL}</div>
        <div style={styles.padQrBox}>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=108x108&margin=4&data=${encodeURIComponent(PAD_URL)}`}
            alt="QR Code Pad"
            style={styles.padQrImg}
          />
          <div style={styles.padQrLabel}>Pad</div>
        </div>
      </div>
    </main>
  );
}
