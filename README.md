# Palestra Expert Web3 — Slides (Web3/NFTs com Solidity)

Aplicação em Next.js (App Router) que renderiza uma apresentação em formato de slideshow para um workshop/palestra sobre fundamentos de Web3 e criação de um NFT (ERC-721) com Solidity, usando Remix IDE e deploy na testnet Sepolia.

## Conteúdo dos slides

Os slides ficam definidos no array `slides` em [page.tsx](file:///c:/_sonia/dev/palestra/expert/app/page.tsx) e cobrem:

1. Abertura: Instituto Web3EduBrasil, Mulheres na Web3 e Sonia Batista (com QR codes)
2. Comparação Web1, Web2 e Web3
3. O que é Web3
4. Blockchain como livro-razão (ledger)
5. Smart Contracts
6. Padrões: ERC-20, ERC-721 e ERC-1155
7. Segurança: Seed phrase (boas práticas e alertas)
8. Criando a wallet MetaMask + adicionando a rede Sepolia (Chain ID 11155111)
9. Mainnet vs Testnet
10. Faucets para SepoliaETH + explorador Sepolia Etherscan
11. Remix IDE (editor/compilador na nuvem)
12. Solidity (.sol): contrato ERC-721, IPFS e Pinata
13. Deploy no Remix (local, sem gas, sem blockchain real)
14. Deploy real na Sepolia (wallet connect/MetaMask + gas + endereço do contrato)
15. Onde verificar o NFT (Etherscan/MetaMask)
16. Resumo do workshop
17. Próximos passos: comunidades, cursos e hackathons
18. Slide final: link/QR da própria apresentação (Vercel)

## Links importantes (usados nos slides)

- Pad do workshop (fixo no rodapé, em todas as páginas): https://pad.riseup.net/p/expert-28Jun
- MetaMask: https://metamask.io/download/
- Remix IDE: https://remix.ethereum.org/
- OpenZeppelin Wizard (ERC-721): https://wizard.openzeppelin.com/#erc721
- Pinata (IPFS): https://pinata.cloud/
- Sepolia Etherscan: https://sepolia.etherscan.io/
- Faucets (Sepolia):
  - https://cloud.google.com/application/web3/faucet/ethereum/sepolia
  - https://www.alchemy.com/faucets/ethereum-sepolia
  - https://www.infura.io/faucet/sepolia

## Como rodar localmente

Pré-requisitos: Node.js + npm.

```bash
npm install
npm run dev
```

## Navegação

- Clique nas setas (← →) no rodapé.
- Teclado:
  - Próximo: ArrowRight / ArrowDown / barra de espaço
  - Anterior: ArrowLeft / ArrowUp

## Configurações rápidas

- Pad fixo no rodapé: altere `PAD_URL` em [page.tsx](file:///c:/_sonia/dev/palestra/expert/app/page.tsx#L28).
- Slide final (“Apresentação (Vercel)”): o placeholder `__PRESENTATION_URL__` é resolvido automaticamente para `window.location.origin` em runtime.

## Imagens usadas

Arquivos em [public/images](file:///c:/_sonia/dev/palestra/expert/public/images), incluindo: `sonia.jpeg`, `metamask.png`, `web3expert.png`, `mnw3.png`, `smartcontract.png`, `padroes-erc.png`, `web1,2,3.png`, `web3.png`, `livro-razao.png`.
