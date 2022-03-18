
# Usando o CSS Modules e Sass
# https://www.npmjs.com/package/typescript-plugin-css-modules
# https://www.npmjs.com/package/sass

# Installation with Yarn:
# yarn add typed-css-modules-webpack-plugin
# yarn add sass


# Installation with NPM:
# npm install -D typescript-plugin-css-modules
# npm i sass


# Geral:
# yarn add typed-css-modules-webpack-plugin sass


# Importação de arquivos de forma absoluta

# No arquivo tsconfig.json adcionar ("baseUrl": "src")
# Antes: import {ReactComponent as Logo} from "../../assets/logo.svg"; //svg
# Depois: import {ReactComponent as Logo} from "assets/logo.svg"; //svg


# Reset CSS: O que é, Exemplos, Como Criar e Utilizar,  pronto apenas colar no index.css
# https://www.alura.com.br/artigos/o-que-e-reset-css?gclid=EAIaIQobChMI58bN6tjK9gIVFAeRCh1G1gvBEAAYASAAEgKWsfD_BwE

# /* rest of app styles - https://create-react-app.dev/docs/adding-css-reset */
# @import-normalize; /* bring in normalize.css styles */

# Melhor forma (yarn add normalize-css) e importa no index geral (import "./index.css";)


# Suport: https://create-react-app.dev/docs/adding-images-fonts-and-files



# Icons React
# yarn add react-icons


# Install classnames para classes condicionais
# yarn add classnames




# Adding Images, Fonts, and Files
# https://create-react-app.dev/docs/adding-images-fonts-and-files
# https://create-react-app.dev/docs/using-the-public-folder






# ícone React: conhecendo a biblioteca React Router React: conhecendo a biblioteca React Router

# Criando o ESLint

# https://eslint.org/docs/user-guide/getting-started


nstallation and Usage
Prerequisites: Node.js (^12.22.0, ^14.17.0, or >=16.0.0) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

You can install ESLint using npm or yarn:

npm install eslint --save-dev

# or

yarn add eslint --dev


You should then set up a configuration file, and the easiest way to do that is:

npm init @eslint/config

# or

yarn create @eslint/config



? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style  --->ok



? What type of modules does your project use? ...
> JavaScript modules (import/export) --->ok
  CommonJS (require/exports)
  None of these


  ? Which framework does your project use? ...
> React  --->ok
  Vue.js
  None of these


  ? Does your project use TypeScript? » 
/ No
/ Yes --->ok




? How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style  --->ok


? What style of indentation do you use? ...
> Tabs
  Spaces --->ok


  ? What quotes do you use for strings? ...
> Double --->ok
  Single



corrigindo erros!
yarn run eslint ./src/ --fix
yarn eslint ./src/ --fix


"rules": {
        "react/react-in-jsx-scope": "off", do react
        "indent": [
            "error",
            4
        ],


        validando:
        yarn eslint ./src/ --fix




# Usando react-router-dom
        yarn add react-router-dom
        yarn add react-router-dom@6





Comando para indentar usando o  --> eslint
yarn eslint ./src/ --fix