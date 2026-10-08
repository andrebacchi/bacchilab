# BACCHI LAB: guia de manutenção

Hub e apps educacionais de André Demambre Bacchi (UFR). Tudo em português do Brasil.
Este arquivo é o ponto de partida para qualquer conversa que vá mexer nos apps: leia antes de começar.

## Endereços e repositórios (todos em github.com/andrebacchi, públicos)

| App | Repositório | Publicação (GitHub Pages) | Fonte |
|---|---|---|---|
| BACCHI LAB (hub) | `bacchilab` | branch `main`, raiz | `index.html` é a fonte |
| Nomo LAB | `nomo-lab` | branch `main`, raiz | `index.html` é a fonte (arquivo único) |
| STAT LAB | `stat-lab` | branch `main`, raiz | `src/*` → `sh build.sh` gera `index.html` |
| 2×2 LAB | `2-2-lab` | branch `gh-pages` | React/Vite (origem Base44) em `main`; ver `standalone/LEIA-ME.md` |
| STUDY LAB | `study-lab` | branch `main`, raiz | `src/*` → `sh build.sh` gera `index.html` (`sh build.sh artifact` para artefato); ver o `README.md` do repositório |
| Bingo do Picareta | `bingo-picareta` | branch `gh-pages` | idem |
| Gerador de Pseudociências | `gerador-pseudociencias` | branch `gh-pages` | idem |
| FARMACO LAB | `farmaco-lab` | branch `main`, raiz | `src/*` → `sh build.sh` gera `index.html` (`sh build.sh artifact` para artefato) |
| Tarot Cético | `tarot-cetico` | branch `main`, raiz | `src/*` → `sh build.sh` gera `index.html` e `sw.js` (`sh build.sh artifact` para artefato); ver o `CLAUDE.md` do repositório |
| Protocolo Zero | `protocolo-zero` | branch `main`, raiz | `src/*` → `sh build.sh` gera `index.html` e `sw.js` (`sh build.sh artifact` para artefato); ver o `CLAUDE.md` do repositório |

Endereço de cada app: `https://andrebacchi.github.io/<repositório>/`. O hub fica em `/bacchilab/` (o André usa um encurtador para ele).
O André saiu do Base44: não há mais sincronização; tudo é mantido direto no GitHub.

Para trabalhar num repositório numa conversa nova: anexe-o à sessão (add_repo) e clone. Um repositório novo precisa ser criado pelo André
(público, vazio); depois ele liga o Pages em Settings → Pages → branch e pasta (`main` / root, ou `gh-pages` / root).
O proxy da sessão costuma bloquear github.io e fonts.googleapis.com: teste localmente (`python3 -m http.server` + Playwright)
e peça ao André para conferir o site no ar.

## Toda atualização de app publicado

- Aumente a versão do cache no `sw.js` (senão quem instalou continua vendo a versão antiga).
- Teste em 390 px (celular) e 1280 px ou mais (computador/projetor), sem rolagem horizontal, e no tema escuro quando houver.
- Commits com autor "André Demambre Bacchi".

## Incluir um app novo no hub

1. Publique o app no próprio repositório.
2. Ícone 192×192 em `icons/apps/<repo>.png`.
3. Acrescente o item em `GROUPS` no `index.html` (nome, path `/<repo>/`, ícone, cor, descrição curta, chips; `isNew: true` mostra o selo "Novo").
4. Acrescente o ícone em `FILES` e aumente `VERSION` no `sw.js`.
5. Confira o QR code (dá para decodificar a captura com `cv2.QRCodeDetector`).

Seções atuais: "Série EPIDEMIO LAB" (laboratórios de epidemiologia clínica e estatística), "Outros laboratórios" (FARMACO LAB) e "Jogos e sátiras".
Sobre o autor: preencha o objeto `AUTHOR` (foto e bio) no `index.html`; enquanto `bio` estiver vazia, o nome não é clicável.
Livros: ficaram de fora do hub por decisão do André (pode voltar no futuro).

## Padrão visual da série LAB

