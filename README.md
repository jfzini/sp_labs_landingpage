Este projeto consiste na criação de uma Landing Page com Chatbot para o produto SP Labs, no contexto do processo seletivo para Desenvolvedor Front-end da [Sem Processo](https://www.semprocesso.com.br/).

___

# 🚀 Demo ✈️

A versão publicada da aplicação está disponível em: [https://sp-labs-landingpage.vercel.app/](https://sp-labs-landingpage.vercel.app/)

Abaixo segue o vídeo de demonstração da aplicação:

https://github.com/jfzini/sp_labs_landingpage/assets/122232543/bf6e9d9a-a2bb-4a0b-951b-72fc99f262c1

___
### ✅ Pré-requisitos

Para garantir o funcionamento correto da aplicação em ambiente local, é necessário que você tenha instalado:
* node: 16+

___

## ⚛️ ⚡React + Vite

O Projeto foi desenvolvido com React + Vite. Para rodar o projeto localmente, no diretório raiz da aplicação, faça uso do comando

```bash
npm run dev
```

O projeto será executado, preferencialmente, em `http://localhost:5173`, mas caso esta porta já esteja ocupada, o Vite executará a aplicação na próxima porta disponível.

___

## 🧑‍💻 Bases utilizadas para o desenvolvimento do projeto

O layout do projeto foi desenvolvido com base no Figma disponibilizado durante a fase de seleção para vaga de Desenvolvedor Front-end na [Sem Processo](https://www.semprocesso.com.br/).

Alguns pontos são importantes de serem destacados:

  * O [Guia de Brand](https://www.semprocesso.com.br/brand) da Sem Processo foi utilizado para a garantia de utilização da tipografia correta, bem como o código de cores foi utilizado subsidiariamente para definição de alguns elementos extras, como a barra de rolagem lateral.

  * O projeto usa Redux para gerenciamento de estado e facilitação de uma implementação mais limpa e escalável de funcionalidades como o Chatbot.

  * O projeto utiliza React Hook Form para gerenciamento de formulários, com o objetivo de facilitar a validação e o envio de dados para a API. A utilização dessa biblioteca ainda apresenta vantagens de segurança de submissão de dados para além das validações do browser, criação de formulários dinâmicos e renderização condicional de mensagens de erro.

  * A Landing Page e o Chatbot, apesar de não possuirem rotas diferentes, foram considerados, na organização do projeto, como páginas separadas, com o objetivo de facilitar a manutenção, escalabilidade e modularidade do projeto.

  * O Chatbot armazena o histórico das mensagens, tanto no estado gerenciado pelo Redux, quanto no Local Storage do navegador, de modo a ser possível separar as mensagens por sessão. O Local Storage foi escolhido como forma de armazenamento de dados por ser uma forma simples e rápida de armazenar dados no navegador, sem a necessidade de uma API ou banco de dados neste momento do projeto. Caso o projeto fosse escalado, a refatoração seria simples, dado que a estrutura de renderização seria mantida.

___
## 💅 Linters

O projeto utiliza ESLint e Sass Lint para garantir a padronização do código. Para rodar os linters, utilize o comando:

```bash
npm run lint
npm run style-lint
npm run style-lint:fix
```

___
## 💻 Tecnologias usadas

  * ReactJS

  * React Hooks

  * React Hook Form

  * Redux

  * Redux-thunk

  * Sass

  * ESLint

  * Sass Lint

___

### ⭐️

Se este repositório te ajudou de alguma forma, deixe uma ⭐️!
