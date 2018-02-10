# proactive-test-pkg
A simple test npm library for Promidea Proactive.

## Follow these steps:

* open terminal (command propmpt)
* go to the folder you want to create the package into
* create folder *&lt;package-name&gt;* e.g. proactive-test-pkg
* go inside *&lt;pakage-name&gt;* folder - cd proactive-test-pkg
* run `npm init` and set the defaults, name, license, github url, test command etc.; this generates the *package.json* file
```json
{
  "name": "proactive-test-pkg",
  "version": "1.0.0",
  "description": "Test NPM package for Promidea Proactive.",
  "main": "dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Promidea",
    "Proactive",
    "Test",
    "Package",
    "NPM"
  ],
  "author": "Promidea",
  "license": "MIT",
  "dependencies": {
    "expr-eval": "^1.2.1"
  }
}
```
* in VS Code, open folder *&lt;package-name&gt;*
* create a *tsconfig.json* file (this one seems OK)
```json
{
    "compilerOptions": {
      "experimentalDecorators": true,
      "lib": ["es5", "dom"],
      "module": "commonjs",
      "target": "es6",
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "sourceMap": true,
      "declaration": true,
      "outDir": "dist",
      "removeComments": false,
      "typeRoots": [
        "node_modules/@types"
      ]
    },
    "files": [
      "src/index.ts"
    ],
    "exclude": [
      "node_modules"
    ]
  }
```
* create a *README.md* file
* create a *src* folder
* edit *package.json* and include at the end the following entry, required for intellisense
```json
"typings": "dist/index.d.ts"
```
* create your library (add files to src folder, install packages, run tests etc.)
* in terminal, run *tsc* to build the library; fix potential errors
* publish using npm (from [npm reference](https://docs.npmjs.com/getting-started/publishing-npm-packages))
1. from the terminal, login into npm
```code
npm login
username:
password:
```
2. inside the *&lt;package-name&gt;* folder run npm publish
```
npm publish
```
3. for later updates, run npm version to increase the version in package.json, then publish
```
npm version 1.0.1
...
npm publish
```
* consume library
1. create your application, for example using [aurelia-skeleton](https://github.com/aurelia/skeleton-navigation) (make sure the application is working, install packages, run tests, etc.)
2. in the terminal, navigate to the application folder (cd *&lt;app-name&gt;*)
3. run npm install for the package *&lt;package-name&gt;*
```
npm install <package-name> --save
and, if using jspm
jspm install npm:<package-name> -y
```
4. import the class or classes you need from the library
```typescript
import { Evaluator } from 'proactive-test-package';
```
5. write the code to consume the imported classes - intellisense should be available:
```typescript
    let e: Evaluator = new Evaluator();
    e.expression = 'a + b';
    e.arguments = { a: 1, b: 2 };
    e.eval();
    console.log(e.result);
```
6. run app, for example using `au watch`, or `gulp watch` or `npm run` or whatever; in our example, the evaluator should calculate `a + b` where a = 1 and b = 2 and display 3 in the console.

