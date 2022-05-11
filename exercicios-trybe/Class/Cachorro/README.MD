![Tux, the Linux mascot](/ts.png)

## Configurando package.json:
```

- [x] - para colocar de forma automágica iremos inicializar um arquivo package.json e no script start iremos colocar essa linha de comando para digitarmos apenas npm start.


```console 
npm init -y
```

```json
"start":"tsc && node dist/src/index.js",
```

![package.json](/package.png  )

## Setup Inicial e uma aplicação TypeScript:

- [x] - Primeiro vamos instalar o compilador typeScript;

```console
npm install -D @tsconfig/node14
```

- [x] - Instalando o @types/node para obter os tipos de nó;

```console
npm install @types/node --save-dev
```

- [x] - Instalando o tsc de maneira global 

```console
npm install -g typescript
```

[pacote npm tsc ](https://www.npmjs.com/package/typescript)

- [x] - Configurando o compilador TypeScript, rode o comando abaixo:

```console 
tsc --init 
```


- [x] - irá gerar um arquivo tsconfig.json com uma quantidade robusta de infromação, para nosso primeiro exemplo troque pelo disponibilizado pelo course e a medida que for avançando o conhecimento no type script iremos incrementando essas configuraçẽos.

> Course(Trybe):

```json
// ./tsconfig.json
{
  "extends": "@tsconfig/node14/tsconfig.json",
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

- [x] - por fim vamos instalar o pacote npm com as definições de tipo do Node.js

```console 
npm install -D @types/node
```

- [x] - Em seguida iremos criar a nossa pasta src, pois, lá conterá todos os arquivos que serão compilados de acordo com a configuração acima disponibilizada na propriedade "include":["src/**/**"].

> Estrutura de pasta:

```console
src
```


> Observação Importante: Todos os arquivos que estiverem na pasta node_modules e que tiverem a extensão spec.ts não serão compilados, serão ignorados, de acordo com a configuração disponibilizada no arquivo tsconfig.json na propriedade exclue.

- [x] - Em seguida iremos criar um arquivo index.ts onde irei escrever meu código type script

> Arquivo: index.ts

- [x] - Em seguida dentro da pasta da aplicação, no terminal do vs code digite o comando tsc para compilar todos os scripts ts dentro da pasta src conforme explicitados no arquivo tsconfig.json, e se tudo estiver certo será gerada uma pasta chamada dist com o meu programa Hello World em typescript traduzido para Hello World em JavaScript.

![Tux, the Linux mascot](/tsparajs.png  )

- [x] - Para compilar e rodar o arquivo no terminal execute o seguinte comando:

```console 
tsc && node dist/src/index.js
