# API Recrutamento e Seleção com foco em diversidade

API criada para ajudar empresas a aumentarem a diversidade e inclusão no seu quadro de funcionários e assim usufruir dos benefícios de se tornar uma empresa inclusiva e diversa.

## Visão Geral

A API oferece serviços de recrutamento e seleção. Permite a conexão entre recrutadores e candidatos encurtando o processo de seleção.

## Sobre a Aplicação

O projeto foi implementado em Node.js com Express utilizando banco de dados realacional. Foi desenvolvido sobre o design pattern ()

## Funcionalidade

A API cobre as seguintes funcionalidades:

-   Funcionários
    -   Cadastrar funcionário administrador do sistema
    -   Logar funcionário administrador do sistema
-   Candidatos
    -   Cadastar novo candidato
    -   Logar candidato
    -   Listar candidatos
        -   Por vaga
        -   Por especificações de cadastro
        -   Todos
    -   Detalhar perfil do candidato
    -   Atualizar perfil do candidato
    -   Excluir candidato
-   Vagas
    -   Cadastrar novas vagas
    -   Atualizar vaga
    -   Listar vagas
        - Em aberto
        - Fechadas
        - Congeladas
    -   Detalhar vaga
    -   Excluir vaga

## Requisitos

Para utilizar esta aplicação certifique-se de ter instalodo o `Node.js` na versão LTS e `npm (Node Package Manager)`

## Instalação

1 - Clonar o repositório:

Execute o comando no terminal

SSH
```bash
git clone git@github.com:adailtonasp/adahack-2024-backend.git
```
HTTPS
```bash
git clone https://github.com/adailtonasp/adahack-2024-backend.git
```

2 - Navegue até o diretório do projeto:

```bash
cd adahack-2024-backend/Entregas/BE-4
```
3 - Instale as dependências:
```bash
npm install
```
4 - Configure as variáveis de ambiente:

Existe um arquivo na raiz do projeto, `.env.example` com todas as variáveis de ambiente utilizadas na aplicação.

Para utilizar, deve renomear o arquivo para `.env` e alterar o valor das variáveis de acordo com sua necessidade.

## Uso

Para iniciar a aplicação, execute o comando no terminal:

```bash
npm run dev
```