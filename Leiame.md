
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