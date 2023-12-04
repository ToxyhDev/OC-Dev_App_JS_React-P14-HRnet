![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

# 👨‍💼 Project 14 - Switch a jQuery library to React

Here you will find **project 14** of the **“JavaScript/React application developer”** training. 
This project is the last of the training. It consists of converting a web application created in JQuery into React.js. A module must be created, and then published on npm in order to use it subsequently. State management with Redux must be developed.

## Table of Contents

- [🛠️ Project](#%EF%B8%8F-project)
  - [Prerequisites](#1-prerequisites)
  - [Starting the project](#2-starting-the-project)
  - []()
- [🔗 ]()
- [🚧 Setting up ESlint for this project](#-setting-up-eslint-for-this-project)


## 🛠️ Project

### 1. Prerequisites



### 2. Starting the project

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

- Start server:
```bash

# Install dependencies
npm install

```

### 3. 



## 🔗 


## 🚧 Setting up ESlint for this project

> [!IMPORTANT]  
> The information in this part is for information purposes only, the configuration is already applied.

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list