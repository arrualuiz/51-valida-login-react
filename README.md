# ValidaLogin

> Projeto acadêmico da disciplina **Tecnologias para Desenvolvimento Web** — PUCPR (`11100010566_20261_21`).

Aplicação React desenvolvida para demonstrar a construção de uma tela de login e a validação de dados informados pelo usuário. O projeto corresponde à Atividade Somativa 1 da disciplina e foi elaborado como exercício prático de componentes, estado e eventos no front-end.

## O que o sistema faz

A interface apresenta um formulário simples com:

- campo de e-mail;
- campo de senha;
- botão **Acessar**;
- área de feedback para informar o resultado da tentativa de login.

Ao selecionar **Acessar**, a aplicação compara os dados preenchidos com as credenciais de demonstração configuradas no componente. Quando os dois valores correspondem, ela mostra `Acessado com sucesso!`; caso contrário, mostra `Usuário ou senha incorretos!`.

Para testar o fluxo positivo, use:

```text
E-mail: eduardo.lino@pucpr.br
Senha: 123456
```

Essas credenciais existem somente para fins didáticos. Esta versão não possui autenticação real, cadastro de usuários nem conexão com banco de dados.

## Como foi elaborado

O sistema foi construído como um componente de classe em React. O estado inicial armazena `email`, `senha` e `mensagem`. Cada campo é controlado: ao digitar, o evento `onChange` chama um método que atualiza o estado com `setState`.

O botão aciona o método `validarLogin`, que verifica se e-mail e senha correspondem aos valores definidos para o exercício. O resultado da verificação atualiza `mensagem`, e o React renderiza automaticamente o feedback na tela. Assim, o projeto exercita o ciclo completo de interação: entrada de dados, tratamento de evento, alteração de estado e atualização da interface.

## Mecanismos e tecnologias

| Mecanismo | Aplicação no projeto |
| --- | --- |
| React | Estrutura da interface em um componente reutilizável. |
| Componente de classe | Organização do estado e dos métodos de interação em `App.js`. |
| Estado (`state`) | Armazenamento dos valores digitados e da mensagem de retorno. |
| Eventos (`onChange` e `onClick`) | Captura da digitação e execução da validação. |
| Inputs controlados | Os campos exibem sempre os valores mantidos pelo estado do React. |
| CSS | Estilização da interface em `App.css` e `index.css`. |

## Estrutura principal

```text
.
├── App.js        # Componente da tela e lógica de validação
├── App.css       # Estilos do componente
├── index.js      # Ponto de entrada da aplicação React
├── index.css     # Estilos globais
├── package.json  # Dependências e comandos do projeto
└── public/       # Arquivos públicos da aplicação
```

> Observação: o repositório contém dependências como Firebase e React Router DOM para estudos posteriores, mas elas não são utilizadas pela implementação atual da Atividade Somativa 1.

## Como executar

### Pré-requisitos

- Node.js 18 ou superior;
- npm.

### Instalação e execução

```bash
git clone https://github.com/arrualuiz/51-PUCPR_TecnologiaParaDesenvolvimentoWeb.git
cd 51-PUCPR_TecnologiaParaDesenvolvimentoWeb
npm install
npm start
```

Depois, abra [http://localhost:3000](http://localhost:3000) no navegador.

## Comandos disponíveis

```bash
npm start     # inicia o ambiente de desenvolvimento
npm test      # executa os testes configurados pelo Create React App
npm run build # gera a versão otimizada para produção
```

## Contexto acadêmico

O projeto atende ao enunciado da Atividade Somativa 1 de **Tecnologias para Desenvolvimento Web**: criar uma aplicação React com título, campos de e-mail e senha, botão de validação e mensagem de retorno conforme as credenciais informadas. A implementação prioriza a compreensão dos fundamentos de React antes da evolução para recursos como rotas, autenticação com Firebase e persistência de dados.