- Fontes: Newsreader (títulos), Instrument Sans (texto), IBM Plex Mono (números, códigos). Fundo `#f6f6f3`, texto `#161a22`.
- Cada app tem uma cor: Nomo `#0f6b63` (verde-petróleo), STAT `#2f4b9a` (índigo), 2×2 `#7a284b` (vinho), STUDY `#56671b` (verde-oliva); Bingo `#e11d48`; Gerador dourado `#a07a2c` sobre escuro; FARMACO `#b3202a` (vermelho; o André não quis roxo); Tarot Cético ametista `#6b3fa0` (visual próprio: mesa de veludo, cartas em pergaminho, fonte Macondo); Protocolo Zero verde-água `#2bb3a3` (visual próprio: mesa de campo azul-marinho, fonte Saira Condensed).
- Cabeçalho: nome do app grande, "Criado por André D. Bacchi", botões em pílula: **Instalar** (sempre escrito por extenso, também no celular),
  Alto contraste, Como usar. O Instalar usa `beforeinstallprompt` e, se não houver, abre instruções com abas iPhone e iPad / Android / Computador.
  O Instalar só some na janela do próprio app instalado. Aberto por dentro de outro app instalado (o hub, por exemplo), o Android também responde
  `display-mode: standalone`; por isso cada app usa `janelaApp()` (olha `document.referrer` e marcas em localStorage/sessionStorage) e `appInstalado()`
  (`navigator.getInstalledRelatedApps`, com `related_applications` no manifest). Nesse caso o botão continua visível e as instruções mostram o aviso
  "abra no Chrome para instalar". Nos apps React a lógica fica em `src/lib/janela.js`.
- Voltar ao hub: todo app tem o link "‹ BACCHI LAB" (maiúsculas espaçadas, cor apagada) apontando para `https://andrebacchi.github.io/bacchilab/`.
  Na série LAB ele fica acima do nome do app (`a.hub` dentro de `.brand`); no Tarot, no Bingo e no Gerador, no canto superior esquerdo da tela inicial, ao lado do Instalar.
- QR code: todo app tem um botão **QR code** ao lado do Instalar. Ele abre o QR do endereço do próprio app, grande, sobre fundo branco,
  com o endereço escrito e o botão "Copiar link", para compartilhar entre celulares ou projetar. O desenho é fixo (o endereço não muda):
  foi gerado uma vez com o `qrcode.js` deste repositório (nível M) e fica embutido em cada app, sem biblioteca. Se um endereço mudar, gere de novo.
- Rodapé com versão e aviso de uso educacional.
- Apps são PWA: `manifest.json`, `sw.js`, ícones 192/512/maskable/apple-touch.

## Preferências de conteúdo do André

- Programa introdutório (2º semestre de Medicina): simples e elegante, interativo e visual, com exemplos prontos e campos para números próprios.
- Escreva "probabilidade", não "chance" (exceto no termo técnico "razão de chances").
- Exemplos genéricos, sem copiar os slides da aula.
- Probabilidade fica dentro de Estatística descritiva no STAT LAB.
- Copyright: "© André Demambre Bacchi. Todos os direitos reservados"; Nomo LAB e STAT LAB sob CC BY 4.0.
- FARMACO LAB: uma aba por classe (no ar: anestésicos locais e contraceptivos orais; depois farmacocinética, farmacodinâmica, outras classes). As classes ficam em `LABS` (`src/main.js`); contraceptivos orais em `src/co-*.js`, com base na aula do André e nas fontes citadas em cada Saiba mais. Conteúdo baseado nas aulas do André, já com as correções (três estados do canal NaV; manto × núcleo explica a ordem topográfica, não C antes de A; pH inflamado não é fixo; lidocaína 4,5 mg/kg sem adrenalina).
- Service workers: todos os apps dividem a origem andrebacchi.github.io; ao limpar caches antigos, apague só os do próprio app (filtrar pelo prefixo).

## Detalhes técnicos úteis

- STAT LAB: a biblioteca estatística (`src/lib.js`) foi conferida contra scipy/statsmodels (`tools/ver.py`, `tools/ver.js`).
- Bingo, Modo Sala de Aula: sem servidor. O código da partida define a ordem do sorteio e o código da cartela define a cartela
  (`src/lib/classroom.js`, PRNG mulberry32 com hash; alfabeto sem I, O, 0 e 1).
- STUDY LAB e 2×2 LAB se ligam nos dois sentidos: o STUDY LAB abre `/2-2-lab/?a=&b=&c=&d=&tipo=` (lido em `src/lib/studyLab.js` do 2×2 LAB) e o seletor de desenho do 2×2 LAB abre `/study-lab/#tempo-<desenho>`. Conteúdo do STUDY LAB baseado nas aulas de Tipos de estudos I, II e III.
- Hub: `qrcode.js` (Kazuhiko Arase, MIT) vem incluído no repositório, para os QR funcionarem sem internet.
- Protocolo Zero: jogo de sala de aula (mecânica do Incan Gold) com palpites de risco por equipe e relatório final; regras e decisões no `CLAUDE.md` do repositório.
- Tarot Cético: versão digital do livro-jogo (o livro é de acesso aberto e o André, autor, autorizou o uso literal do texto). Modo Educativo sem servidor,
  com código da turma e código pessoal do aluno (mesma ideia do Bingo). "A carta de hoje" sai da data: no mesmo dia, todos recebem a mesma carta.
