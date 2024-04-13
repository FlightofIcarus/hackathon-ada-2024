![](https://ada-site-frontend.s3.sa-east-1.amazonaws.com/home/header-logo.svg)

# Sistema de Diversidade para o Setor de RH da Corps Solution

## Descrição do Problema

A empresa Corps Solution está comprometida em aumentar a diversidade em seu quadro de colaboradores, reconhecendo que a diversidade é fundamental para a inovação e o sucesso organizacional. No entanto, atualmente enfrentamos desafios na identificação e promoção da diversidade em nossa empresa. Tanto os colaboradores existentes quanto os futuros candidatos devem refletir uma ampla gama de origens, perspectivas e experiências.

O principal desafio enfrentado pelo setor de RH é a falta de ferramentas e sistemas para avaliar e monitorar efetivamente a diversidade em nossa empresa. Atualmente, não temos uma maneira sistemática de acompanhar métricas de diversidade, como representação de gênero, etnia, idade, habilidades e outras características importantes.

Como resultado, nossa capacidade de identificar lacunas na diversidade, implementar iniciativas de inclusão e avaliar seu impacto é limitada. Isso pode levar a uma cultura organizacional estagnada e a oportunidades perdidas para atrair e reter talentos diversos.

**Conteúdo**

- [Objetivo do Projeto](#objetivo-do-projeto)
- [Sobre a Aplicação](#sobre-a-aplicação)
- [Requisitos](#requisitos)
    - [Funcionais](#funcionais)
    - [Não Funcionais](#não-funcionais)
- [Funcionalidades](#funcionalidades)
    - [1.Cadastro e Login de Usuários](#1-cadastro-e-login-de-usuários)
    - [2.Análise de dados demográficos dos funcionários e candidatos](#2-análise-de-dados-demográficos-dos-funcionários-e-candidatos)
    - [3.Cadastro e Listagem de vagas](#3-cadastro-e-listagem-de-vagas)
- [Instalar e Rodar o Projeto](#instalar-e-rodar-o-projeto)

## Objetivo do Projeto

O objetivo deste projeto é desenvolver uma solução de software para o setor de RH da Corps Solution que possibilite:

- Coletar e armazenar dados sobre a diversidade de nosso quadro de colaboradores.
- Analisar esses dados para identificar áreas de melhoria e oportunidades de inclusão.
- Visualizar métricas de diversidade de maneira clara e acessível para a equipe de RH e a liderança da empresa.
- Facilitar a tomada de decisões informadas sobre políticas e práticas de diversidade e inclusão.

Esperamos que essa solução nos ajude a criar um ambiente de trabalho mais inclusivo, equitativo e acolhedor para todos os nossos colaboradores, promovendo uma cultura de diversidade e respeito mútuo.

## Sobre a Aplicação

O projeto foi implementado em Node.js com Express utilizando um banco de dados realacional. Foi desenvolvido sobre o design pattern (...), utilizando a arquitetura (...).

## Requisitos

### Funcionais:
- API funcional:
    A API deve estar operacional e responder às solicitações conforme esperado, sendo capaz de lidar com grandes volumes de dados e usuários
- Fazer camada de segurança e autenticação (login): 
    Fazer implementação de uma camada de segurança e autenticação para controlar o acesso aos recursos da API.
- Coleta de Dados Demográficos: 
    O sistema deve permitir a coleta de dados demográficos dos funcionários e candidatos.
- Análise e Visualização de Dados: 
    Deve haver funcionalidades para análise e visualização dos dados demográficos coletados, incluindo a criação de gráficos para demonstrar a representatividade de diferentes grupos dentro da empresa.

### Não Funcionais:
- Api escalável:
    A API deve ser desenvolvida de forma a permitir escalabilidade conforme necessário.
- Usar Nodejs e Express:
    Tecnologias que devem ser usadas para desenvolver a API.
- Documentação técnica detalhada:
    Criação de documentação técnica que descreva a arquitetura, tecnologias, modelos de dados e outras decisões de design da API.
- Apresentação final do projeto (Pitch):
    presentar o projeto final, demonstrando as funcionalidades implementadas e explicando as decisões de design, demonstrando que a nossa solução é indispensável para a resolução do problema da empresa.
- Segurança da Informação:
    Garantir a segurança dos dados dos usuários, incluindo medidas para proteger informações sensíveis e garantir conformidade com regulamentações de privacidade de dados.
- Usar branches separadas, seguindo a regra: feature (desenvolvimento) e release (Produção):
    Separação de branches, com uma para o desenvolvimento de novas funcionalidades (feature) e outra para preparação e lançamento de versões de produção (release).
- Usar padrão Conventional Commits:
    Usar commits padronizados para ajudar a manter um histórico de commit limpo, organizado e fácil de entender.

## Funcionalidades

### 1. Cadastro e Login de Usuários:

    Esta funcionalidade permite que usuários se cadastrem e façam login no sistema. O sistema suporta três tipos de usuários: funcionários, RH (administradores) e candidatos.
    
### Fluxo de Cadastro:

1. O usuário acessa a página de cadastro.
2. O usuário preenche o formulário de cadastro com suas informações pessoais.
3. O usuário seleciona o tipo de usuário (funcionário, RH, candidato).
4. O sistema valida os dados fornecidos.
5. O sistema confirma o cadastro e redireciona o usuário para a página de login. 

### Fluxo de Login:

1. O usuário acessa a página de login.
2. O usuário preenche os campos de login (e-mail/username, senha).
3. O sistema valida as credenciais fornecidas.
4. O sistema redireciona o usuário para a área correta do sistema com base no perfil do usuário (funcionário, RH, candidato).

### Divisão de Perfis de Usuários:

- RH (Administradores): Acesso total ao sistema, incluindo gerenciamento de funcionários, recrutamento, listagem de funcionário, listagem de candidatos, análise de dados demográficos dos funcionários e análise de dados demográficos dos candidatos.
- Funcionários: Acesso a informações pessoais.
- Candidatos: Acesso ao formulário de candidatura de emprego e acompanhamento do status de candidatura.

### 2. Análise de dados demográficos dos funcionários e candidatos:

    Esta funcionalidade permite ao RH analisar os dados demográficos dos funcionários e candidatos à vagas, fornecendo insights valiosos sobre a composição demográfica do quadro de colaboradores e candidatos.

### Processo de Análise:

1. Os dados demográficos dos funcionários e candidatos são coletados durante o processo de cadastro.
2. Os dados são armazenados em uma estrutura adequada no banco de dados.
3. O sistema processa os dados para calcular a representação percentual de cada classe demográfica (por exemplo: gênero, etnia, idade).

### Apresentação de Resultados:

1. Os resultados da análise são apresentados ao RH por meio de gráficos.
2. Os gráficos mostram a distribuição percentual de diferentes classes demográficas no quadro de colaboradores e candidatos.
3. O tim de RH pode filtrar e visualizar os dados demográficos por diferentes categorias, como funcionário, candidato, (...).


### 3. Cadastro e Listagem de vagas:

    Esta funcionalidade permite ao departamento de RH cadastrar novas vagas de emprego disponíveis na empresa e listar as vagas existentes para que os candidatos possam visualizá-las e se candidatar.

### Fluxo do Cadastro de Vagas:

1. O funcionário do RH fornece as informações pertinentes ao cadastrar uma nova vaga, como: título da vaga, descrição da vaga, requisitos necessários, localização da vaga, tipo de contrato e data de encerramento da candidatura.
2. O sistema deve validar os dados fornecidos pelo RH e permitir o cadastro da vaga.
3. O sistema cadastra a nova vaga e exibe uma mensagem de confirmação.

### Fluxo de Listagem das vagas:
1. O candidato acessa a página de listagem de vagas.
2. O sistema deve exibir uma lista das vagas de emprego atualmente disponíveis.
3. O candidato pode aplicar filtros para refinar a lista de vagas exibidas.
4. O usuário pode clicar em uma vaga para ver mais detalhes.

## Instalar e Rodar o Projeto

Para utilizar esta aplicação certifique-se de ter instalodo o `Node.js` LTS à partir da v.X.X.X (versão de suporte de longo prazo) e `npm (Node Package Manager)`

<!-- ### Instalação

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

### Uso

Para iniciar a aplicação, execute o comando no terminal:

```bash
npm run dev
``` -->

## Nossa Squad

<style>
.member-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>

<table>
  <tr>
    <td align="center">
      <img class="member-img" src="https://avatars.githubusercontent.com/u/42976966?v=4" alt="Imagem do Membro 1"/><br>
      <a href="https://github.com/Sownatta">Wilson Rocha</a><br>
    </td>
    <td align="center">
      <img class="member-img" src="https://avatars.githubusercontent.com/u/121477907?v=4" alt="Imagem do Membro 2"/><br>
      <a href="https://github.com/FlightofIcarus">Ícaro Santos</a><br>
    </td>
    <td align="center">
      <img class="member-img" src="https://avatars.githubusercontent.com/u/147253362?v=4" alt="Imagem do Membro 3"/><br>
      <a href="https://github.com/PatrickPSouza">Patrick Souza</a><br>
    </td>
    <td align="center">
      <img class="member-img" src="https://avatars.githubusercontent.com/u/134095546?v=4" alt="Imagem do Membro 3"/><br>
      <a href="https://github.com/MariliaPinheiroAlves">Marília Pinheiro Alves</a><br>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img class="member-img" src="https://avatars.githubusercontent.com/u/80291199?v=4" alt="Imagem do Membro 3"/><br>
      <a href="https://github.com/SilvioLucasDev">Silvio Lucas</a><br>
    </td>
    <td align="center">
      <img class="member-img" src="https://avatars.githubusercontent.com/u/26415404?v=4" alt="Imagem do Membro 3"/><br>
      <a href="https://github.com/adailtonasp">Adailton Silva Palhano</a><br>
    </td>
    <td align="center">
      <img class="member-img" src="https://avatars.githubusercontent.com/u/99753415?v=4" alt="Imagem do Membro 3"/><br>
      <a href="https://github.com/DevAugustomelo">Augusto Melo</a><br>
    </td>
    <td align="center">
      <img class="member-img" src="https://avatars.githubusercontent.com/u/110869779?v=4" alt="Imagem do Membro 3"/><br>
      <a href="https://github.com/muriloma">Murilo Andrade</a><br>
    </td>
  </tr>
</table>

