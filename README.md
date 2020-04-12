# ts-cli-template

A starter project for creating node cli commands with Typescript. It comes with pre-configured / pre-installed:

-   `yarn` package manager
-   `eslint` with Typescript support
-   `airbnb-typescript/base` eslint profile
-   `prettier` for code formatting
-   `husky` with pre-configured for pre-commit and pre-push hooks
-   `commander` for handling command line argument and cli help.

## Clone

You can clone the project from Github: [https://github.com/killerchip/ts-cli-template](https://github.com/killerchip/ts-cli-template)

or use Github's [Generate from template project](https://github.com/killerchip/ts-cli-template/generate) feature.

Once you cloned the project you might want to change project's name in

-   `package.json` > `name`

-   `package.json` > `bin` key. This will be the cli command that your users will use when launching your program.

-   `src/cli.ts`: The name of your cli command in help files.

## Entry point

Start building your code around `src/index.ts` that's the entry point.

## eslint and prettier

When you commit your code, the parts you touched will be automatically go through prettier transformation.

When you push your code, it will go also under eslint investigation. If problems found the code won't be pushed.

Manually checking eslint rules:

```
yarn lint
```

Manually running `prettier` on all files, automatically formatting them.

```
yarn prettier
```

Modify `.eslintignore`, `.eslintrc.js`, `.prettierignore`, `.prettierrc.js` to adjust eslint and prettier behavior

See [https://eslint.org/](https://eslint.org/) and [https://prettier.io/](https://prettier.io/) for more details.

## commander

`cli.ts` has sample code for using commander to automatically build help description and handling command line options.

See [https://www.npmjs.com/package/commander](https://www.npmjs.com/package/commander) for more details.

## License - MIT

Copyright 2020 Konstantinos Ioannou

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
