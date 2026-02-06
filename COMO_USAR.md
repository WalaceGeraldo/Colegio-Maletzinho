# Gerador de Plano Semanal - Malletzinho

Este é um sistema simples para gerar o planejamento semanal da Creche Comunitária Malletzinho.

## Como Usar

1.  Abra o arquivo `index.html` no seu navegador (Google Chrome, Edge, Firefox).
2.  **Configurações**: Vá na aba "Configurações"    *   Vá em **Configurações** (⚙️) para mudar o Mês, as Datas e a Turma.
    *   Você também pode colocar uma URL de imagem para a logo, se tiver uma hospedada na internet.
3.  **Preencher**: Clique nas abas dos dias da semana (Segunda, Terça, etc.) e preencha os campos.
    *   *Dica*: O sistema salva automaticamente o que você digita.
4.  **Gerar Arquivo**:
    *   **Opção Word**: Clique em "Salvar em Word" para baixar o arquivo editável (.doc).
    *   **Opção PDF**: Clique em "Gerar PDF / Imprimir", escolha "Salvar como PDF" na janela que abrir.
    *   Nas configurações de impressão:
        *   Layout: **Paisagem** (recomendado se tiver muito texto) ou **Retrato**.
        *   Margens: Padrão ou Mínimas.
        *   Gráficos de plano de fundo: Marque esta opção se as cores não aparecerem (embora o design seja preto e branco para economia).

## Edição
O sistema permite colar textos diretamente nos campos. O conteúdo será formatado automaticamente na tabela final.

## Estrutura dos Arquivos
*   `index.html`: O site em si.
*   `styles.css`: O design (visual bonito na tela, visual de documento na impressão).
*   `script.js`: A lógica que faz o site funcionar.
