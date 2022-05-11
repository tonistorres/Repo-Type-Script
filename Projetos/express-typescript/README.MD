![Tux, the Linux mascot](/ts.png)

## Configurando package.json:


- [x] - Criando uma pasta e acessando-a:


```console

mkdir express-typescript
cd express-typescript

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

- [x] - Adicionando suporte ao TypeScript ao nosso projeto, para isso iremos instalar o pacote npm do TypeScript ;

>OBSERVAÇÃO IMPORTANTE: Em produção sempre utilizaremos o código compilado do TypeScript para JavaScript, por isso instalamos o compilador typescript como dependência de desenvolvimento -D.

```console
npm install -D typescript
```

- [x] - Instalando o @types/node para obter os tipos de nó;

```console
npm install -D @types/node
```

- [x] - Instalando o tsc de maneira global (Opcional)

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
- [x] - Instalando o ts-node-dev, que é um pacote de utilitários que vai nos ajudar a executar o servidor de desenvolvimento, escrito em TypeScript, diretamente no terminal, sem necessidade de compilarmos o código em JavaScript, além de reiniciar o servidor a cada alteração que fizermos, sem a necessidade de encerrarmos o processo e o iniciarmos novamente.

```console
npm install -D ts-node-dev
```

![Express](/express.png)

## Setup inicial instalação Express Server:

- [x] - Instalando Framework Express;

```console
npm install express
```

- [x] - Instalando pacote npm de declaração de tipos do Express;

```console
npm install -D @types/express
```

- [x] - Instalando o pacote npm StatusCode que nos permite lhe dá com status HTTP de uma forma mais simplificada;

```console
npm install http-status-codes
```

- [x] - Adicionar essa seguinte configuração no package.json para garantir que nossa aplicação irá rodar da forma desejada;

```json
"scripts": {
    "start": "npm run build && node ./dist/index.js",
    "dev": "tsnd index.ts",
    "build": "tsc"
 },

 ```
Scripts:

- start: executa o build da aplicação e depois roda o arquivo compilado dentro da pasta dist;
  
- dev: executa a aplicação em modo de desenvolvimento utilizando o ts-node-dev;
  
- build: executa a compilação do projeto utilizando o TSC.

- [x] - Adicionando  middleware de erro, qualquer erro que acontecer em tempo de execução automagicamente cairá nesse middleware de captura de erro.

> Observação: Sempre coloque esse middleware após a declaração dos demais middleware da sua aplicação, caso contrário ele não irá capturar o erro dos demais.

```javascript
// ./index.ts

import express, { NextFunction, Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
//
// const app = express();
//
// app.use(express.json());
//
// const PORT = 8000;
//
// app.get('/', (req: Request, res: Response) => {
//   res.status(StatusCodes.OK).send('Express + TypeScript')
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

```

- [x] - Instalando a biblioteca express-async-errors;

> Obsevação: Essa lib faz o tratamento de erros disparar diretamente o middleware de erro sem necessidade de colocar try-catch.

> Observação 2: Para utilizá-la basta fazer a importação da seguinte forma, conforme explicitado abaixo:

```console
import 'express-async-errors';
```

```console
npm install express-async-errors
```

- [x] - Para nosso setup ficar 100% vamos instalar mais duas libs que usaremos um pouco mais a frente. Elas nos ajudarão a disparar erros específicos para serem tratados no middleware de erro.

```console
npm install restify-errors @types/restify-errors
```

-[x] - Instalar o drive de conexão entre uma aplicação node e mysql;

[Pacote npm ](https://www.npmjs.com/package/mysql2)

```console
npm install --save mysql2
```

- [x] - Instalar dotenv para configurações de variávies de ambiente;

[Pacote npm ](https://www.npmjs.com/package/dotenv)

```console 
npm install dotenv --save
```
