# BACCHI LAB

Laboratórios, simuladores e jogos para pensar como um cientista.

Endereço: **https://andrebacchi.github.io/bacchilab/**, reunindo os apps de André D. Bacchi:

- **Série EPIDEMIO LAB:** [Nomo LAB](https://andrebacchi.github.io/nomo-lab/), [STAT LAB](https://andrebacchi.github.io/stat-lab/), [2×2 LAB](https://andrebacchi.github.io/2-2-lab/)
- **Jogos e sátiras:** [Bingo do Picareta](https://andrebacchi.github.io/bingo-picareta/), [Gerador de Pseudociências](https://andrebacchi.github.io/gerador-pseudociencias/)

Cada app abre no próprio endereço. O **Modo projetor** mostra os QR codes de todos eles para a turma abrir no celular.

## Como incluir um app novo

1. Publique o app no próprio repositório (ele fica em `andrebacchi.github.io/<nome-do-repo>/`).
2. Coloque o ícone em `icons/apps/<nome>.png` (192 × 192).
3. Acrescente um item na lista `GROUPS` do `index.html` e o ícone na lista `FILES` do `sw.js`; aumente `VERSION` no `sw.js`.

## Sobre o autor

Preencha o objeto `AUTHOR` no `index.html` (foto em `img/`, bio em parágrafos). Com a bio preenchida, o nome no topo vira um botão que abre a apresentação.

© André Demambre Bacchi. Todos os direitos reservados. O gerador de QR code (`qrcode.js`, de Kazuhiko Arase) é distribuído sob a licença MIT.
